import './EmptyState.css'

function EmptyState() {
  return (
    <div className="empty-state-container">
      <div className="empty-state-icon">📝</div>
      <p className="empty-state-message">No notes available. Add your first note.</p>
    </div>
  )
}

export default EmptyState
