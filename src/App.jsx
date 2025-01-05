import Header from "./components/Header.jsx";
import CreateArea from "./components/CreateArea.jsx";
import Note from "./components/Note.jsx";
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevValue => {
      
    })
  }

  return (
    <>
      <Header />
      <CreateArea />
      <div className="card-container">
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </div>
    </>
  )
}

export default App
