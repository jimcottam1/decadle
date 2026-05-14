export default function Header({ subtitle, streak, bestStreak, games, totalPts, showStats = false }) {
  const avg = games ? Math.round(totalPts / games * 10) / 10 : '—'
  return (
    <div className="header">
      <h1>DECADLE</h1>
      <p>{subtitle}</p>
      {showStats && (
        <div className="stats-row">
          <div className="stat-pill">Streak <span>{streak}</span></div>
          <div className="stat-pill">Best <span>{bestStreak}</span></div>
          <div className="stat-pill">Avg <span>{avg}</span></div>
          <div className="stat-pill">Played <span>{games}</span></div>
        </div>
      )}
    </div>
  )
}
