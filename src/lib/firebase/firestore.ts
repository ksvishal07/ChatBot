import { 
  collection, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  getDoc, 
  getDocs, 
  query, 
  where, 
  orderBy,
  Timestamp,
  serverTimestamp
} from "firebase/firestore";
import { db } from "./index";
import type { Bot, CreateBotInput, UpdateBotInput, UserSettings, Conversation } from "./types";

// Collection references
const BOTS_COLLECTION = "bots";
const CONVERSATIONS_COLLECTION = "conversations";
const USER_SETTINGS_COLLECTION = "userSettings";

// Helper to convert Firestore timestamps to Date
const convertTimestamps = <T extends Record<string, unknown>>(data: T): T => {
  const converted = { ...data } as Record<string, unknown>;
  for (const key in converted) {
    const value = converted[key];
    if (value && typeof value === "object" && "toDate" in value && typeof (value as Timestamp).toDate === "function") {
      converted[key] = (value as Timestamp).toDate();
    }
  }
  return converted as T;
};

// ============ BOTS ============

export const createBot = async (userId: string, botData: CreateBotInput): Promise<string> => {
  const docRef = await addDoc(collection(db, BOTS_COLLECTION), {
    ...botData,
    userId,
    totalConversations: 0,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    lastActiveAt: null,
  });
  return docRef.id;
};

export const getBot = async (botId: string): Promise<Bot | null> => {
  const docSnap = await getDoc(doc(db, BOTS_COLLECTION, botId));
  if (!docSnap.exists()) return null;
  return convertTimestamps({ id: docSnap.id, ...docSnap.data() }) as Bot;
};

export const getUserBots = async (userId: string): Promise<Bot[]> => {
  const q = query(
    collection(db, BOTS_COLLECTION),
    where("userId", "==", userId),
    orderBy("createdAt", "desc")
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => convertTimestamps({ id: doc.id, ...doc.data() }) as Bot);
};

export const updateBot = async (botId: string, data: UpdateBotInput): Promise<void> => {
  await updateDoc(doc(db, BOTS_COLLECTION, botId), {
    ...data,
    updatedAt: serverTimestamp(),
  });
};

export const deleteBot = async (botId: string): Promise<void> => {
  await deleteDoc(doc(db, BOTS_COLLECTION, botId));
};

// ============ USER SETTINGS ============

export const getUserSettings = async (userId: string): Promise<UserSettings | null> => {
  const docSnap = await getDoc(doc(db, USER_SETTINGS_COLLECTION, userId));
  if (!docSnap.exists()) return null;
  return convertTimestamps({ userId, ...docSnap.data() }) as UserSettings;
};

export const saveUserSettings = async (userId: string, settings: Partial<UserSettings>): Promise<void> => {
  const docRef = doc(db, USER_SETTINGS_COLLECTION, userId);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    await updateDoc(docRef, {
      ...settings,
      updatedAt: serverTimestamp(),
    });
  } else {
    await addDoc(collection(db, USER_SETTINGS_COLLECTION), {
      ...settings,
      userId,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  }
};

// ============ CONVERSATIONS ============

export const getBotConversations = async (botId: string): Promise<Conversation[]> => {
  const q = query(
    collection(db, CONVERSATIONS_COLLECTION),
    where("botId", "==", botId),
    orderBy("createdAt", "desc")
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => convertTimestamps({ id: doc.id, ...doc.data() }) as Conversation);
};

export const getConversation = async (conversationId: string): Promise<Conversation | null> => {
  const docSnap = await getDoc(doc(db, CONVERSATIONS_COLLECTION, conversationId));
  if (!docSnap.exists()) return null;
  return convertTimestamps({ id: docSnap.id, ...docSnap.data() }) as Conversation;
};
