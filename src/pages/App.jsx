import React, { useState, useEffect } from 'react'
import './App.css';
import { getAllNotes, updateNote, deleteNote, } from '../api'
import {NoteList, NoteForm} from '../components'
import { toast } from 'react-toastify';

// interface IRef {
//   collection: any,
//   class: any,
//   database: any,
//   id: number
//   value: {
//     id: number,
//     collection: IRef
//   }
// }

// interface INote {
//   ref: IRef,
//   ts: number,
//   data: INote[]
// }



//const App: React.FC = () => {
const App = () => {
  const [notes, setNotes] = useState([])

  useEffect ( 
    () => { 
      getAllNotes.then((res) => {
        setNotes(res)
        console.log(res)
      })
    }, [])

  const handleRemove = (e, id) => {
    e.preventDefault()
    deleteNote(id).then(res => res)
    const newNotesArray = notes.filter(note => note.ref.id !== id )
    setNotes(newNotesArray)
    toast.success(('Removed successfully'))
  }

  const handleEdit = (e, id, newText) => {
    e.preventDefault()
    updateNote(id, newText).then(res => res)
  }

  return (
    <div className="App">
      <header className="App-container">
        <h2>React-Fauna-Notes</h2>
        <div className="notes-container">
          <NoteForm notes={notes} setNotes={setNotes} /> 
          <NoteList
            onEdit={handleEdit}
            onRemove={handleRemove}
            data={notes}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
