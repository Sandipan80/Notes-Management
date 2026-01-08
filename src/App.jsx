import { useState, useEffect } from 'react'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'
import Loader from './components/Loader'
import EmptyState from './components/EmptyState'
import './App.css'

function App() {
  const [notes, setNotes] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Simulate API call with setTimeout (1-2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // 1.5 seconds

    return () => clearTimeout(timer)
  }, [])

  // Function to add a new note
  const addNote = (title, description) => {
    const newNote = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim()
    }
    setNotes([...notes, newNote])
  }

  // Function to delete a note
  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  return (
    <div className="app">
      <div className="container">
        <h1>Notes Management App</h1>
        
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <NoteForm onAddNote={addNote} />
            {notes.length === 0 ? (
              <EmptyState />
            ) : (
              <NoteList notes={notes} onDeleteNote={deleteNote} />
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default App
