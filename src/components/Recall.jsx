export default function Recall({ pool, selected, onToggle, onSubmit }) {
  const count = selected.size
  return (
    <>
      <div className="sel-counter">
        Selected <strong>{count}</strong> / 10
      </div>
      <div className="recall-grid">
        {pool.map(item => (
          <div
            key={item.w}
            className={`recall-card${selected.has(item.w) ? ' chosen' : ''}`}
            onClick={() => onToggle(item.w)}
          >
            <span className="emoji">{item.e}</span>
            <span className="word">{item.w}</span>
          </div>
        ))}
      </div>
      <button
        className={`submit-btn${count === 10 ? ' ready' : ''}`}
        onClick={() => count === 10 && onSubmit()}
      >
        {count === 10 ? 'SUBMIT ANSWERS' : `SELECT ${10 - count} MORE`}
      </button>
    </>
  )
}
