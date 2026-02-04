// Firestore data types for IntelliChat Pro

export interface Bot {
  id: string;
  userId: string;
  name: string;
  purpose: string;
  status: "active" | "inactive" | "draft";
  
  // Configuration
  personality: string;
  welcomeMessage: string;
  fallbackMessage: string;
  
  // AI Settings
  aiProvider: "openai" | "anthropic";
  model: string;
  temperature: number;
  maxTokens: number;
  
  // Knowledge Base
  knowledgeBase: KnowledgeItem[];
  
  // Appearance
  theme: BotTheme;
  
  // Stats
  totalConversations: number;
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
  lastActiveAt: Date | null;
}

export interface KnowledgeItem {
  id: string;
  type: "text" | "url" | "file";
  content: string;
  title: string;
  createdAt: Date;
}

export interface BotTheme {
  primaryColor: string;
  backgroundColor: string;
  fontFamily: string;
  avatarUrl: string | null;
}

export interface Conversation {
  id: string;
  botId: string;
  userId: string;
  visitorId: string;
  status: "active" | "closed";
  messages: Message[];
  metadata: ConversationMetadata;
  createdAt: Date;
  updatedAt: Date;
}

export interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
}

export interface ConversationMetadata {
  userAgent: string;
  referrer: string;
  location?: string;
}

export interface UserSettings {
  userId: string;
  openaiApiKey?: string;
  anthropicApiKey?: string;
  defaultAiProvider: "openai" | "anthropic";
  defaultModel: string;
  createdAt: Date;
  updatedAt: Date;
}

// Create bot input (without auto-generated fields)
export type CreateBotInput = Omit<Bot, "id" | "userId" | "totalConversations" | "createdAt" | "updatedAt" | "lastActiveAt">;

// Update bot input (partial)
export type UpdateBotInput = Partial<Omit<Bot, "id" | "userId" | "createdAt">>;
