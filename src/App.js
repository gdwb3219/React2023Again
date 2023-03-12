import { useState } from 'react';
import Board from './Board';
import Button from './Button';
import './App.css';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollDice = () => {
    const nextNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  };

  const handleRollClear = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };

  return (
    <div className="App">
      <div>
        <Button className="App-button" color="blue" onClick={handleRollDice}>
          던지기
        </Button>
        <Button className="App-button" color="red" onClick={handleRollClear}>
          처음부터
        </Button>
      </div>
      <div>
        <Board name="나" color="blue" gameHistory={myHistory} />
        <Board name="상대" color="red" gameHistory={otherHistory} />
      </div>
    </div>
  );
}

export default App;
