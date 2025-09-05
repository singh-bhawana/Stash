import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen, FileText, Download, GraduationCap, Code } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ADD THIS

// New color palette in HSL
const HSL_COLOR = {
  bg_dark: "hsl(340, 20%, 15%)",
  bg_light: "hsl(340, 20%, 20%)",
  accent_red: "hsl(350, 60%, 45%)",
  accent_orange: "hsl(20, 80%, 60%)",
  text_light: "hsl(0, 0%, 95%)",
  text_muted: "hsl(0, 0%, 75%)",
};

// Types
interface Subject {
  id: string;
  name: string;
}

interface Branch {
  id: string;
  name: string;
  subjects: {
    semester1: Subject[];
    semester2: Subject[];
  };
}

// Data
const branchData: Record<string, Branch> = {
  CSE: {
    id: "CSE",
    name: "Computer Science & Engineering",
    subjects: {
      semester1: [
        { id: "math", name: "Applied Mathematics" },
        { id: "physics", name: "Applied Physics" },
        { id: "bee", name: "Basics of Electrical Engineering" },
        { id: "communication", name: "Communication Skills" },
        { id: "programming", name: "Programming with C" },
      ],
      semester2: [],
    },
  },
  IT: {
    id: "IT",
    name: "Information Technology",
    subjects: {
      semester1: [
        { id: "math", name: "Applied Mathematics" },
        { id: "physics", name: "Applied Physics" },
        { id: "python", name: "Programming with Python" },
        { id: "bee", name: "BEE" },
        { id: "web", name: "Web Development" },
        { id: "communication", name: "Communication Skills" },
      ],
      semester2: [],
    },
  },
  AIML: {
    id: "AIML",
    name: "AI & Machine Learning",
    subjects: {
      semester1: [
        { id: "python", name: "Programming with Python" },
        { id: "stats", name: "Probability & Statistics" },
        { id: "env", name: "Environmental Sciences" },
        { id: "bee", name: "BEE" },
        { id: "web", name: "Web Development" },
        { id: "communication", name: "Communication Skills" },
      ],
      semester2: [],
    },
  },
  "CSE-AI": {
    id: "CSE-AI",
    name: "CSE - Artificial Intelligence",
    subjects: {
      semester1: [
        { id: "python", name: "Programming with Python" },
        { id: "stats", name: "Probability & Statistics" },
        { id: "env", name: "Environmental Sciences" },
        { id: "bee", name: "BEE" },
        { id: "workshop", name: "IT Workshop" },
        { id: "communication", name: "Communication Skills" },
      ],
      semester2: [],
    },
  },
  ECE: {
    id: "ECE",
    name: "Electronics & Communication Engineering",
    subjects: {
      semester1: [
        { id: "python", name: "Programming with Python" },
        { id: "stats", name: "Probability & Statistics" },
        { id: "signals", name: "Signals & Systems" },
        { id: "datascience", name: "Intro to Data Science" },
        { id: "workshop", name: "Electronic Workshop" },
        { id: "communication", name: "Communication Skills" },
      ],
      semester2: [],
    },
  },
  "ECE-AI": {
    id: "ECE-AI",
    name: "ECE - Artificial Intelligence",
    subjects: {
      semester1: [
        { id: "stats", name: "Probability & Statistics" },
        { id: "env", name: "Environmental Sciences" },
        { id: "signals", name: "Systems & Signals" },
        { id: "datascience", name: "Intro to Data Science" },
        { id: "workshop", name: "Electronic Workshop" },
        { id: "communication", name: "Communication Skills" },
      ],
      semester2: [],
    },
  },
};

interface ResourceFlowProps {
  selectedBranch: string;
  onBack: () => void;
}

type FlowStep = "semesters" | "subjects" | "resources";

