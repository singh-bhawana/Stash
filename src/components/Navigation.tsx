import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Branches", path: "/branches" },
    { name: "About Us", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="relative z-20 bg-[hsl(var(--image-dark-background))] shadow-xl border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="https://www.igdtuw.ac.in/images/logo.png" alt="IGDTUW Logo" className="h-10 w-10" />
            <div className="flex flex-col items-start">
              <span className="font-bold text-xl text-[hsl(var(--image-text-light))]">IGDTUW</span>
              <span className="text-[hsl(var(--image-badge-text))] text-xs font-light">
                Indira Gandhi Delhi Technical University for Women
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path}>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className={`transition-colors duration-300 ${isActive(item.path) ? 'bg-[hsl(var(--image-accent-pink))] text-white hover:bg-[hsl(var(--image-accent-pink))]' : 'text-[hsl(var(--image-badge-text))] hover:bg-gray-800 hover:text-[hsl(var(--image-accent-pink))]'}`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-[hsl(var(--image-badge-text))] hover:bg-gray-800"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-700 bg-[hsl(var(--image-dark-background))]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant={isActive(item.path) ? "default" : "ghost"}
                    className={`w-full justify-start transition-colors duration-300 ${isActive(item.path) ? 'bg-[hsl(var(--image-accent-pink))] text-white hover:bg-[hsl(var(--image-accent-pink))]' : 'text-[hsl(var(--image-badge-text))] hover:bg-gray-800 hover:text-[hsl(var(--image-accent-pink))]'}`}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
