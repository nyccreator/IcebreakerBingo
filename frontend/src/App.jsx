import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'

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

  const [entries, setEntries] = useState([
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', 'free', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ])

  return (
    <>
      {entries.map((rowData, row) => (
        <div
          key={`row-${row}`}
          className="form-row"
        >
          {rowData.map((entryData, col) => (
              <input
                key={`row-${row}-col-${col}`}
                type="text"
                value={entries[row][col]}
                onInput={(e) => {
                  setEntries((prev) => {
                    const result = [...prev]
                    result[row][col] = e.target.value
                    return result
                  })
                  console.log(entries)
                }}
              />
            ))
          }
        </div>
      ))}
      <p>
        {'Entries array: ' + entries.toString()}
      </p>
    </>
  )
}

export default App
