import React, { useState } from "react";

function NewNote(props) {
  const [note, setNote] = useState({
    title: "",
    note: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      const updatedNote = Object.assign({}, prevNote);
      updatedNote[name] = value;
      return updatedNote;
    });
  }

  function submitNote(event) {
    props.addClicked(note);
    setNote({
      title: "",
      note: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="note"
          onChange={handleChange}
          value={note.note}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default NewNote;
