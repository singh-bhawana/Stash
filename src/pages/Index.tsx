import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BranchCard from "@/components/BranchCard";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award } from "lucide-react";

// Updated color palette in HSL to match the new light theme from index.css
const HSL_COLOR = {
  // These map to the variables defined in src/index.css's :root
  bg_solid_component: "hsl(220, 20%, 90%)", // A light background for components like BranchCard, or when a solid bg is needed
  text_primary: "hsl(220, 20%, 20%)",      // Darker text for contrast against light gradient
  text_muted: "hsl(220, 10%, 40%)",        // Medium dark grey-blue for muted text
  accent_primary: "hsl(240, 60%, 70%)",   // Muted purple-blue (from --primary in index.css)
  accent_secondary: "hsl(10, 70%, 80%)",  // Light coral/pink (from --secondary in index.css)
  button_text_light: "hsl(0, 0%, 98%)",    // Off-white for text on primary buttons
};

const Index = () => {
  const navigate = useNavigate();

  const handleBranchClick = (branchName) => {
    // This is the key change: we navigate to the subjects page
    navigate(`/resources/${branchName}`);
  };

  const branches = [
    { id: "CSE", name: "CSE", fullName: "Computer Science & Engineering" },
    { id: "IT", name: "IT", fullName: "Information Technology" },
    { id: "AIML", name: "AIML", fullName: "AI & Machine Learning" },
    { id: "CSE-AI", name: "CSE-AI", fullName: "CSE - Artificial Intelligence" },
    { id: "ECE", name: "ECE", fullName: "Electronics & Communication" },
    { id: "ECE-AI", name: "ECE-AI", fullName: "ECE - Artificial Intelligence" },
  ];

  return (
    <div className="min-h-screen relative homepage-bg">
      <div className="overlay"></div>
      <div className="relative z-10" style={{ color: HSL_COLOR.text_primary }}>
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center fade-in">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-elegant"
                 style={{ background: `linear-gradient(45deg, ${HSL_COLOR.accent_primary}, ${HSL_COLOR.accent_secondary})` }}>
              <BookOpen className="h-12 w-12" style={{ color: HSL_COLOR.button_text_light }} />
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
          <Button
            variant="hero"
            size="xl"
            className="animate-scale-in"
            style={{ backgroundColor: HSL_COLOR.accent_primary, color: HSL_COLOR.button_text_light }}
            onClick={() => {
                document.getElementById('branches-section').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Resources Below
          </Button>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ color: HSL_COLOR.text_primary }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="fade-in">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                     style={{ background: `linear-gradient(45deg, ${HSL_COLOR.accent_primary}, ${HSL_COLOR.accent_secondary})` }}>
                  <BookOpen className="h-8 w-8" style={{ color: HSL_COLOR.button_text_light }} />
                </div>
                <h3 className="text-2xl font-bold mb-2">6 Branches</h3>
                <p className="text-sm" style={{ color: HSL_COLOR.text_muted }}>Complete coverage of all major engineering branches</p>
              </div>
              <div className="fade-in">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                     style={{ background: `linear-gradient(45deg, ${HSL_COLOR.accent_primary}, ${HSL_COLOR.accent_secondary})` }}>
                  <Users className="h-8 w-8" style={{ color: HSL_COLOR.button_text_light }} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Community Driven</h3>
                <p className="text-sm" style={{ color: HSL_COLOR.text_muted }}>Created and maintained by passionate seniors</p>
              </div>
              <div className="fade-in">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                     style={{ background: `linear-gradient(45deg, ${HSL_COLOR.accent_primary}, ${HSL_COLOR.accent_secondary})` }}>
                  <Award className="h-8 w-8" style={{ color: HSL_COLOR.button_text_light }} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Quality Resources</h3>
                <p className="text-sm" style={{ color: HSL_COLOR.text_muted }}>Curated PYQs, notes, and reference materials</p>
              </div>
            </div>
          </div>
        </section>

        {/* Branches Section */}
        <section id="branches-section" className="py-16 px-4 sm:px-6 lg:px-8" style={{ color: HSL_COLOR.text_primary }}>
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
                    onClick={() => handleBranchClick(branch.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
