import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, BookOpen } from "lucide-react";
import { resources } from "@/data/resources";
import { useParams } from "react-router-dom";

export default function ResourceViewer() {
  const { branch, subject, type } = useParams();

  // Dynamically fetch PDFs based on URL params
  let pdfs = [];
  if (branch && subject && type) {
    const branchData = resources[branch.toUpperCase()];
    if (branchData) {
      const subjectData = branchData[subject.toLowerCase()];
      if (subjectData) {
        // Use a generic property access for different types
        pdfs = subjectData[type.toLowerCase()] || [];
      }
    }
  }

  if (!pdfs || pdfs.length === 0) {
    return (
      <div className="p-6 text-center text-lg font-semibold text-red-600">
        No resources found for {branch}/{subject}/{type}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {pdfs.map((pdf, idx) => (
        <Card
          key={idx}
          className="hover:shadow-lg transition cursor-pointer"
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {type.toLowerCase() === "books" ? (
                <BookOpen className="h-5 w-5 text-primary" />
              ) : (
                <FileText className="h-5 w-5 text-primary" />
              )}
              {pdf.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <Button
              variant="secondary"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                // This is the correct way to open the PDF in a new tab.
                window.open(pdf.url, "_blank", "noopener,noreferrer");
              }}
            >
              Preview
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                const link = document.createElement("a");
                link.href = pdf.url;
                link.download = pdf.name;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
