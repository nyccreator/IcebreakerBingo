import { useState } from 'react'
import BingoInput from './BingoInput'
import BingoButton from './BingoButton'
import BingoUrl from './BingoUrl'
import { getOne, post } from '../client'

export default function BingoForm() {
  const [entries, setEntries] = useState([
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ])
  const [id, setId] = useState('')
  const [submitted, setSubmitted] = useState(false)

  async function handleRandomize() {
    const json = await getOne(0)
    setEntries(json.contents)
  }
  
  async function handleSubmit() {
    const body = {
      contents: entries
    }
    console.log(JSON.stringify(body))
    const json = await post(body)
    console.log(json)
    setId(json.id)
    setSubmitted(true)
  }

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
      <BingoButton text={'Randomize'} handleClick={handleRandomize} />
      <BingoButton text={'Create Bingo Card'} handleClick={handleSubmit} />
      { submitted ? <BingoUrl id={id} /> : null }
      <p>Made with 🥖🍔🍛🍝 by Dream Team at HackGT X</p>
    </>
  )
}