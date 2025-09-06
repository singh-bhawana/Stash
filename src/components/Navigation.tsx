import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

// Colors matching your pastel gradient theme
const HSL_COLOR = {
  accent_primary: "240, 60%, 70%",
  accent_secondary: "10, 70%, 80%",
  text_light: "220, 20%, 20%",
  text_muted: "220, 10%, 40%",
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Branches", path: "/branches" },
    { name: "About Us", path: "/about" },
    { name: "GPA Calculator", path: "/gpa-calculator" },
    { name: "Student Hub", path: "/student-hub" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className="fixed top-0 left-0 w-full z-30 backdrop-blur-xl"
      style={{
        background: "linear-gradient(90deg, #fff1ebcc 0%, #ace0f9cc 100%)",
        borderBottom: "1px solid #f1e4ff99",
        boxShadow: "0 2px 12px 0 rgba(160, 180, 255, 0.08)",
        WebkitBackdropFilter: "blur(8px)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo / Title */}
        <Link to="/" className="flex flex-col items-start justify-center select-none">
          <span
            className="font-black text-3xl tracking-tight"
            style={{
              background: "linear-gradient(90deg, hsl(240, 60%, 70%), hsl(10, 70%, 80%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-2px",
              userSelect: "none",
            }}
          >
            STASH
          </span>
          <span
            className="text-xs font-light text-neutral-500"
            style={{ letterSpacing: "0.02em" }}
          >
            (IGDTUW version)
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path}>
              <Button
                variant={isActive(item.path) ? "default" : "ghost"}
                style={{
                  background: isActive(item.path)
                    ? "linear-gradient(80deg, hsl(240, 60%, 70%), hsl(10, 70%, 80%))"
                    : "transparent",
                  color: isActive(item.path) ? "white" : `hsl(${HSL_COLOR.text_light})`,
                  fontWeight: 600,
                  border: "none",
                  boxShadow: isActive(item.path) ? "0 2px 16px 0 rgba(106, 132, 255, 0.12)" : "none",
                  marginLeft: 8,
                  transition: "all 0.2s cubic-bezier(.4,0,.2,1)",
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
            style={{ color: `hsl(${HSL_COLOR.text_light})` }}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className="md:hidden border-t"
          style={{
            borderColor: "#e0e7ef",
            background: "linear-gradient(90deg, #fff1ebd1 0%, #ace0f9e1 100%)",
            backdropFilter: "blur(16px)",
          }}
        >
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
                    width: "100%",
                    justifyContent: "flex-start",
                    background: isActive(item.path)
                      ? "linear-gradient(80deg, hsl(240, 60%, 70%), hsl(10, 70%, 80%))"
                      : "transparent",
                    color: isActive(item.path) ? "white" : `hsl(${HSL_COLOR.text_light})`,
                    fontWeight: 600,
                    border: "none",
                  }}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
