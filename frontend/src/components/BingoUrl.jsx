import { useState } from "react"
import { FaCopy } from "react-icons/fa"


export default function BingoUrl({ id }) {
  const baseUrl = 'http://localhost:5173/board'
  const [copied, setCopied] = useState(false)

  function handleClick() {
    navigator.clipboard.writeText(`${baseUrl}/${id}`)
    setCopied(true)
  }

  return (
    <>
      <p>Share this bingo card link with others.</p>
      <div
        className="flex gap-2 items-center justify-center"
      >
        <input
          className="border-slate-300 border focus:outline-0 rounded-md focus:ring-offset-2 focus:ring-2 focus:ring-slate-300 shadow px-4 py-3"
          type="text"
          value={`${baseUrl}/${id}`}
        />
        <button
          className="border-slate-300 border focus:outline-0 rounded-md focus:ring-offset-2 focus:ring-2 focus:ring-slate-300 text-center shadow px-4 py-4 flex-1 mr-2 hover:bg-slate-50"
          onClick={handleClick}
        >
          <FaCopy />
        </button>
        { copied ? 'Copied!' : null }
      </div>
    </>
  )
}