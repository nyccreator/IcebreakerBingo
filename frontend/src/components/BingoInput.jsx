import PropTypes from 'prop-types'

BingoInput.propTypes = {
  entries: PropTypes.array.isRequired,
  setEntries: PropTypes.func.isRequired,
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired
}

export default function BingoInput({ entries, setEntries, row, col}) {
  return (
    <>
      <textarea
        className="border-slate-300 border focus:outline-0 rounded-md focus:ring-offset-2 focus:ring-2 focus:ring-slate-300 text-center resize-none aspect-square shadow text-xs lg:text-base lg:px-3 lg:py-2"
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
    </>
    )
  }