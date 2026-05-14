import { useState, useEffect, useCallback } from 'react'
import { POOLS, TIMES, shuffle, pick } from './data/pools'
import Header from './components/Header'
import Menu from './components/Menu'
import Study from './components/Study'
import Recall from './components/Recall'
import Results from './components/Results'

function loadStats() {
  try {
    const s = JSON.parse(localStorage.getItem('decadle_stats') || '{}')
    return { streak: s.streak || 0, bestStreak: s.bestStreak || 0, games: s.games || 0, totalPts: s.totalPts || 0 }
  } catch { return { streak: 0, bestStreak: 0, games: 0, totalPts: 0 } }
}

function saveStats(s) {
  try { localStorage.setItem('decadle_stats', JSON.stringify(s)) } catch {}
}

export default function App() {
  const saved = loadStats()
  const [phase, setPhase] = useState('menu')
  const [diff, setDiff] = useState('medium')
  const [cat, setCat] = useState('food')
  const [targets, setTargets] = useState([])
  const [pool, setPool] = useState([])
  const [selected, setSelected] = useState(new Set())
  const [timeLeft, setTimeLeft] = useState(0)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(saved.streak)
  const [bestStreak, setBestStreak] = useState(saved.bestStreak)
  const [games, setGames] = useState(saved.games)
  const [totalPts, setTotalPts] = useState(saved.totalPts)

  useEffect(() => {
    if (phase !== 'study') return
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { setPhase('recall'); return 0 }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [phase])

  const startGame = useCallback((overrides = {}) => {
    const activeDiff = overrides.diff ?? diff
    const activeCat = overrides.cat ?? cat
    const catPool = POOLS[activeCat].items
    const newTargets = pick(catPool, 10)
    const targetWords = new Set(newTargets.map(t => t.w))
    const distractors = shuffle(catPool.filter(i => !targetWords.has(i.w))).slice(0, 10)
    if (overrides.diff) setDiff(overrides.diff)
    setTargets(newTargets)
    setPool(shuffle([...newTargets, ...distractors]))
    setSelected(new Set())
    setTimeLeft(TIMES[activeDiff])
    setScore(0)
    setPhase('study')
  }, [diff, cat])

  const toggleSelect = useCallback((w) => {
    setSelected(prev => {
      const next = new Set(prev)
      if (next.has(w)) next.delete(w)
      else if (next.size < 10) next.add(w)
      return next
    })
  }, [])

  const submitRecall = useCallback(() => {
    const targetWords = new Set(targets.map(t => t.w))
    let correct = 0
    selected.forEach(w => { if (targetWords.has(w)) correct++ })
    const newGames = games + 1
    const newTotalPts = totalPts + correct
    const newStreak = correct >= 8 ? streak + 1 : 0
    const newBestStreak = Math.max(bestStreak, newStreak)
    setScore(correct)
    setGames(newGames)
    setTotalPts(newTotalPts)
    setStreak(newStreak)
    setBestStreak(newBestStreak)
    saveStats({ streak: newStreak, bestStreak: newBestStreak, games: newGames, totalPts: newTotalPts })
    setPhase('results')
  }, [targets, selected, games, totalPts, streak, bestStreak])

  const tryHarder = useCallback(() => {
    const diffs = ['easy', 'medium', 'hard']
    const idx = diffs.indexOf(diff)
    if (idx < 2) startGame({ diff: diffs[idx + 1] })
    else setPhase('menu')
  }, [diff, startGame])

  const statsProps = { streak, bestStreak, games, totalPts }

  return (
    <div id="app">
      {phase === 'menu' && (
        <>
          <Header subtitle="Memorise 10 items. How many can you recall?" showStats {...statsProps} />
          <Menu diff={diff} cat={cat} onDiff={setDiff} onCat={setCat} onStart={startGame} />
        </>
      )}
      {phase === 'study' && (
        <>
          <Header subtitle="Memorise all 10 items!" />
          <Study targets={targets} timeLeft={timeLeft} diff={diff} />
        </>
      )}
      {phase === 'recall' && (
        <>
          <Header subtitle="Which items were in the list?" />
          <Recall pool={pool} selected={selected} onToggle={toggleSelect} onSubmit={submitRecall} />
        </>
      )}
      {phase === 'results' && (
        <>
          <Header subtitle="" showStats {...statsProps} />
          <Results
            targets={targets} pool={pool} selected={selected}
            score={score} streak={streak} diff={diff}
            onPlayAgain={startGame} onTryHarder={tryHarder}
          />
        </>
      )}
    </div>
  )
}
