import React from "react";
import BranchCard from "@/components/BranchCard";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { BookOpen, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import FunGame from "@/components/FunGame";
import { Star, BookMarked } from "lucide-react";

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
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

    {/* Left: FunGame component */}
   {/* Left: Open FunGame in new tab button */}
<div className="flex-1 fade-in flex flex-col items-center justify-center max-w-xs mx-auto">
  <div
    className="w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow"
    style={{ background: "linear-gradient(135deg, #6a84ff 0%, #ffd6e6 100%)" }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-6.518-3.76A1 1 0 007 8.236v7.528a1 1 0 001.234.97l6.518-1.88a1 1 0 00.75-.97v-3.154a1 1 0 00-.75-.482z" />
    </svg>
  </div>
  <h3 className="text-2xl font-bold mb-2">Play Fun Game</h3>
  <p className="text-base mb-4 text-neutral-600 text-center">
    Take a quick concentration break with our mini game — open in a new tab!
  </p>
  <button
    className="px-5 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-400 to-pink-400 shadow hover:scale-105 transition"
    onClick={() => window.open('/fun-game', '_blank')}
  >
    Launch Game
  </button>
</div>


    {/* Middle: Divider Callout */}
    <div className="mx-0 md:mx-8 flex flex-col items-center justify-center fade-in select-none">
      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-300 to-blue-300 flex items-center justify-center shadow mb-2">
        <Star className="h-7 w-7 text-white" />
      </div>
      <div className="font-bold text-lg md:text-xl mb-1" style={{ color: '#4f5b70' }}>
        Try These!
      </div>
      <div className="text-neutral-500 text-base text-center max-w-xs">
        Unlock backbencher tools. Experience the true STASH magic—your notes, your way!
      </div>
      <div className="hidden md:block h-28 w-1 bg-gradient-to-b from-blue-400 to-pink-400 opacity-30 mt-3" />
    </div>

    {/* Right: One-Tap Stash Feature */}
    <div className="flex-1 text-center fade-in">
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow"
        style={{
          background: "linear-gradient(135deg, #d776e7 0%, #6a84ff 100%)",
        }}
      >
        <BookMarked className="h-10 w-10 text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-2">One-Tap Stash</h3>
      <p className="text-base mb-4 text-neutral-600">
        Save any note or resource instantly—no login required, no signup hassle.
      </p>
      <button
        className="px-5 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-400 to-pink-400 shadow hover:scale-105 transition"
        onClick={() => alert('Feature coming soon!')}
      >
        Stash Now
      </button>
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
