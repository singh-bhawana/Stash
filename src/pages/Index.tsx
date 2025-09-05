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
      <div className="min-h-screen bg-gradient-subtle">
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
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center fade-in">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center shadow-elegant">
              <BookOpen className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            IGDTUW Resource Portal
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Your One-Step Resource Tool for College
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Access PYQs, notes, and books organized by branch and semester. 
            Created by seniors to help juniors succeed.
          </p>
          <Button variant="hero" size="xl" className="animate-scale-in">
            Explore Resources Below
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="fade-in">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">6 Branches</h3>
              <p className="text-muted-foreground">Complete coverage of all major engineering branches</p>
            </div>
            <div className="fade-in">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Community Driven</h3>
              <p className="text-muted-foreground">Created and maintained by passionate seniors</p>
            </div>
            <div className="fade-in">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Quality Resources</h3>
              <p className="text-muted-foreground">Curated PYQs, notes, and reference materials</p>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Branch
            </h2>
            <p className="text-lg text-muted-foreground">
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
