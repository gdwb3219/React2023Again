import { useState } from 'react';
import Button from './Button';
import Dice from './Dice';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);

  const handleRollDice = () => {
    const nextNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum);
    setGameHistory([...gameHistory, nextNum]);
  };

  const handleRollClear = () => {
    setNum(1);
    setSum(0);
    setGameHistory([]);
  };

  return (
    <div>
      <div>
        <Button onClick={handleRollDice}>던지기</Button>
        <Button onClick={handleRollClear}>처음부터</Button>
      </div>
      <div>
        <Dice color="blue" num={num} />
        <h1>총점</h1>
        <h3>{sum}</h3>
        <h1>기록</h1>
        <h3>{gameHistory.join(', ')}</h3>
      </div>
    </div>
  );
}

export default App;
