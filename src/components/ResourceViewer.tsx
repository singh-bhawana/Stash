import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, BookOpen } from "lucide-react";
import { resources } from "@/data/resources";
import { useParams } from "react-router-dom";

export default function ResourceViewer() {
  const { branch, subject, type } = useParams();
  const [selectedPdf, setSelectedPdf] = useState(null);

  // Dynamically fetch PDFs based on URL params
  let pdfs = [];
  if (branch && subject && type) {
    const branchData = resources[branch.toUpperCase()];
    if (branchData) {
      const subjectData = branchData[subject.toLowerCase()];
      if (subjectData) {
        // Handle nested subjects like 'ece/ids'
        if (typeof subjectData[type.toLowerCase()] === 'object' && subjectData[type.toLowerCase()] !== null && !Array.isArray(subjectData[type.toLowerCase()])) {
          pdfs = subjectData[type.toLowerCase()][type.toLowerCase()] || [];
        } else {
          pdfs = subjectData[type.toLowerCase()] || [];
        }
      }
    }
  }

  // Handle nested subjects from resources.js
  const getPdfs = () => {
    let pdfs = [];
    if (branch && subject && type) {
      const branchKey = branch.toUpperCase();
      const subjectKey = subject.toLowerCase();
      const typeKey = type.toLowerCase();
      
      const branchData = resources[branchKey];
      if (branchData) {
        // Handle deeply nested structure, e.g., CSE-AI/python/tutorial sheets
        let subjectData = branchData[subjectKey];
        if (!subjectData) {
          const subjectParts = subjectKey.split('/');
          if (subjectParts.length > 1) {
            subjectData = branchData[subjectParts[0]]?.[subjectParts[1]];
          }
        }
        
        if (subjectData) {
          pdfs = subjectData[typeKey] || [];
        }
      }
    }
    return pdfs;
  };
  
  pdfs = getPdfs();

  if (!pdfs || pdfs.length === 0) {
    return (
      <div className="p-6 text-center text-lg font-semibold text-red-600">
        No resources found for {branch}/{subject}/{type}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-6 bg-background min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
        {type.toUpperCase()} for {subject.toUpperCase()}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
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
                  setSelectedPdf(pdf.url);
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

      {/* PDF Modal Viewer */}
      {selectedPdf && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-11/12 h-5/6 relative">
            <Button
              className="absolute top-2 right-2"
              variant="destructive"
              size="sm"
              onClick={() => setSelectedPdf(null)}
            >
              Close
            </Button>
            {selectedPdf && (
              <iframe
                src={selectedPdf}
                title="PDF Viewer"
                className="w-full h-full rounded-b-lg"
              ></iframe>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
