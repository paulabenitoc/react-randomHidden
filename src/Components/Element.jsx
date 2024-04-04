import React from 'react';
import './Element.css'

function Element({ item, deleteItem, incrementCounter, decrementCounter }) {
  return (
    <li className="element">
      <span>{item.name}</span>
        <div className="buttons">
            <button onClick={() => decrementCounter(item.id)}>-</button>
              <span className='counter'>{item.counter}</span>
            <button onClick={() => incrementCounter(item.id)}>+</button>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
      </div>
    </li>
  );
}

export default Element;


