import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, BookOpen } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Priya Sharma",
      role: "Project Lead",
      description: "Final year CSE student passionate about helping juniors succeed.",
    },
    {
      name: "Ananya Gupta",
      role: "Content Manager",
      description: "Organizing and curating quality academic resources for all branches.",
    },
    {
      name: "Ria Patel",
      role: "Technical Lead",
      description: "Building and maintaining the portal for seamless user experience.",
    },
    {
      name: "Kavya Singh",
      role: "Resource Coordinator",
      description: "Collecting and verifying PYQs, notes, and books from various sources.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center fade-in mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center shadow-elegant">
              <Heart className="h-10 w-10 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            This portal is created by seniors at IGDTUW to help juniors with PYQs, notes, and books, 
            organized by branch and semester. We believe in the power of shared knowledge and community support.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-card hover-lift text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Community First</h3>
              <p className="text-muted-foreground">
                Built by students, for students. We understand the challenges you face and are here to help.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover-lift text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Quality Resources</h3>
              <p className="text-muted-foreground">
                Carefully curated and verified academic materials to ensure you get the best study resources.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover-lift text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Pay It Forward</h3>
              <p className="text-muted-foreground">
                Just as seniors helped us, we're here to help you succeed in your academic journey.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground text-lg">
            The passionate seniors who made this portal possible
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="shadow-card hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{member.name}</h3>
                <p className="text-secondary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="shadow-elegant bg-gradient-primary text-primary-foreground">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Want to Contribute?</h3>
              <p className="text-lg opacity-90 mb-6">
                If you have quality study materials, PYQs, or notes that could help other students, 
                we'd love to include them in our portal.
              </p>
              <p className="opacity-75">
                Contact us through the college portal or reach out to any team member.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default About;