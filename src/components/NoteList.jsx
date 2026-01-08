import NoteItem from './NoteItem'
import './NoteList.css'

function NoteList({ notes, onDeleteNote }) {
  return (
    <div className="note-list-container">
      <h2>Your Notes</h2>
      <div className="note-list">
        {notes.map(note => (
          <NoteItem 
            key={note.id} 
            note={note} 
            onDelete={onDeleteNote}
          />
        ))}
      </div>
    </div>
  )
}

export default NoteList
