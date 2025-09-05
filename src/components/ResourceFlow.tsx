import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen, FileText, Download } from "lucide-react";

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
    // In a real app, this would open the PDF viewer
    alert(`Opening ${resourceType} for ${selectedSubject?.name}. This is a demo - PDFs would be embedded here.`);
  };

  return (
    <div className="fade-in">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="outline" onClick={handleBack} size="sm">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <div className="text-sm text-muted-foreground">
          {selectedBranch}
          {selectedSemester && ` → Semester ${selectedSemester === "semester1" ? "1" : "2"}`}
          {selectedSubject && ` → ${selectedSubject.name}`}
        </div>
      </div>

      {currentStep === "semesters" && (
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Select Semester - {branch.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover-lift cursor-pointer shadow-card" onClick={() => handleSemesterSelect("semester1")}>
              <CardHeader>
                <CardTitle className="text-center">Semester 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  {branch.subjects.semester1.length} subjects available
                </p>
              </CardContent>
            </Card>
            <Card className="hover-lift cursor-pointer shadow-card opacity-50">
              <CardHeader>
                <CardTitle className="text-center">Semester 2</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Coming Soon
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {currentStep === "subjects" && selectedSemester && (
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Select Subject - Semester {selectedSemester === "semester1" ? "1" : "2"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {branch.subjects[selectedSemester].map((subject) => (
              <Card
                key={subject.id}
                className="hover-lift cursor-pointer shadow-card"
                onClick={() => handleSubjectSelect(subject)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span className="font-medium text-foreground">{subject.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {currentStep === "resources" && selectedSubject && (
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Resources - {selectedSubject.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover-lift cursor-pointer shadow-card" onClick={() => handleResourceClick("PYQs")}>
              <CardContent className="p-6 text-center">
                <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">PYQs</h3>
                <p className="text-muted-foreground text-sm">Previous Year Questions</p>
              </CardContent>
            </Card>
            <Card className="hover-lift cursor-pointer shadow-card" onClick={() => handleResourceClick("Notes")}>
              <CardContent className="p-6 text-center">
                <BookOpen className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Notes</h3>
                <p className="text-muted-foreground text-sm">Study Notes & Materials</p>
              </CardContent>
            </Card>
            <Card className="hover-lift cursor-pointer shadow-card" onClick={() => handleResourceClick("Books")}>
              <CardContent className="p-6 text-center">
                <Download className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Books</h3>
                <p className="text-muted-foreground text-sm">Reference Books & PDFs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourceFlow;