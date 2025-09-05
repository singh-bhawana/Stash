import { useState, useEffect } from "react";

const BLACK_BG = "#000000";
const CARD_BG = "#121212";
const ACCENT_RED = "#e03e2f"; // Used only on buttons and headings
const TEXT_LIGHT = "#e0e0e0";
const INPUT_BG = "#1e1e1e";
const SHADOW = "0 6px 12px rgba(224, 62, 47, 0.4)";
const STICKY_COLORS = ["#ffb3b3", "#fffaad", "#c2ffd8"]; // Pink, Yellow, Green sticky notes

type Task = { text: string; date?: string; done: boolean; };
type Note = { id: number; text: string; };

const StudentHub = () => {
  const [examSubject, setExamSubject] = useState("");
  const [examDate, setExamDate] = useState("");
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    if (!examDate) { setDaysLeft(null); return; }
    const today = new Date();
    const exam = new Date(examDate);
    const diff = Math.ceil((exam.getTime() - today.getTime())/(1000*60*60*24));
    setDaysLeft(diff >= 0 ? diff : null);
  }, [examDate]);

  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [newTaskDate, setNewTaskDate] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask.trim(), date: newTaskDate, done: false }]);
      setNewTask(""); setNewTaskDate("");
    }
  };
  const toggleTask = (i: number) => setTasks(tasks.map((t, idx) => idx === i ? { ...t, done: !t.done } : t));
  const deleteTask = (i: number) => setTasks(tasks.filter((_, idx) => idx !== i));

  const [notes, setNotes] = useState<Note[]>([
    { id: 0, text: "" },
    { id: 1, text: "" },
    { id: 2, text: "" },
  ]);
  const updateNote = (id: number, text: string) => setNotes(notes.map(n => n.id === id ? { ...n, text } : n));

  return (
    <div style={{ backgroundColor: BLACK_BG, minHeight: "100vh", padding: 40, fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: TEXT_LIGHT }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: 32 }}>
        {/* Exam Countdown */}
        <div style={{ backgroundColor: CARD_BG, padding: 24, borderRadius: 12, marginBottom: 40, boxShadow: SHADOW, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontWeight: "bold", fontSize: 24, color: ACCENT_RED }}>Next Exam</span>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <input type="text" placeholder="Subject" value={examSubject} onChange={e => setExamSubject(e.target.value)} style={{ backgroundColor: INPUT_BG, color: TEXT_LIGHT, border: "none", borderRadius: 8, padding: 10, width: 140, fontWeight: "bold", fontSize: 18 }} />
            <input type="date" value={examDate} onChange={e => setExamDate(e.target.value)} style={{ backgroundColor: INPUT_BG, color: TEXT_LIGHT, border: "none", borderRadius: 8, padding: 10, width: 160, fontWeight: "bold", fontSize: 18 }} />
            <span style={{ fontWeight: "bold", fontSize: 18 }}>{examSubject || "No Exam"} — {daysLeft !== null && examDate ? <span style={{ color: ACCENT_RED }}>{daysLeft} days left</span> : "No date"}</span>
          </div>
        </div>

        <div style={{ display: "flex", gap: 40 }}>
          {/* To-Do List */}
          <section style={{ backgroundColor: CARD_BG, padding: 24, borderRadius: 12, flexGrow: 1, boxShadow: SHADOW }}>
            <h2 style={{ fontWeight: "bold", fontSize: 22, marginBottom: 20, color: ACCENT_RED }}>To-Do List / Reminders</h2>
            <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
              <input type="text" placeholder="Add task" value={newTask} onChange={e => setNewTask(e.target.value)} style={{ flexGrow: 1, backgroundColor: INPUT_BG, color: TEXT_LIGHT, border: "none", borderRadius: 8, padding: 12, fontWeight: "bold" }} />
              <input type="date" value={newTaskDate} onChange={e => setNewTaskDate(e.target.value)} style={{ backgroundColor: INPUT_BG, color: TEXT_LIGHT, border: "none", borderRadius: 8, padding: 12, fontWeight: "bold", width: 140 }} />
              <button onClick={addTask} style={{ backgroundColor: ACCENT_RED, color: TEXT_LIGHT, border: "none", borderRadius: 8, padding: "12px 24px", fontWeight: "bold", cursor: "pointer" }}>Add</button>
            </div>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              {tasks.length === 0 && <li style={{ color: "#666" }}>No tasks yet</li>}
              {tasks.map((task, idx) => (
                <li key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 12px", borderBottom: `1px solid ${ACCENT_RED}`, color: task.done ? "#999" : TEXT_LIGHT, textDecoration: task.done ? "line-through" : "none" }}>
                  <span>{task.text}{task.date && <small style={{ marginLeft: 10, fontWeight: "normal", fontSize: 12, color: ACCENT_RED }}>{task.date}</small>}</span>
                  <div>
                    <button onClick={() => toggleTask(idx)} style={{ marginRight: 8, backgroundColor: "transparent", border: `1px solid ${ACCENT_RED}`, borderRadius: 6, color: ACCENT_RED, cursor: "pointer", padding: "4px 8px" }}>{task.done ? "Undo" : "Done"}</button>
                    <button onClick={() => deleteTask(idx)} style={{ backgroundColor: ACCENT_RED, border: "none", borderRadius: 6, color: TEXT_LIGHT, cursor: "pointer", padding: "4px 8px" }}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Colorful Sticky Notes */}
          <section style={{ width: 280, display: "flex", flexDirection: "column", gap: 16 }}>
            <h2 style={{ fontWeight: "bold", fontSize: 22, color: ACCENT_RED }}>Sticky Notes</h2>
            {notes.map((note, idx) => (
              <textarea
                key={note.id}
                value={note.text}
                onChange={e => updateNote(note.id, e.target.value)}
                rows={4}
                placeholder="Write a note..."
                style={{
                  backgroundColor: STICKY_COLORS[idx % STICKY_COLORS.length],
                  border: "none",
                  borderRadius: 12,
                  padding: 16,
                  color: "#222",
                  fontWeight: "600",
                  fontSize: 16,
                  resize: "vertical",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                }}
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default StudentHub;
