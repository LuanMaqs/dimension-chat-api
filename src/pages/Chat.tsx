import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Send, Paperclip, Mic, Image, Smile } from "lucide-react";
import Navigation from "@/components/Navigation";

interface Message {
  id: string;
  user: string;
  content: string;
  timestamp: Date;
  type: 'text' | 'image' | 'audio';
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      user: "Rick",
      content: "Wubba lubba dub dub! Welcome to the interdimensional chat, Morty!",
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      type: "text"
    },
    {
      id: "2", 
      user: "Morty",
      content: "Oh geez Rick, I-I hope this chat doesn't break reality or anything...",
      timestamp: new Date(Date.now() - 1000 * 60 * 3),
      type: "text"
    },
    {
      id: "3",
      user: "Summer",
      content: "This is actually pretty cool! Way better than those basic social apps.",
      timestamp: new Date(Date.now() - 1000 * 60 * 1),
      type: "text"
    }
  ]);
  
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      user: "You",
      content: newMessage,
      timestamp: new Date(),
      type: "text"
    };

    setMessages(prev => [...prev, message]);
    setNewMessage("");
    
    // Simulate typing response
    setIsTyping(true);
    setTimeout(() => {
      const responses = [
        "That's interdimensional-ly interesting!",
        "Wubba lubba dub dub to you too!",
        "Sounds like something from dimension C-137!",
        "Rick would probably burp and say that's stupid, but I think it's cool!",
        "Don't let Rick hear you say that..."
      ];
      
      const response: Message = {
        id: (Date.now() + 1).toString(),
        user: Math.random() > 0.5 ? "Rick" : "Morty",
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
        type: "text"
      };
      
      setMessages(prev => [...prev, response]);
      setIsTyping(false);
    }, 2000);
  };

  const getUserColor = (user: string) => {
    switch (user) {
      case "Rick": return "bg-rick-blue text-white";
      case "Morty": return "bg-morty-yellow text-background";
      case "Summer": return "bg-space-purple text-white";
      default: return "bg-primary text-primary-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Chat Header */}
        <Card className="p-6 mb-6 bg-gradient-to-r from-card to-muted/50 border-portal-green/20">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-2">
                Interdimensional Chat Room
              </h1>
              <p className="text-muted-foreground">
                Connect with beings across all dimensions
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-portal-green animate-pulse"></div>
              <Badge variant="secondary" className="bg-portal-green/20 text-portal-green border-portal-green/30">
                Online
              </Badge>
            </div>
          </div>
        </Card>

        {/* Chat Area */}
        <Card className="h-[600px] flex flex-col bg-card/50 backdrop-blur border-border/50">
          {/* Messages */}
          <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-3 ${
                    message.user === "You" ? "flex-row-reverse" : ""
                  }`}
                >
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className={getUserColor(message.user)}>
                      {message.user[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className={`max-w-xs lg:max-w-md ${message.user === "You" ? "text-right" : ""}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-foreground">
                        {message.user}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {message.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </span>
                    </div>
                    <div
                      className={`rounded-lg px-3 py-2 text-sm ${
                        message.user === "You"
                          ? "bg-primary text-primary-foreground ml-auto"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex items-start gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-accent text-accent-foreground">
                      ?
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-muted rounded-lg px-3 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Message Input */}
          <div className="p-4 border-t border-border/50">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Paperclip size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Image size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Mic size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Smile size={18} />
              </Button>
              
              <div className="flex-1 flex gap-2">
                <Input
                  placeholder="Type your interdimensional message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
                <Button 
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                  className="bg-gradient-to-r from-portal-green to-lab-green hover:from-portal-green/80 hover:to-lab-green/80 text-background"
                >
                  <Send size={18} />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Chat;