import React from "react";
import BranchCard from "@/components/BranchCard";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { BookOpen, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";


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

const branches = [
  { id: "CSE", name: "CSE", fullName: "Computer Science & Engineering" },
  { id: "IT", name: "IT", fullName: "Information Technology" },
  { id: "AIML", name: "AIML", fullName: "AI & Machine Learning" },
  { id: "CSE-AI", name: "CSE-AI", fullName: "CSE - Artificial Intelligence" },
  { id: "ECE", name: "ECE", fullName: "Electronics & Communication" },
  { id: "ECE-AI", name: "ECE-AI", fullName: "ECE - Artificial Intelligence" },
];

const Index = () => {
  const navigate = useNavigate();

  // Navigate to Department's semester page on click
  const handleBranchClick = (branchId: string) => {
    navigate(`/resources/${branchId}`);
  };

  return (
    <div className="min-h-screen relative">
      <div className="overlay"></div>
      <div className="relative z-10" style={{ color: HSL_COLOR.text_primary }}>
        <Navigation />

        {/* Hero Section */}
        <Hero />


        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ color: HSL_COLOR.text_primary }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="fade-in">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: `linear-gradient(45deg, ${HSL_COLOR.accent_primary}, ${HSL_COLOR.accent_secondary})` }}
                >
                  <BookOpen className="h-8 w-8" style={{ color: HSL_COLOR.button_text_light }} />
                </div>
                <h3 className="text-2xl font-bold mb-2">6 Branches</h3>
                <p className="text-sm" style={{ color: HSL_COLOR.text_muted }}>Complete coverage of all major engineering branches</p>
              </div>
              <div className="fade-in">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: `linear-gradient(45deg, ${HSL_COLOR.accent_primary}, ${HSL_COLOR.accent_secondary})` }}
                >
                  <Users className="h-8 w-8" style={{ color: HSL_COLOR.button_text_light }} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Community Driven</h3>
                <p className="text-sm" style={{ color: HSL_COLOR.text_muted }}>Created and maintained by passionate seniors</p>
              </div>
              <div className="fade-in">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: `linear-gradient(45deg, ${HSL_COLOR.accent_primary}, ${HSL_COLOR.accent_secondary})` }}
                >
                  <Award className="h-8 w-8" style={{ color: HSL_COLOR.button_text_light }} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Quality Resources</h3>
                <p className="text-sm" style={{ color: HSL_COLOR.text_muted }}>Curated PYQs, notes, and reference materials</p>
              </div>
            </div>
          </div>
        </section>

        {/* Branches Section */}
        <section
          id="branches-section"
          className="py-16 px-4 sm:px-6 lg:px-8"
          style={{ color: HSL_COLOR.text_primary }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Branch</h2>
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
