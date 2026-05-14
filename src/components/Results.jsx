import { getMsg, pct } from '../data/pools'

function ResGroup({ items, type, title }) {
  if (!items.length) return null
  return (
    <>
      <p className="res-label">{title} ({items.length})</p>
      <div className="results-grid">
        {items.map(i => (
          <div key={i.w} className={`res-card ${type}`}>
            <span className="emoji">{i.e}</span>
            <span className="word">{i.w}</span>
          </div>
        ))}
      </div>
    </>
  )
}

export default function Results({ targets, pool, selected, score, streak, diff, onPlayAgain, onTryHarder }) {
  const targetWords = new Set(targets.map(t => t.w))
  const correct = [], missed = [], wrong = []
  targets.forEach(t => { if (selected.has(t.w)) correct.push(t); else missed.push(t) })
  selected.forEach(w => { if (!targetWords.has(w)) { const item = pool.find(i => i.w === w); if (item) wrong.push(item) } })

  const cls = pct(score)
  const scoreCol = score === 10 ? '#085041' : score >= 8 ? '#412402' : 'var(--text-primary)'
  const diffs = ['easy', 'medium', 'hard']
  const harderLabel = diffs.indexOf(diff) < 2
    ? `TRY ${diffs[diffs.indexOf(diff) + 1].toUpperCase()}`
    : 'CHANGE CATEGORY'

  return (
    <>
      <div className={`score-hero ${cls}`}>
        <div className="score-num" style={{ color: scoreCol }}>{score}/10</div>
        <div className="score-label" style={{ color: scoreCol }}>{getMsg(score)}</div>
        {streak > 1 && <div className="score-msg" style={{ color: scoreCol }}>Streak: {streak} games with 8+</div>}
      </div>
      <ResGroup items={correct} type="hit" title="REMEMBERED" />
      <ResGroup items={missed} type="miss" title="MISSED" />
      <ResGroup items={wrong} type="wrong" title="WRONG PICKS" />
      <div className="btn-row">
        <button className="play-again-btn" onClick={onPlayAgain}>PLAY AGAIN</button>
        <button className="harder-btn" onClick={onTryHarder}>{harderLabel}</button>
      </div>
    </>
  )
}
