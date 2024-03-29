import React, { useState } from "react";
import Note from "./Note.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import NewNote from "./NewNote.jsx";
import notes from "../notes.js"

function App() {
  const [allNotes, setNotes] = useState(notes);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return prevNotes.concat(newNote);
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      const newNotes = [];
      for (let i = 0; i < prevNotes.length; i++) {
        if (i !== id) {
          newNotes.push(prevNotes[i]);
        }
      }
      return newNotes;
    });
  }

  return (
    <div>
      <Header />
      <NewNote addClicked={addNote} />
      {allNotes.map((currNote, num) => {
        return (
          <Note
            key={num}
            id={num}
            title={currNote.title}
            content={currNote.content}
            delClicked={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
