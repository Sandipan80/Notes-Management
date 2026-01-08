import './NoteItem.css'

function NoteItem({ note, onDelete }) {
  const handleDelete = () => {
    onDelete(note.id)
  }

  return (
    <div className="note-item">
      <div className="note-content">
        <h3 className="note-title">Title: {note.title}</h3>
        <p className="note-description">Description: {note.description || 'No description provided'}</p>
      </div>
      <button 
        className="delete-button"
        onClick={handleDelete}
        aria-label="Delete note"
      >
        🗑️ Delete
      </button>
    </div>
  )
}

export default NoteItem
