export default function BingoButton({ text, handleClick }) {
  return (
    <>
      <button
        className="border-slate-300 border rounded-md py-2 px-4 text-lg shadow hover:bg-slate-50 focus:outline-slate-300"
        onClick={handleClick}
      >
        {text}
      </button>
    </>
    )
}