import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, MessageCircle, Users, User, LogOut } from "lucide-react";
import portalLogo from "@/assets/portal-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home", icon: Users },
    { href: "/chat", label: "Chat", icon: MessageCircle },
    { href: "/profile", label: "Profile", icon: User },
  ];

  const NavLinks = ({ mobile = false }) => (
    <>
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.href;
        return (
          <Link
            key={item.href}
            to={item.href}
            onClick={() => mobile && setIsOpen(false)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-accent/20 ${
              isActive 
                ? "bg-primary/20 text-primary shadow-lg shadow-primary/20" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Icon size={18} />
            {item.label}
          </Link>
        );
      })}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform">
          <img src={portalLogo} alt="Portal" className="w-8 h-8" />
          <span className="text-xl font-bold bg-gradient-to-r from-portal-green to-space-purple bg-clip-text text-transparent">
            RickMorty Chat
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavLinks />
          <Button variant="outline" size="sm" className="gap-2">
            <LogOut size={16} />
            Logout
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu size={20} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <div className="flex flex-col gap-4 mt-8">
              <NavLinks mobile />
              <div className="pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <LogOut size={16} />
                  Logout
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;