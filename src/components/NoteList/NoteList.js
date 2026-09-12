import "./NoteList.css";

function NoteList() {
    const notes = [
  {
    id: 1,
    text: "Hello World",
    createdOn: new Date("2026-09-12"),
  },
  {
    id: 2,
    text: "Learn React fundamentals",
    createdOn: new Date("2026-09-11"),
  },
  {
    id: 3,
    text: "Practice JavaScript interview questions",
    createdOn: new Date("2026-09-10"),
  },
  {
    id: 4,
    text: "Build Notes App using React",
    createdOn: new Date("2026-09-09"),
  },
  {
    id: 5,
    text: "Learn Redux Toolkit",
    createdOn: new Date("2026-09-08"),
  },
  {
    id: 6,
    text: "Complete Node.js API development",
    createdOn: new Date("2026-09-07"),
  },
  {
    id: 7,
    text: "Revise MongoDB and Mongoose",
    createdOn: new Date("2026-09-06"),
  },
  {
    id: 8,
    text: "Work on MERN Stack project",
    createdOn: new Date("2026-09-05"),
  },
];
  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button className="btn btn-danger">Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
