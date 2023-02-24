import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Memory } from './components/Pages/Memory'
import { WordsPerMinute } from './components/Pages/WordsPerMinute'
import { Pokemon } from './components/Pages/Pokemon'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/memory" element={<Memory />} />
      <Route path="/words" element={<WordsPerMinute />} />
      <Route path="/pokemon" element={<Pokemon />} />
    </Routes>
  )
}

export default App
