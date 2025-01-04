import { useState } from 'react';
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";

function CreateArea() {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote(prevNote => ({
      ...prevNote,
      // dynamically sets the property of the new object.
      // if name is "title", it sets the title property.
      [name]: value
    }));
  }

  function submitNote() {

  }
  return(
    <div className="container">
        <form className="text-area">
          <input 
            name="title" 
            placeholder="Title"
            value={note.title}
            onChange={handleChange}
          />
          <textarea
            name="content"
            placeholder="Note Content"
            rows="3"
            value={note.content}
            onChange={handleChange}
          />
          <Fab 
            className="fab-button"
            onClick={submitNote}
          >
            <AddIcon />
          </Fab>
        </form>
    </div>
)}

export default CreateArea;