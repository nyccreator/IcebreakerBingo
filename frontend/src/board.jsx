import { useState } from "react";

function Square({ row, col, incrementCount }) {
  const [clicked, setClicked] = useState(false);

  function handleClick(i) {
    if (!clicked) {
      incrementCount(row, col);
      setClicked(true);
    }
  }

  return (
    <button className="square" onClick={handleClick}>
      {clicked ? "x" : null}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(25).fill(null));
  const [rows, setRows] = useState([0, 0, 0, 0, 0]);
  const [cols, setCols] = useState([0, 0, 0, 0, 0]);
  const [diags, setDiags] = useState([0, 0]);

  function incrementCount(row, col) {
    let newRows = [...rows];
    newRows[row] += 1;
    setRows(newRows);

    let newCols = [...cols];
    newCols[col] += 1;
    setCols(newCols);

    let newDiags = [...diags];
    if (row === col) {
      newDiags[0] += 1;
      setDiags(newDiags);
    }

    if (row + col == 4) {
      newDiags[1] += 1;
      setDiags(newDiags);
    }

    if (
      newRows[row] >= 5 ||
      newCols[col] >= 5 ||
      newDiags[0] >= 5 ||
      newDiags[1] >= 5
    ) {
      console.log("You won!");
    }
  }

  return (
    <>
      <div className="board-row">
        {Array.from(Array(5), (e, i) => (
          <Square
            key={`row-0-col-${i}`}
            row={0}
            col={i}
            incrementCount={incrementCount}
          />
        ))}
      </div>
      <div className="board-row">
        {Array.from(Array(5), (e, i) => (
          <Square
            key={`row-1-col-${i}`}
            row={1}
            col={i}
            incrementCount={incrementCount}
          />
        ))}
      </div>
      <div className="board-row">
        {Array.from(Array(5), (e, i) => (
          <Square
            key={`row-2-col-${i}`}
            row={2}
            col={i}
            incrementCount={incrementCount}
          />
        ))}
      </div>
      <div className="board-row">
        {Array.from(Array(5), (e, i) => (
          <Square
            key={`row-3-col-${i}`}
            row={3}
            col={i}
            incrementCount={incrementCount}
          />
        ))}
      </div>
      <div className="board-row">
        {Array.from(Array(5), (e, i) => (
          <Square
            key={`row-4-col-${i}`}
            row={4}
            col={i}
            incrementCount={incrementCount}
          />
        ))}
      </div>
    </>
  );
}
