import { useEffect } from 'react'
import './App.css'
import BingoForm from './components/BingoForm'

function App() {
  // Test call to api/hello endpoint
  // TODO: Remove this code in final product
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('api/hello')
      const text = await response.text()
      console.log(text)
    }
    fetchData()
  }, [])

  return (
    <div
      className="flex flex-col min-h-screen items-center gap-5 my-6"
    >
      <h1
        className="text-4xl font-bold text-center mb-3"
      >
        Icebreaker Bingo
      </h1>
      <BingoForm />
    </div>
  )
}

export default App
