import React from "react";
import { Link, useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { resources } from "@/data/resources";

const HSL_COLOR = {
  bg_solid_component: "hsl(220, 20%, 90%)",
  text_primary: "hsl(220, 20%, 20%)",
  text_muted: "hsl(220, 10%, 40%)",
  accent_primary: "hsl(240, 60%, 70%)",
  accent_secondary: "hsl(10, 70%, 80%)",
  button_text_light: "hsl(0, 0%, 98%)",
};

export default function SubjectViewer() {
  const { branch } = useParams();

  const branchData = resources[branch.toUpperCase()];

  if (!branchData) {
    return (
      <div className="p-6 text-center text-lg font-semibold text-red-600">
        Branch not found.
      </div>
    );
  }

  // This code now correctly flattens the nested data to get all subjects
  const subjects = Object.keys(branchData);

  return (
    <div className="flex flex-col items-center p-6 bg-background min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
        Choose Your Subject
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {subjects.map((subject, index) => {
          return (
            <Link key={index} to={`/resources/${branch}/${subject}`}>
              <Card
                className="relative hover-lift cursor-pointer shadow-xl border border-transparent"
                style={{
                  backgroundColor: HSL_COLOR.bg_solid_component,
                  border: `1px solid ${HSL_COLOR.bg_solid_component}`,
                }}
              >
                <CardContent className="p-6 text-center flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-2 transition-colors duration-300" style={{ color: HSL_COLOR.text_primary }}>
                    {subject.toUpperCase()}
                  </h3>
                  <p className="text-sm" style={{ color: HSL_COLOR.text_muted }}>
                    {subject} Resources
                  </p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
