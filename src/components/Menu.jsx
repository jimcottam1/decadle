import { POOLS, TIMES } from '../data/pools'

const DIFF_LABELS = { easy: 'Easy', medium: 'Medium', hard: 'Hard' }
const CAT_EMOJI   = { food: '🍔', animals: '🦁', cities: '🌍', instruments: '🎵', nature: '🌿' }

export default function Menu({ diff, cat, onDiff, onCat, onStart }) {
  return (
    <>
      <div className="menu-panels">
        {/* Difficulty panel */}
        <div className="panel-card">
          <p className="panel-label">Difficulty</p>
          {['easy', 'medium', 'hard'].map(d => (
            <div
              key={d}
              className={`diff-item${diff === d ? ' active' : ''}`}
              onClick={() => onDiff(d)}
            >
              <span className={`diff-dot dot-${d}`} />
              <span className="diff-name">{DIFF_LABELS[d]}</span>
              <span className="diff-time">{TIMES[d]}s</span>
            </div>
          ))}
        </div>

        {/* Category panel */}
        <div className="panel-card">
          <p className="panel-label">Category</p>
          <div className="cat-grid">
            {Object.entries(POOLS).map(([k, v]) => (
              <div
                key={k}
                className={`cat-tile${cat === k ? ' active' : ''}`}
                onClick={() => onCat(k)}
              >
                <span className="cat-emoji-box">{CAT_EMOJI[k] ?? v.items[0].e}</span>
                <span className="cat-name">{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <button className="cta-bar" onClick={onStart}>
        <div className="cta-left">
          <div className="cta-ready">Ready to play?</div>
          <div className="cta-text">Start Game</div>
        </div>
        <div className="cta-arrow">›</div>
      </button>
    </>
  )
}
