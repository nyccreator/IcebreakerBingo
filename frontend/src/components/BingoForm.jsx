import { useState } from 'react'
import BingoInput from './BingoInput'
import BingoButton from './BingoButton'
import BingoUrl from './BingoUrl'

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
      <p>Fill out the bingo card template with statements about people, ex. &quot;is left-handed&quot;.</p>
      <div
        className="grid grid-cols-5 gap-3 lg:w-1/2"
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
      </div>
      <BingoButton text={'Randomize'} />
      <BingoButton text={'Create Bingo Card'} />
      <BingoUrl id="f8c3de3d-1fea-4d7c-a8b0-29f63c4c3454" />
      <p>Made with 🥖🍔🍛🍝 by Dream Team at HackGT X</p>
    </>
  )
}