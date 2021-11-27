import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Card from './components/Card';

function App() {
  const [cScore, setCScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardList, setCardList] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [memory, setMemory] = useState([]);

  useEffect(() => {
    function shuffleCards() {
      const array = [...cardList];
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    setCardList(shuffleCards());

  }, [memory]);

  const clickCard = (e) => {
    if (memory.includes(e.target.dataset.key)) {
      setMemory([]);
      if (cScore > highScore) {
        setHighScore(cScore);
      }
      setCScore(0);
    }
    else {
      setMemory(memory.concat(e.target.dataset.key))
      setCScore(cScore + 1);
    }
  };

  return (
    <div id='outer'>
      <div id='head'>
        <p>Score: {cScore}</p>
        <p>Highscore: {highScore}</p>
      </div>
      <div id='card-container'>
        {cardList.map((num) => <Card content={num} clickCard={clickCard} dataKey={num} key={num} />)}
      </div>
    </div>
  );
}

export default App;
