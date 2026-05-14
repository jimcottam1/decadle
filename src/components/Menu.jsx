import { POOLS } from '../data/pools'

const DIFF_LABELS = { easy: 'Easy — 30s', medium: 'Medium — 22s', hard: 'Hard — 15s' }

export default function Menu({ diff, cat, onDiff, onCat, onStart }) {
  return (
    <>
      <p className="section-title">DIFFICULTY</p>
      <div className="diff-row">
        {['easy', 'medium', 'hard'].map(d => (
          <button
            key={d}
            className={`opt-btn${diff === d ? ' sel-' + d : ''}`}
            onClick={() => onDiff(d)}
          >
            {DIFF_LABELS[d]}
          </button>
        ))}
      </div>
      <p className="section-title" style={{ marginTop: '.8rem' }}>CATEGORY</p>
      <div className="cat-row">
        {Object.entries(POOLS).map(([k, v]) => (
          <button
            key={k}
            className={`opt-btn${cat === k ? ' sel-cat' : ''}`}
            onClick={() => onCat(k)}
          >
            {v.label}
          </button>
        ))}
      </div>
      <button className="start-btn" onClick={onStart}>START GAME</button>
    </>
  )
}
