import { useState } from "react";
import Navigation from "@/components/Navigation";
import BranchCard from "@/components/BranchCard";
import ResourceFlow from "@/components/ResourceFlow";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award } from "lucide-react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// New color palette in HSL
const HSL_COLOR = {
  bg_dark: "hsl(340, 20%, 15%)",
  bg_light: "hsl(340, 20%, 20%)",
  accent_red: "hsl(350, 60%, 45%)",
  accent_orange: "hsl(20, 80%, 60%)",
  text_light: "hsl(0, 0%, 95%)",
  text_muted: "hsl(0, 0%, 75%)",
};

// SVG for the background illustration (simplified study-themed)
const StudyBackgroundSVG = () => (
  <svg
    className="absolute inset-0 w-full h-full object-cover z-0"
    viewBox="0 0 1440 810"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: HSL_COLOR.accent_red, stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: HSL_COLOR.bg_dark, stopOpacity: 1 }} />
      </linearGradient>
      <filter id="glow-orange" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="50" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    
    <rect width="100%" height="100%" fill="url(#skyGradient)" />
    
    {/* Abstract Book/Library shape */}
    <g transform="translate(650, 300)" fill={HSL_COLOR.bg_light}>
      <path d="M-100,0 L100,0 L120,-100 L-80,-100 Z" />
      <rect x="-10" y="-120" width="20" height="20" fill={HSL_COLOR.accent_orange} style={{ filter: `url(#glow-orange)` }} />
      <rect x="50" y="-150" width="30" height="30" fill={HSL_COLOR.accent_orange} style={{ filter: `url(#glow-orange)` }} />
    </g>

    {/* Trees (simplified) */}
    <g transform="translate(100, 450)" fill={HSL_COLOR.bg_light}>
      <path d="M0,0 C-20,-50 -20,-100 0,-150 C20,-100 20,-50 0,0 Z" />
      <path transform="translate(50, -20)" d="M0,0 C-15,-40 -15,-80 0,-120 C15,-80 15,-40 0,0 Z" />
    </g>
    <g transform="translate(1200, 400)" fill={HSL_COLOR.bg_light}>
      <path d="M0,0 C-20,-60 -20,-120 0,-180 C20,-120 20,-60 0,0 Z" />
      <path transform="translate(60, -30)" d="M0,0 C-15,-50 -15,-100 0,-150 C15,-100 15,-50 0,0 Z" />
    </g>
    
    {/* Study Icons (like the chairs and fire in the original) */}
    <g transform="translate(450, 600)" fill={HSL_COLOR.accent_orange}>
      <BookOpen className="h-10 w-10" />
    </g>
    <g transform="translate(950, 620)" fill={HSL_COLOR.accent_orange}>
      <Users className="h-10 w-10" />
    </g>

  </svg>
);

const Index = () => {
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);

  const branches = [
    { id: "CSE", name: "CSE", fullName: "Computer Science & Engineering" },
    { id: "IT", name: "IT", fullName: "Information Technology" },
    { id: "AIML", name: "AIML", fullName: "AI & Machine Learning" },
    { id: "CSE-AI", name: "CSE-AI", fullName: "CSE - Artificial Intelligence" },
    { id: "ECE", name: "ECE", fullName: "Electronics & Communication" },
    { id: "ECE-AI", name: "ECE-AI", fullName: "ECE - Artificial Intelligence" },
  ];

  if (selectedBranch) {
    return (
      <div className="min-h-screen relative" style={{ backgroundColor: HSL_COLOR.bg_dark, color: HSL_COLOR.text_light }}>
        <Navigation />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ResourceFlow
            selectedBranch={selectedBranch}
            onBack={() => setSelectedBranch(null)}
          />
        </main>
      </div>
    );
  }

  return (
    <Parallax pages={2} className="relative" style={{ backgroundColor: HSL_COLOR.bg_dark }}>
      
      {/* Background SVG Layer (moves slowly) */}
      <ParallaxLayer offset={0} speed={0.5}>
        <StudyBackgroundSVG />
      </ParallaxLayer>

      {/* Navigation and Hero Section Layer (moves at normal speed) */}
      <ParallaxLayer offset={0} speed={1}>
        <div className="relative z-10" style={{ color: HSL_COLOR.text_light }}>
          <Navigation />
          
          {/* Hero Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 text-center fade-in">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-elegant"
                   style={{ background: `linear-gradient(45deg, ${HSL_COLOR.accent_red}, ${HSL_COLOR.accent_orange})` }}>
                <BookOpen className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              IGDTUW Resource Portal
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{ color: HSL_COLOR.text_muted }}>
              Your One-Step Resource Tool for College
            </p>
            <p className="text-lg mb-12 max-w-2xl mx-auto" style={{ color: HSL_COLOR.text_muted }}>
              Access PYQs, notes, and books organized by branch and semester.
              Created by seniors to help juniors succeed.
            </p>
            <Button variant="hero" size="xl" className="animate-scale-in" style={{ backgroundColor: HSL_COLOR.accent_red, color: HSL_COLOR.text_light }}>
              Explore Resources Below
            </Button>
          </section>

          {/* Stats Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ color: HSL_COLOR.text_light }}>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="fade-in">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                       style={{ background: `linear-gradient(45deg, ${HSL_COLOR.accent_red}, ${HSL_COLOR.accent_orange})` }}>
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">6 Branches</h3>
                  <p className="text-sm" style={{ color: HSL_COLOR.text_muted }}>Complete coverage of all major engineering branches</p>
                </div>
                <div className="fade-in">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                       style={{ background: `linear-gradient(45deg, ${HSL_COLOR.accent_red}, ${HSL_COLOR.accent_orange})` }}>
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Community Driven</h3>
                  <p className="text-sm" style={{ color: HSL_COLOR.text_muted }}>Created and maintained by passionate seniors</p>
                </div>
                <div className="fade-in">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                       style={{ background: `linear-gradient(45deg, ${HSL_COLOR.accent_red}, ${HSL_COLOR.accent_orange})` }}>
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Quality Resources</h3>
                  <p className="text-sm" style={{ color: HSL_COLOR.text_muted }}>Curated PYQs, notes, and reference materials</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </ParallaxLayer>

      {/* Branches Section Layer (Scrolls into view) */}
      <ParallaxLayer offset={1} speed={1.2}>
        <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ color: HSL_COLOR.text_light }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Choose Your Branch
              </h2>
              <p className="text-lg" style={{ color: HSL_COLOR.text_muted }}>
                Select your engineering branch to access organized study materials
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {branches.map((branch, index) => (
                <div key={branch.id} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <BranchCard
                    name={branch.name}
                    fullName={branch.fullName}
                    onClick={() => setSelectedBranch(branch.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </ParallaxLayer>
    </Parallax>
  );
};

export default Index;
