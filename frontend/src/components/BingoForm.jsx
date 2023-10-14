import { useState } from 'react'
import BingoInput from './BingoInput'
import BingoButton from './BingoButton'

export default function BingoForm() {
  const [entries, setEntries] = useState([
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', 'FREE', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ])
  
  return (
    <>
      <form
        className="grid grid-cols-5 gap-3"
      >
        {entries.map((rowData, row) => (
          rowData.map((entryData, col) => (
            <BingoInput
              key={`row-${row}-col-${col}`}
              entries={entries}
              setEntries={setEntries}
              row={row}
              col={col}
            />
          ))
        ))}
      </form>
      <BingoButton text={'Randomize'} />
      <BingoButton text={'Create Bingo Card'} />
    </>
  )
}