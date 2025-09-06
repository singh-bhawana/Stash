import React from "react";
import { Link, useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, BookOpen, Clock, NotebookText } from "lucide-react";
import { resources } from "@/data/resources";

const HSL_COLOR = {
  bg_solid_component: "hsl(220, 20%, 90%)",
  text_primary: "hsl(220, 20%, 20%)",
  text_muted: "hsl(220, 10%, 40%)",
  accent_primary: "hsl(240, 60%, 70%)",
  accent_secondary: "hsl(10, 70%, 80%)",
  button_text_light: "hsl(0, 0%, 98%)",
};

const iconMap = {
  notes: FileText,
  pyqs: Clock,
  books: BookOpen,
  "tutorial sheets": NotebookText,
};

export default function SubjectSectionViewer() {
  const { branch, subject } = useParams();

  const branchData = resources[branch.toUpperCase()];

  if (!branchData || !branchData[subject.toLowerCase()]) {
    return (
      <div className="p-6 text-center text-lg font-semibold text-red-600">
        Subject or branch not found.
      </div>
    );
  }

  const sections = Object.keys(branchData[subject.toLowerCase()]).filter(
    (key) => branchData[subject.toLowerCase()][key].length > 0
  );

  return (
    <div className="flex flex-col items-center p-6 bg-background min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
        Choose a Section for {subject.toUpperCase()}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {sections.map((section, index) => {
          const Icon = iconMap[section] || FileText;
          return (
            <Link key={index} to={`/resources/${branch}/${subject}/${section}`}>
              <Card
                className="relative hover-lift cursor-pointer shadow-xl border border-transparent"
                style={{
                  backgroundColor: HSL_COLOR.bg_solid_component,
                  border: `1px solid ${HSL_COLOR.bg_solid_component}`,
                }}
              >
                <CardContent className="p-6 text-center flex flex-col items-center">
                  <Icon className="h-12 w-12 text-primary mb-2" />
                  <h3 className="text-xl font-bold transition-colors duration-300" style={{ color: HSL_COLOR.text_primary }}>
                    {section.toUpperCase()}
                  </h3>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
