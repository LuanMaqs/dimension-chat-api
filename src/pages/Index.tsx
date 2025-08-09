import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Users, Zap, Shield, Rocket, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import portalLogo from "@/assets/portal-logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Real-time Chat",
      description: "Connect instantly across all dimensions with our quantum-powered messaging system.",
      color: "text-portal-green"
    },
    {
      icon: Users,
      title: "Interdimensional Community",
      description: "Meet fellow Rick and Morty fans from infinite realities and parallel universes.",
      color: "text-space-purple"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your conversations are protected by advanced encryption technology from dimension C-137.",
      color: "text-rick-blue"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Messages travel faster than a portal gun through space-time continuums.",
      color: "text-morty-yellow"
    }
  ];

  const stats = [
    { label: "Active Dimensions", value: "∞", color: "text-portal-green" },
    { label: "Messages Today", value: "1.2M", color: "text-space-purple" },
    { label: "Portal Jumps", value: "999K", color: "text-rick-blue" },
    { label: "Happy Users", value: "42K", color: "text-morty-yellow" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-8 flex justify-center">
            <img 
              src={portalLogo} 
              alt="Portal" 
              className="w-24 h-24 animate-pulse drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-portal-green via-space-purple to-rick-blue bg-clip-text text-transparent">
            Welcome to the
            <br />
            Rick & Morty
            <br />
            <span className="text-transparent bg-gradient-to-r from-morty-yellow to-portal-green bg-clip-text">
              Chat Universe
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Connect with fellow fans across infinite dimensions. Share theories, memes, and 
            interdimensional adventures in real-time. Wubba lubba dub dub!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/chat">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-portal-green to-lab-green hover:from-portal-green/80 hover:to-lab-green/80 text-background shadow-lg shadow-portal-green/25 hover:shadow-portal-green/40 transition-all duration-300"
              >
                <MessageCircle className="mr-2" size={20} />
                Start Chatting
              </Button>
            </Link>
            <Link to="/profile">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-space-purple/50 text-space-purple hover:bg-space-purple/10 hover:border-space-purple"
              >
                Create Profile
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur border-border/50">
                <CardContent className="p-4 text-center">
                  <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-portal-green/20 text-portal-green border-portal-green/30">
              Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the most advanced interdimensional communication technology 
              in the multiverse. Built by scientists, for scientists (and fans).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className={feature.color} size={24} />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-card to-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join the Adventure?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't let Jerry keep you from connecting with the coolest community 
            in the multiverse. Your portal to infinite conversations awaits!
          </p>
          <Link to="/chat">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-space-purple to-dimension-blue hover:from-space-purple/80 hover:to-dimension-blue/80 text-white shadow-lg shadow-space-purple/25"
            >
              <Rocket className="mr-2" size={20} />
              Launch Into Chat
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
