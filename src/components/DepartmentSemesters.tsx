import React, { useState } from "react";
import { Link } from "react-router-dom";
import { resources } from "@/data/resources";

interface Props {
  branch: string;
}

const HSL_COLOR = {
  bg_solid_component: "hsl(220, 20%, 90%)",
  text_primary: "hsl(220, 20%, 20%)",
  text_muted: "hsl(220, 10%, 40%)",
  accent_primary: "hsl(240, 60%, 70%)",
  accent_secondary: "hsl(10, 70%, 80%)",
  button_text_light: "hsl(0, 0%, 98%)",
};

const unifiedGradient = `from-[hsl(220,20%,70%)] via-[hsl(200,30%,85%)] to-[hsl(220,20%,90%)]`;

const DepartmentSemesters = ({ branch }: Props) => {
  const [activeSemester, setActiveSemester] = useState("semester1");
  const branchData = resources[branch.toUpperCase()];

  if (!branchData) {
    return <div className="p-6 text-center" style={{ color: HSL_COLOR.text_muted }}>
      Department data not found
    </div>;
  }

  const subjects = branchData.subjects[activeSemester] || [];

  return (
    <div className="min-h-screen relative font-sans overflow-x-hidden" style={{ color: HSL_COLOR.text_primary }}>
      {/* Animated Gradient Background */}
      <div className={`absolute inset-0 -z-10 animate-gradient bg-gradient-to-r ${unifiedGradient}`} />

      <div className="max-w-3xl mx-auto pt-16 px-4 flex flex-col gap-10 items-center">
        {/* Gradient Title Text */}
        <h1
          className={`text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[hsl(220,20%,40%)] via-[hsl(240,50%,50%)] to-[hsl(200,70%,60%)] mb-8`}
          style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
        >
          {branch.toUpperCase()} Resources
        </h1>

        {/* Semester Tabs */}
        <div className="flex gap-4 bg-white bg-opacity-60 rounded-3xl shadow p-1 w-full max-w-md justify-center">
          <button
            onClick={() => setActiveSemester("semester1")}
            className={`relative overflow-hidden px-5 py-2 rounded-2xl font-bold transition-all w-1/2
              ${
                activeSemester === "semester1"
                  ? `text-white shadow bg-gradient-to-r from-[hsl(240,60%,70%)] via-[hsl(220,60%,60%)] to-[hsl(200,70%,80%)]`
                  : `text-[${HSL_COLOR.text_muted}] hover:text-white hover:shadow-md hover:bg-gradient-to-r hover:from-[hsl(220,40%,80%)] hover:to-[hsl(240,50%,70%)] cursor-pointer`
              }
            `}
          >
            <span className="relative z-10">Semester 1</span>
          </button>
          <button
            onClick={() => setActiveSemester("semester2")}
            className={`relative overflow-hidden px-5 py-2 rounded-2xl font-bold transition-all w-1/2
              ${
                activeSemester === "semester2"
                  ? `text-white shadow bg-gradient-to-r from-[hsl(240,60%,70%)] via-[hsl(220,60%,60%)] to-[hsl(200,70%,80%)]`
                  : `text-[${HSL_COLOR.text_muted}] hover:text-white hover:shadow-md hover:bg-gradient-to-r hover:from-[hsl(220,40%,80%)] hover:to-[hsl(240,50%,70%)] cursor-pointer`
              }
            `}
          >
            <span className="relative z-10">Semester 2</span>
          </button>
        </div>

        {/* Subject list or Coming Soon */}
        {subjects.length > 0 ? (
          <ul className="w-full space-y-4">
            {subjects.map(({ id, name }, idx) => (
              <li key={id}>
                <Link
                  to={`/resources/${branch}/${id}`}
                  className="block w-full py-5 rounded-xl bg-white bg-opacity-[0.85] shadow-md text-center text-lg font-semibold transition-transform duration-300 ease-in-out cursor-pointer"
                  style={{
                    color: HSL_COLOR.text_primary,
                    animationDelay: `${idx * 0.07 + 0.3}s`,
                    transitionProperty: "background-color, box-shadow, color",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.backgroundImage =
                      `linear-gradient(to right, hsl(240, 60%, 70%), hsl(220, 60%, 60%), hsl(200, 70%, 80%))`;
                    (e.currentTarget as HTMLElement).style.color = HSL_COLOR.button_text_light;
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 10px 15px -3px rgba(59, 130, 246, 0.4)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.backgroundImage = "";
                    (e.currentTarget as HTMLElement).style.color = HSL_COLOR.text_primary;
                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                  }}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-8" style={{ color: HSL_COLOR.text_muted, fontWeight: "600" }}>
            Coming Soon
          </div>
        )}
      </div>

      {/* Gradient Background Animation Styles */}
      <style>{`
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientBG 15s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default DepartmentSemesters;
