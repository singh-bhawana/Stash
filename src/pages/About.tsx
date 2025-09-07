import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen } from "lucide-react"; 
// Removed Heart import as it's no longer needed for the hero icon

const About = () => {
  const teamMembers = [
    {
      name: "Akanksha Pal",
      role: "CSE'28",
      linkedin: "https://www.linkedin.com/in/akankshapal1268",
      email: "akanksha011btcse24@igdtuw.ac.in",
    },
    {
      name: "Apoorva Shrivastava",
      role: "CSE'28",
      linkedin: "https://www.linkedin.com/in/apoorva-shrivastava-a3955321b/",
      email: "apoorva038btcse24@igdtuw.ac.in",
    },
    {
      name: "Bhawana Singh",
      role: "CSE'28",
      linkedin: "https://www.linkedin.com/in/bhawana-singh-ba74a6322/",
      email: "bhawana050btcse24@igdtuw.ac.in",
    },
    {
      name: "Disha Jain",
      role: "CSE'28",
      linkedin: "https://www.linkedin.com/in/dishajain15",
      email: "disha061btcse24@igdtuw.ac.in",
    },
    {
      name: "Kanika Bhardwaj",
      role: "CSE'28",
      linkedin: "https://www.linkedin.com/in/ikanikabhardwaj",
      email: "kanika087btcse24@igdtuw.ac.in",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e5ecf6] via-[#d8efff] to-[#bddafd]">
      <Navigation />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center fade-in mb-16">
          <div className="flex justify-center mb-6">
            {/* Removed the gradient circle wrapper */}
            <img
              src="/images/stash_logo.png"
              alt="Stash Logo"
              className="h-24 w-24 rounded-full object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#232947] mb-6">
            About Us
          </h1>
          <p className="text-xl text-[#445183] max-w-3xl mx-auto leading-relaxed">
            This portal is created by seniors at IGDTUW to help juniors with PYQs,
            notes, and books, organized by branch and semester. We believe in the
            power of shared knowledge and community support.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-xl text-center bg-gradient-to-br from-[#232947] to-[#4062b5] border-0">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-tr from-blue-400 to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Community First
              </h3>
              <p className="text-[#d5e0fc]">
                Built by students, for students. We understand the challenges you
                face and are here to help.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-xl text-center bg-gradient-to-br from-[#232947] to-[#4062b5] border-0">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-tr from-indigo-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Quality Resources
              </h3>
              <p className="text-[#d5e0fc]">
                Carefully curated and verified academic materials to ensure you get
                the best study resources.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-xl text-center bg-gradient-to-br from-[#232947] to-[#4062b5] border-0">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mx-auto mb-4">
                <img
                  src="/images/stash_logo.png"
                  alt="Stash Logo"
                  className="h-12 w-12 rounded-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Pay It Forward
              </h3>
              <p className="text-[#d5e0fc]">
                Just as seniors helped us, we're here to help you succeed in your
                academic journey.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#4062b5] mb-4">Meet Our Team</h2>
          <p className="text-[#445183] text-lg">
            The passionate seniors who made this portal possible
          </p>
        </div>

        {/* Five team members in single row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-[#232947] to-[#4062b5] shadow-xl text-center rounded-2xl transition-transform hover:scale-105 duration-200 border-0"
              style={{ minHeight: 290, color: "#f7f9ff" }}
            >
              <CardContent className="pt-8 pb-8 flex flex-col items-center justify-center">
                <div
                  className="w-20 h-20 flex items-center justify-center rounded-full mb-4"
                  style={{
                    background: "linear-gradient(135deg,#5e86fa 60%,#b1bcfc 100%)",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 28,
                    letterSpacing: 1,
                  }}
                >
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </div>
                <h3 className="text-[1.1rem] font-bold mb-1">{member.name}</h3>
                <p className="font-semibold mb-2" style={{ color: "#a3baff" }}>
                  {member.role}
                </p>
                <p className="mb-1">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-semibold"
                    style={{ color: "#a3baff" }}
                  >
                    LinkedIn
                  </a>
                </p>
                <p className="break-all text-[0.95rem]" style={{ color: "#d5e0fc" }}>
                  <a
                    href={`mailto:${member.email}`}
                    className="underline"
                    style={{ color: "#d5e0fc" }}
                  >
                    {member.email}
                  </a>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 rounded-2xl p-8 bg-gradient-to-br from-[#232947] to-[#4062b5] shadow-xl text-[#d5e0fc]">
          <h3 className="text-2xl font-bold mb-4" style={{ color: "#a3baff" }}>
            Want to Contribute?
          </h3>
          <p className="text-lg opacity-90 mb-6">
            If you have quality study materials, PYQs, or notes that could help other
            students, we'd love to include them in our portal.
          </p>
          <p className="opacity-75">
            Contact us through the college portal or reach out to any team member.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