const ResourceFlow = ({ selectedBranch, onBack }: ResourceFlowProps) => {
  const [currentStep, setCurrentStep] = useState<FlowStep>("semesters");
  const [selectedSemester, setSelectedSemester] = useState<"semester1" | "semester2" | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const navigate = useNavigate();

  const branch = branchData[selectedBranch];

  const handleSemesterSelect = (semester: "semester1" | "semester2") => {
    setSelectedSemester(semester);
    setCurrentStep("subjects");
  };

  const handleSubjectSelect = (subject: Subject) => {
    setSelectedSubject(subject);
    setCurrentStep("resources");
  };

  const handleBack = () => {
    if (currentStep === "resources") {
      setCurrentStep("subjects");
      setSelectedSubject(null);
    } else if (currentStep === "subjects") {
      setCurrentStep("semesters");
      setSelectedSemester(null);
    } else {
      onBack();
    }
  };

  const handleResourceClick = (resourceType: string) => {
    console.log(`Opening ${resourceType} for ${selectedSubject?.name}. This is a demo.`);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "PYQs":
        return <FileText className="h-12 w-12" style={{ color: HSL_COLOR.accent_orange }} />;
      case "Notes":
        return <BookOpen className="h-12 w-12" style={{ color: HSL_COLOR.accent_red }} />;
      case "Books":
        return <Download className="h-12 w-12" style={{ color: HSL_COLOR.text_muted }} />;
      default:
        return <BookOpen className="h-12 w-12" style={{ color: HSL_COLOR.text_muted }} />;
    }
  };

  return (
    <div className="fade-in relative z-10 p-4" style={{ color: HSL_COLOR.text_light }}>
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" onClick={handleBack} size="sm" style={{ color: HSL_COLOR.text_muted }}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <div className="text-sm" style={{ color: HSL_COLOR.text_muted }}>
          {selectedBranch}
          {selectedSemester && ` → Semester ${selectedSemester === "semester1" ? "1" : "2"}`}
          {selectedSubject && ` → ${selectedSubject.name}`}
        </div>
      </div>

      {currentStep === "semesters" && (
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Select Semester - {branch.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              className="relative hover:scale-105 cursor-pointer transition-all duration-300 shadow-xl border border-transparent"
              style={{ backgroundColor: HSL_COLOR.bg_light }}
              onClick={() => handleSemesterSelect("semester1")}
            >
              <CardHeader>
                <CardTitle className="text-center" style={{ color: HSL_COLOR.text_light }}>Semester 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm" style={{ color: HSL_COLOR.text_muted }}>
                  {branch.subjects.semester1.length} subjects available
                </p>
              </CardContent>
            </Card>
            <Card
              className="relative transition-all duration-300 shadow-xl border border-transparent opacity-50"
              style={{ backgroundColor: HSL_COLOR.bg_light }}
            >
              <CardHeader>
                <CardTitle className="text-center" style={{ color: HSL_COLOR.text_light }}>Semester 2</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm" style={{ color: HSL_COLOR.text_muted }}>
                  Coming Soon
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {currentStep === "subjects" && selectedSemester && (
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Select Subject - Semester {selectedSemester === "semester1" ? "1" : "2"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {branch.subjects[selectedSemester].map((subject) => (
              <Card
                key={subject.id}
                className="hover-lift cursor-pointer shadow-xl border-2 border-transparent"
                style={{ backgroundColor: HSL_COLOR.bg_light }}
                onClick={() => handleSubjectSelect(subject)}
              >
                <CardContent className="p-4 flex items-center gap-3">
                  <BookOpen className="h-5 w-5" style={{ color: HSL_COLOR.accent_red }} />
                  <span className="font-medium" style={{ color: HSL_COLOR.text_light }}>{subject.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {currentStep === "resources" && selectedSubject && (
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Resources - {selectedSubject.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              className="hover-lift cursor-pointer shadow-xl border border-transparent"
              style={{ backgroundColor: HSL_COLOR.bg_light }}
              onClick={() => handleResourceClick("PYQs")}
            >
              <CardContent className="p-6 text-center">
                {getIcon("PYQs")}
                <h3 className="text-lg font-semibold mb-2" style={{ color: HSL_COLOR.text_light }}>PYQs</h3>
                <p className="text-sm" style={{ color: HSL_COLOR.text_muted }}>Previous Year Questions</p>
              </CardContent>
            </Card>
            <Card
              className="hover-lift cursor-pointer shadow-xl border border-transparent"
              style={{ backgroundColor: HSL_COLOR.bg_light }}
              onClick={() => handleResourceClick("Notes")}
            >
              <CardContent className="p-6 text-center">
                {getIcon("Notes")}
                <h3 className="text-lg font-semibold mb-2" style={{ color: HSL_COLOR.text_light }}>Notes</h3>
                <p className="text-sm" style={{ color: HSL_COLOR.text_muted }}>Study Notes & Materials</p>
              </CardContent>
            </Card>
            <Card
              className="hover-lift cursor-pointer shadow-xl border border-transparent"
              style={{ backgroundColor: HSL_COLOR.bg_light }}
              onClick={() => handleResourceClick("Books")}
            >
              <CardContent className="p-6 text-center">
                {getIcon("Books")}
                <h3 className="text-lg font-semibold mb-2" style={{ color: HSL_COLOR.text_light }}>Books</h3>
                <p className="text-sm" style={{ color: HSL_COLOR.text_muted }}>Reference Books & PDFs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourceFlow;
