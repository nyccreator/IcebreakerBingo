export default function BingoUrl({ url }) {
  return (
    <>
      <p>Bingo card created!</p>
      <input
        className="border-slate-300 border focus:outline-0 rounded-md focus:ring-offset-2 focus:ring-2 focus:ring-slate-300 shadow px-4 py-3"
        type="text"
        value={url}
      />
    </>
  )
}