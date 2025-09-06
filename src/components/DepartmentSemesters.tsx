import React, { useState } from "react";
import { Link } from "react-router-dom";
import { resources } from "@/data/resources";

interface Props {
  branch: string;
}

const DepartmentSemesters = ({ branch }: Props) => {
  const [activeSemester, setActiveSemester] = useState("semester1");
  const branchData = resources[branch.toUpperCase()];

  if (!branchData) {
    return <div className="p-6 text-center">Department data not found</div>;
  }

  // Get subjects keys inside this branch
  const subjects = Object.keys(branchData);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">{branch.toUpperCase()} Resources</h2>

      {/* Semester Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveSemester("semester1")}
          className={`px-4 py-2 rounded ${activeSemester === "semester1" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
        >
          Semester 1
        </button>
        <button
          onClick={() => setActiveSemester("semester2")}
          className={`px-4 py-2 rounded ${activeSemester === "semester2" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
        >
          Semester 2
        </button>
      </div>

      {/* Show subjects or Coming Soon */}
      {activeSemester === "semester1" ? (
        <ul className="space-y-3">
          {subjects.length ? (
            subjects.map((subjectKey) => (
              <li key={subjectKey}>
                <Link
                  to={`/resources/${branch}/${subjectKey}`}
                  className="block p-3 bg-card rounded shadow hover:shadow-lg transition"
                >
                  {subjectKey.charAt(0).toUpperCase() + subjectKey.slice(1)}
                </Link>
              </li>
            ))
          ) : (
            <p>No subjects available for Semester 1.</p>
          )}
        </ul>
      ) : (
        <div className="text-center py-8 text-muted-foreground font-semibold">
          Coming Soon
        </div>
      )}
    </div>
  );
};

export default DepartmentSemesters;
