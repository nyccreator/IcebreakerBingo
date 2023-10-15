import { useState } from "react"
import JSConfetti from 'js-confetti'

function BingoSquare({ text, row, col, incrementCount }) {
  const [clicked, setClicked] = useState(false)
  
  function handleClick() {
    if (!clicked) {
      incrementCount(row, col)
      setClicked(true)
    }
  }
  
  return (
    <button
      style={{ backgroundColor: clicked ? "rgb(226 232 240)" : "#FFF" }}
      className="border-slate-300 border focus:outline-0 rounded-md focus:ring-offset-2 focus:ring-2 focus:ring-slate-300 text-center aspect-square shadow text-xs lg:text-lg lg:px-3 lg:py-2"
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
  
export default function BingoBoard() {
  const [rows, setRows] = useState([0, 0, 0, 0, 0])
  const [cols, setCols] = useState([0, 0, 0, 0, 0])
  const [diags, setDiags] = useState([0, 0])
  const [hasBingo, setHasBingo] = useState(false)
  const jsConfetti = new JSConfetti()
  
  function incrementCount(row, col) {
    let newRows = [...rows]
    newRows[row] += 1
    setRows(newRows)
    
    let newCols = [...cols]
    newCols[col] += 1
    setCols(newCols)
    
    let newDiags = [...diags]
    if (row === col) {
      newDiags[0] += 1
      setDiags(newDiags)
    }
    
    if (row + col == 4) {
      newDiags[1] += 1
      setDiags(newDiags)
    }
    
    if (
      newRows[row] >= 5 ||
      newCols[col] >= 5 ||
      newDiags[0] >= 5 ||
      newDiags[1] >= 5
      ) {
        setHasBingo(true)
        jsConfetti.addConfetti({
          emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
       })
      }
    }

    const dummyData = [
      ['0,0', '0,1', '0,2', '0,3', '0,4'],
      ['1,0', '1,1', '1,2', '1,3', '1,4'],
      ['2,0', '2,1', 'FREE', '2,3', '2,4'],
      ['3,0', '3,1', '3,2', '3,3', '3,4'],
      ['4,0', '4,1', '4,2', '4,3', '4,4'],
    ]
    
    return (
      <div
        className="flex flex-col min-h-screen items-center gap-5 my-6"
      >
        <h1
          className="text-4xl font-semibold text-center"
        >
          { hasBingo ? 'Bingo!' : 'Icebreaker Bingo' }
        </h1>
        <p>Click or press the bingo card to mark a person you&apos;ve met with that characteristic.</p>
        <div
            className="grid grid-cols-5 gap-3 lg:w-1/2"
          >
            {dummyData.map((rowData, row) => (
              rowData.map((entry, col) => (
                <BingoSquare
                  key={`row-${row}-col-${col}`}
                  text={entry}
                  row={row}
                  col={col}
                  incrementCount={incrementCount}
                />
              ))
            ))}
        </div>
        <p>Made with 🥖🍔🍛🍝 by Dream Team at HackGT X</p>
      </div>
    );
}
      