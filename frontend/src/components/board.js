/*
import { useState } from 'react';

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

const user = {
  imageUrl: 'https://img.freepik.com/free-vector/start_53876-25533.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1697155200&semt=ais',
  imageSize: 60
};


export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <img 
        src={user.imageUrl}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          position: 'absolute',
          marginLeft: 143
          }} />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
*/