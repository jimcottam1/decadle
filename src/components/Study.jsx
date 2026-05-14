import { TIMES } from '../data/pools'

export default function Study({ targets, timeLeft, diff }) {
  const pct = Math.round(timeLeft / TIMES[diff] * 100)
  const col = timeLeft > 10 ? '#1D9E75' : timeLeft > 5 ? '#EF9F27' : '#E24B4A'
  return (
    <>
      <div className="timer-wrap">
        <div className="timer-bar-bg">
          <div className="timer-bar" style={{ width: pct + '%', background: col }} />
        </div>
        <div className="timer-num">{timeLeft}s</div>
      </div>
      <p className="phase-label">STUDY THESE 10 ITEMS</p>
      <div className="items-grid">
        {targets.map(item => (
          <div key={item.w} className="item-card">
            <span className="emoji">{item.e}</span>
            <span className="word">{item.w}</span>
          </div>
        ))}
      </div>
    </>
  )
}
