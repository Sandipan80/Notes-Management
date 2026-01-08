import { useState } from 'react'
import './NoteForm.css'

function NoteForm({ onAddNote }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validation: Title is required
    if (!title.trim()) {
      setError('Title is required')
      return
    }

    // Clear error if title is valid
    setError('')
    
    // Add the note
    onAddNote(title, description)
    
    // Clear form
    setTitle('')
    setDescription('')
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
    // Clear error when user starts typing
    if (error && e.target.value.trim()) {
      setError('')
    }
  }

  const isSubmitDisabled = !title.trim()

  return (
    <div className="note-form-container">
      <form onSubmit={handleSubmit} className="note-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className={error ? 'input-error' : ''}
            placeholder="Enter note title"
          />
          {error && <div className="error-message">{error}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter note description (optional)"
            rows="4"
          />
        </div>
        
        <button 
          type="submit" 
          className="submit-button"
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default NoteForm
