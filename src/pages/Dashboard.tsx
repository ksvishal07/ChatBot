import { motion } from "framer-motion";
import { Bot, Plus, BarChart3, Settings, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/firebase/auth";

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  // Placeholder data for bots
  const bots = [
    {
      id: "1",
      name: "Customer Support Bot",
      purpose: "Handle customer inquiries",
      status: "active",
      conversations: 1234,
      lastActive: "2 hours ago",
    },
    {
      id: "2", 
      name: "Sales Assistant",
      purpose: "Product recommendations",
      status: "active",
      conversations: 567,
      lastActive: "5 mins ago",
    },
    {
      id: "3",
      name: "FAQ Helper",
      purpose: "Answer common questions",
      status: "inactive",
      conversations: 890,
      lastActive: "3 days ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold gradient-text">IntelliChat Pro</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:inline">
              {user?.email}
            </span>
            <Link to="/settings">
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
            </Link>
            <Button variant="ghost" size="icon" onClick={handleSignOut}>
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">My Bots</h1>
            <p className="text-muted-foreground">Manage and monitor your chatbots</p>
          </div>
          <Link to="/create">
            <Button className="btn-glow bg-primary text-primary-foreground">
              <Plus className="w-4 h-4 mr-2" />
              Create New Bot
            </Button>
          </Link>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { label: "Total Bots", value: "3", change: "+1 this week" },
            { label: "Total Conversations", value: "2,691", change: "+12% vs last week" },
            { label: "Active Sessions", value: "47", change: "Right now" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-xs text-primary">{stat.change}</div>
            </motion.div>
          ))}
        </div>

        {/* Bots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bots.map((bot, index) => (
            <motion.div
              key={bot.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <div className={`px-2 py-1 rounded-full text-xs ${
                  bot.status === "active" 
                    ? "bg-success/20 text-success" 
                    : "bg-muted text-muted-foreground"
                }`}>
                  {bot.status === "active" ? "Active" : "Inactive"}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                {bot.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{bot.purpose}</p>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <BarChart3 className="w-4 h-4" />
                  {bot.conversations.toLocaleString()} chats
                </div>
                <div className="text-muted-foreground text-xs">
                  {bot.lastActive}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Create New Bot Card */}
          <Link to="/create">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: bots.length * 0.1 }}
              className="glass-card rounded-xl p-6 border-dashed border-2 hover:border-primary/50 transition-all cursor-pointer flex flex-col items-center justify-center min-h-[200px] group"
            >
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Plus className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                Create New Bot
              </span>
            </motion.div>
          </Link>
        </div>
      </main>
    </div>
  );
}
