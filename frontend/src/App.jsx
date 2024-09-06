import { useEffect } from 'react'
import './App.css'
import BingoForm from './components/BingoForm'
import {Link} from "react-router-dom";

function App() {
  return (
    <div
      className="flex flex-col min-h-screen items-center gap-5 mx-52 py-6 bg-indigo-300"
    >
      <Link to={"/"}
        className="text-4xl font-bold text-center cursor-pointer"
      >
        Icebreaker Bingo
      </Link>
      <BingoForm />
    </div>
  )
}

export default App
