import { useState } from "react";

type Subject = {
  name: string;
  credits: number;
  marks: number;
  grade: string;
  gradePoint: number;
};

const gradeScale = [
  { minMark: 93, grade: "A+", gp: 10 },
  { minMark: 85, grade: "A", gp: 9 },
  { minMark: 77, grade: "B+", gp: 8 },
  { minMark: 69, grade: "B", gp: 7 },
  { minMark: 61, grade: "C+", gp: 6 },
  { minMark: 53, grade: "C", gp: 5 },
  { minMark: 45, grade: "D", gp: 4 },
  { minMark: 0, grade: "F", gp: 0 },
];

const calculateGrade = (marks: number) => {
  for (const scale of gradeScale) {
    if (marks >= scale.minMark) return { grade: scale.grade, gp: scale.gp };
  }
  return { grade: "F", gp: 0 };
};

const defaultSubjects = Array(6)
  .fill(null)
  .map(() => ({ name: "", credits: 0, marks: 0, grade: "", gradePoint: 0 }));

const GpaCalculator = () => {
  const [subjects, setSubjects] = useState<Subject[]>(defaultSubjects);
  const [gpa, setGpa] = useState<number | null>(null);

  const handleChange = (
    index: number,
    field: keyof Omit<Subject, "grade" | "gradePoint">,
    value: string
  ) => {
    const updated = [...subjects];
    (updated[index] as any)[field] =
      field === "credits" || field === "marks" ? Number(value) : value;

    // Auto-calculate grade and gradePoint when marks change
    if (field === "marks") {
      const { grade, gp } = calculateGrade(Number(value));
      updated[index].grade = grade;
      updated[index].gradePoint = gp;
    }
    setSubjects(updated);
  };

  const calculateGpa = () => {
    let totalCredits = 0, weightedSum = 0;
    subjects.forEach(({ credits, gradePoint }) => {
      totalCredits += credits;
      weightedSum += credits * gradePoint;
    });
    setGpa(totalCredits === 0 ? null : weightedSum / totalCredits);
  };

  return (
    <div style={{ maxWidth: 700, margin: "40px auto", borderRadius: 8, background: "#fff", padding: 32, boxShadow: "0 6px 24px #e4e4e4" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "26px", textAlign: "center" }}>GPA Calculator</h1>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "28px" }}>
        <thead>
          <tr style={{ fontWeight: 600, background: "#f0f3fa", color: "#2c365a" }}>
            <th style={{ padding: 10, borderBottom: "2px solid #e4e8f2" }}>Subject Name</th>
            <th style={{ padding: 10, borderBottom: "2px solid #e4e8f2" }}>Credits</th>
            <th style={{ padding: 10, borderBottom: "2px solid #e4e8f2" }}>Expected Marks (out of 100)</th>
            <th style={{ padding: 10, borderBottom: "2px solid #e4e8f2" }}>Calculated Grade</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, idx) => (
            <tr key={idx}>
              <td>
                <input
                  style={{ width: "90%", padding: "8px", border: "1px solid #c2cae9", borderRadius: 6 }}
                  type="text"
                  placeholder="Subject Name"
                  value={subject.name}
                  onChange={e => handleChange(idx, "name", e.target.value)}
                />
              </td>
              <td>
                <input
                  style={{ width: "70%", padding: "8px", border: "1px solid #c2cae9", borderRadius: 6 }}
                  type="number"
                  placeholder="Credits"
                  value={subject.credits || ""}
                  min={0}
                  onChange={e => handleChange(idx, "credits", e.target.value)}
                />
              </td>
              <td>
                <input
                  style={{ width: "70%", padding: "8px", border: "1px solid #c2cae9", borderRadius: 6 }}
                  type="number"
                  placeholder="Marks"
                  value={subject.marks || ""}
                  min={0}
                  max={100}
                  onChange={e => handleChange(idx, "marks", e.target.value)}
                />
              </td>
              <td style={{ textAlign: "center", fontWeight: 600, color: "#474797" }}>
                {subject.marks ? subject.grade : "--"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={calculateGpa}
        style={{
          background: "#1eae5a",
          color: "#fff",
          padding: "12px 40px",
          border: "none",
          borderRadius: 6,
          fontSize: "1.1rem",
          fontWeight: 600,
          cursor: "pointer",
          margin: "10px auto 0",
          display: "block"
        }}
      >
        Calculate GPA
      </button>
      {gpa !== null && (
        <div style={{ marginTop: "28px", textAlign: "center", fontSize: "1.3rem", fontWeight: 700 }}>
          Expected GPA: {gpa.toFixed(2)} / 10
        </div>
      )}
    </div>
  );
};

export default GpaCalculator;
