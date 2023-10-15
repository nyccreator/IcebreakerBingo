import { useEffect } from 'react'
import './App.css'
import BingoForm from './components/BingoForm'

function App() {
  return (
    <div
      className="flex flex-col min-h-screen items-center gap-5 my-6"
    >
      <h1
        className="text-4xl font-semibold text-center"
      >
        Icebreaker Bingo
      </h1>
      <BingoForm />
    </div>
  )
}

export default App
