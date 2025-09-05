import { useState } from "react";
import Navigation from "@/components/Navigation";
import BranchCard from "@/components/BranchCard";
import ResourceFlow from "@/components/ResourceFlow";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award } from "lucide-react";

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
      <div className="min-h-screen relative bg-[hsl(var(--image-dark-background))] text-[hsl(var(--image-text-light))] font-sans overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[5%] left-[5%] w-[800px] h-[800px] rounded-full mix-blend-screen opacity-50 blur-3xl"
               style={{ background: 'linear-gradient(135deg, hsl(var(--image-accent-pink)), hsl(340, 100%, 40%))' }}>
          </div>
          <div className="absolute bottom-[-10%] right-[-15%] w-[600px] h-[600px] rounded-full mix-blend-screen opacity-50 blur-3xl"
               style={{ background: 'linear-gradient(45deg, hsl(var(--image-accent-orange)), hsl(60, 100%, 60%))' }}>
          </div>
          <div className="absolute bottom-[20%] left-[20%] w-[400px] h-[400px] rounded-full mix-blend-screen opacity-40 blur-3xl"
               style={{ background: 'radial-gradient(circle, hsl(var(--image-accent-pink)), transparent)' }}>
          </div>
        </div>
        
        <Navigation />
        <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ResourceFlow
            selectedBranch={selectedBranch}
            onBack={() => setSelectedBranch(null)}
          />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative bg-[hsl(var(--image-dark-background))] text-[hsl(var(--image-text-light))] font-sans overflow-hidden">
      
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[5%] left-[5%] w-[800px] h-[800px] rounded-full mix-blend-screen opacity-50 blur-3xl"
             style={{ background: 'linear-gradient(135deg, hsl(var(--image-accent-pink)), hsl(340, 100%, 40%))' }}>
        </div>
        <div className="absolute bottom-[-10%] right-[-15%] w-[600px] h-[600px] rounded-full mix-blend-screen opacity-50 blur-3xl"
             style={{ background: 'linear-gradient(45deg, hsl(var(--image-accent-orange)), hsl(60, 100%, 60%))' }}>
        </div>
        <div className="absolute bottom-[20%] left-[20%] w-[400px] h-[400px] rounded-full mix-blend-screen opacity-40 blur-3xl"
             style={{ background: 'radial-gradient(circle, hsl(var(--image-accent-pink)), transparent)' }}>
        </div>
      </div>
      
      {/* Main Content - positioned above the background */}
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center fade-in">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-[hsl(var(--image-accent-pink))] rounded-full flex items-center justify-center shadow-elegant">
              <BookOpen className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[hsl(var(--image-text-light))] mb-6 leading-tight">
            IGDTUW Resource Portal
          </h1>
          <p className="text-xl md:text-2xl text-[hsl(var(--image-badge-text))] mb-8 max-w-3xl mx-auto">
            Your One-Step Resource Tool for College
          </p>
          <p className="text-lg text-[hsl(var(--image-badge-text))] mb-12 max-w-2xl mx-auto">
            Access PYQs, notes, and books organized by branch and semester. 
            Created by seniors to help juniors succeed.
          </p>
          <Button variant="hero" size="xl" className="animate-scale-in bg-[hsl(var(--image-button-bg))] hover:bg-opacity-80 transition-colors">
            Explore Resources Below
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="fade-in">
              <div className="w-16 h-16 bg-[hsl(var(--image-accent-pink))] rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-[hsl(var(--image-text-light))] mb-2">6 Branches</h3>
              <p className="text-[hsl(var(--image-badge-text))]">Complete coverage of all major engineering branches</p>
            </div>
            <div className="fade-in">
              <div className="w-16 h-16 bg-[hsl(var(--image-accent-orange))] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[hsl(var(--image-text-light))]" />
              </div>
              <h3 className="text-2xl font-bold text-[hsl(var(--image-text-light))] mb-2">Community Driven</h3>
              <p className="text-[hsl(var(--image-badge-text))]">Created and maintained by passionate seniors</p>
            </div>
            <div className="fade-in">
              <div className="w-16 h-16 bg-[hsl(var(--image-accent-pink))] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-[hsl(var(--image-text-light))] mb-2">Quality Resources</h3>
              <p className="text-[hsl(var(--image-badge-text))]">Curated PYQs, notes, and reference materials</p>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--image-text-light))] mb-4">
              Choose Your Branch
            </h2>
            <p className="text-lg text-[hsl(var(--image-badge-text))]">
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
    </div>
  );
};

export default Index;
