import React, { useState } from "react";
import Note from "./Note.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import NewNote from "./NewNote.jsx";

function App() {
  const [notes, setNotes] = useState([]);

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
      {notes.map((currNote, num) => {
        return (
          <Note
            key={num}
            id={num}
            title={currNote.title}
            content={currNote.note}
            delClicked={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
