export default function Header({ subtitle, streak, bestStreak, games, totalPts, showStats = false }) {
  const avg = games ? Math.round(totalPts / games * 10) / 10 : '—'
  return (
    <div className="header">
      <div className="hero">
        <div className="hero-circle hero-circle-1" />
        <div className="hero-circle hero-circle-2" />
        <div className="hero-inner">
          <div className="hero-badge">Memory Game</div>
          <h1 className="hero-title">DEC<span>ADLE</span></h1>
          {subtitle && <p className="hero-sub">{subtitle}</p>}
        </div>
      </div>
      {showStats && (
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-num">{streak}</div>
            <div className="stat-label">Streak</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">{bestStreak}</div>
            <div className="stat-label">Best</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">{avg}</div>
            <div className="stat-label">Avg</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">{games}</div>
            <div className="stat-label">Played</div>
          </div>
        </div>
      )}
    </div>
  )
}
