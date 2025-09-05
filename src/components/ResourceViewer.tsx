// src/components/ResourceViewer.jsx
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { resources } from "@/data/resources"; // <-- using resources.js
import { useParams } from "react-router-dom"; // ADD THIS LINE


export default function ResourceViewer() {
  // Hardcoded: ECE → IDS → notes
  const { branch, subject, type } = useParams(); // ADD THIS LINE

// dynamically fetch PDFs
let pdfs = [];
if (branch && subject && type) {
  const branchData = resources[branch.toUpperCase()];
  if (branchData) {
    const subjectData = branchData[subject.toUpperCase()];
    if (subjectData) {
      pdfs = subjectData[type.toLowerCase()] || [];
    }
  }
}


  const [selectedPdf, setSelectedPdf] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {pdfs.map((pdf, idx) => (
        <Card
          key={idx}
          className="hover:shadow-lg transition cursor-pointer"
          onClick={() => setSelectedPdf(pdf.url)}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              {pdf.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <Button
              variant="secondary"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                window.open(pdf.url, "_blank");
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
                link.click();
              }}
            >
              <Download className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      ))}

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
            <iframe
              src={selectedPdf}
              title="PDF Viewer"
              className="w-full h-full rounded-b-lg"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
