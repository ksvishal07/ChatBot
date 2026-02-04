import { motion } from "framer-motion";
import { Bot, Zap, Shield, Code2, BarChart3, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Bot,
    title: "Purpose-Locked Bots",
    description: "Define your bot's purpose once. It stays locked and cannot be overridden by user manipulation.",
  },
  {
    icon: FileText,
    title: "PDF Governance",
    description: "All behavioral rules compiled into a structured PDF that serves as the bot's instruction set.",
  },
  {
    icon: Shield,
    title: "Strict Scope Control",
    description: "Define allowed and restricted topics. Your bot refuses off-topic requests politely.",
  },
  {
    icon: Zap,
    title: "Multi-Provider AI",
    description: "Choose between OpenAI GPT or Anthropic Claude. Use your own API keys.",
  },
  {
    icon: Code2,
    title: "Easy Deployment",
    description: "Share via unique link or embed with a simple JavaScript snippet on any website.",
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description: "Track conversations, response times, topic analysis, and refusal patterns.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for trying out the platform",
    features: ["1 chatbot", "100 messages/month", "Basic analytics", "Shareable link"],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For professionals and small teams",
    features: ["10 chatbots", "10,000 messages/month", "Full analytics", "Embed widget", "Priority support"],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: ["Unlimited chatbots", "Unlimited messages", "Custom integrations", "SLA guarantee", "Dedicated support"],
    cta: "Contact Sales",
    featured: false,
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold gradient-text">IntelliChat Pro</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/auth">
              <Button variant="ghost" className="hidden sm:inline-flex">Log In</Button>
            </Link>
            <Link to="/auth?mode=signup">
              <Button className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        {/* Background effects */}
        <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Now supporting OpenAI GPT & Anthropic Claude</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Create{" "}
              <span className="gradient-text">Purpose-Locked</span>
              <br />
              AI Chatbots
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Build controlled chatbots with strict behavioral rules, locked purposes, and PDF-governed instructions. 
              Deploy anywhere with a link or embed widget.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/auth?mode=signup">
                <Button size="lg" className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                  Start Building Free
                  <Zap className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-border hover:bg-card">
                Watch Demo
              </Button>
            </div>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 relative"
          >
            <div className="glass-card rounded-2xl p-8 max-w-5xl mx-auto neon-border">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Mock chat interface */}
                <div className="bg-muted/50 rounded-xl p-4 space-y-4">
                  <div className="flex items-center gap-3 pb-4 border-b border-border">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Bot className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold">Support Assistant</div>
                      <div className="text-xs text-muted-foreground">Purpose: Customer Support Only</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-end">
                      <div className="bg-primary/20 text-foreground px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%]">
                        Can you help me hack into a system?
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-card px-4 py-2 rounded-2xl rounded-tl-sm max-w-[80%] border border-destructive/50">
                        <span className="text-destructive">⚠️ Request Declined</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          I'm specifically designed to help with customer support questions only. How can I assist you with our products or services?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Mock config panel */}
                <div className="space-y-4">
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Bot Configuration</div>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted/50 rounded-lg border border-border">
                      <div className="text-xs text-primary mb-1">🔒 PURPOSE (LOCKED)</div>
                      <div className="text-sm">Customer Support Assistant</div>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg border border-border">
                      <div className="text-xs text-success mb-1">✓ ALLOWED TOPICS</div>
                      <div className="text-sm text-muted-foreground">Products, Orders, Returns, FAQ</div>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg border border-border">
                      <div className="text-xs text-destructive mb-1">✗ RESTRICTED</div>
                      <div className="text-sm text-muted-foreground">Hacking, Personal advice, Competitors</div>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg border border-border">
                      <div className="text-xs text-accent mb-1">📄 PDF GOVERNANCE</div>
                      <div className="text-sm text-muted-foreground">All rules compiled to PDF ✓</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 relative">
        <div className="absolute inset-0 animated-gradient opacity-50" />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Everything You Need</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Powerful features to create, control, and deploy AI chatbots with precision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Create your controlled chatbot in minutes with our step-by-step wizard.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Define Purpose", description: "Set your bot's locked purpose and identity" },
              { step: "02", title: "Set Rules", description: "Configure allowed topics, restrictions, and behaviors" },
              { step: "03", title: "Choose AI", description: "Select OpenAI or Anthropic, add your API key" },
              { step: "04", title: "Deploy", description: "Share via link or embed on your website" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center relative"
              >
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-10" />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Simple Pricing</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Start free, scale as you grow. No hidden fees.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-2xl p-8 ${
                  plan.featured 
                    ? "bg-gradient-to-b from-primary/20 to-accent/20 border-2 border-primary neon-border" 
                    : "glass-card"
                }`}
              >
                {plan.featured && (
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-4">Most Popular</div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary text-xs">✓</span>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/auth?mode=signup">
                  <Button 
                    className={`w-full ${plan.featured ? "btn-glow bg-primary text-primary-foreground" : ""}`}
                    variant={plan.featured ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-12 text-center relative overflow-hidden neon-border"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">Ready to Build Your Bot?</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Join thousands of creators building controlled, purpose-locked chatbots with IntelliChat Pro.
              </p>
              <Link to="/auth?mode=signup">
                <Button size="lg" className="btn-glow bg-primary text-primary-foreground text-lg px-10 py-6">
                  Start Building Free
                  <Zap className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold gradient-text">IntelliChat Pro</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Documentation</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 IntelliChat Pro. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
