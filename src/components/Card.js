import React from 'react';
import '../styles/Card.css';

function Card({ content, clickCard, dataKey }) {
  return (
    <div className='card' data-key={dataKey} onClick={clickCard} >
      {content}
    </div>
  );
}

export default Card;
