import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Book, BookOpen, Lightbulb, Gamepad2 } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Dictionary", icon: Book },
    { path: "/thesaurus", label: "Thesaurus", icon: BookOpen },
    { path: "/grammar", label: "Grammar", icon: Lightbulb },
    { path: "/games", label: "Games", icon: Gamepad2 },
  ];

  return (
    <nav className="border-b bg-card sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Book className="w-8 h-8 text-primary" />
            <span className="text-2xl font-serif font-bold text-primary">Dictionary</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className="gap-2"
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </div>

          <Link to="/about">
            <Button variant="outline">About</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
