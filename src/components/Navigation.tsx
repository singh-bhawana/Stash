import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

// New color palette in HSL
const HSL_COLOR = {
  bg_dark: "hsl(340, 20%, 15%)",
  bg_light: "hsl(340, 20%, 20%)",
  accent_red: "hsl(350, 60%, 45%)",
  accent_orange: "hsl(20, 80%, 60%)",
  text_light: "hsl(0, 0%, 95%)",
  text_muted: "hsl(0, 0%, 75%)",
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

 const navItems = [
  { name: "Home", path: "/" },
  { name: "Branches", path: "/branches" },
  { name: "About Us", path: "/about" },
  { name: "GPA Calculator", path: "/gpa-calculator" },
  { name: "Student Hub", path: "/student-hub" },  // New combined page
];



  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="relative z-20 shadow-xl" style={{ backgroundColor: HSL_COLOR.bg_light }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="https://www.igdtuw.ac.in/images/logo.png" alt="IGDTUW Logo" className="h-10 w-10" />
            <div className="flex flex-col items-start">
              <span className="font-bold text-xl" style={{ color: HSL_COLOR.text_light }}>IGDTUW</span>
              <span className="text-xs font-light" style={{ color: HSL_COLOR.text_muted }}>
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
                  style={{
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    color: isActive(item.path) ? HSL_COLOR.text_light : HSL_COLOR.text_muted,
                    backgroundColor: isActive(item.path) ? HSL_COLOR.accent_red : 'transparent',
                    boxShadow: isActive(item.path) ? `0 4px 10px ${HSL_COLOR.accent_red}80` : 'none'
                  }}
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
              style={{ color: HSL_COLOR.text_muted }}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t" style={{ borderColor: HSL_COLOR.bg_dark, backgroundColor: HSL_COLOR.bg_light }}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant={isActive(item.path) ? "default" : "ghost"}
                    style={{
                      width: '100%',
                      justifyContent: 'flex-start',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      color: isActive(item.path) ? HSL_COLOR.text_light : HSL_COLOR.text_muted,
                      backgroundColor: isActive(item.path) ? HSL_COLOR.accent_red : 'transparent',
                      boxShadow: isActive(item.path) ? `0 4px 10px ${HSL_COLOR.accent_red}80` : 'none'
                    }}
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
 