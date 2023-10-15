export default function BingoButton({ text, entries, handleSubmit }) {
  return (
    <>
      <button
        className="border-slate-300 border rounded-md py-2 px-4 text-lg shadow hover:bg-slate-50 focus:outline-slate-300"
      >
        {text}
      </button>
    </>
    )
}