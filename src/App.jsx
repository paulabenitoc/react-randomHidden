import React, { useState } from 'react';
import Element from './Components/Element';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [chosenItem, setChosenItem] = useState(null);

  const addItem = () => {
    if (!itemName.trim()) {
      return;
    }

    const newItem = {
      id: Date.now(),
      name: itemName.trim(),
      counter: 0
    };
    setItems([...items, newItem]);
    setItemName('');
  };

  const deleteItem = id => {
    setItems(items.filter(item => item.id !== id));
  };

  const incrementCounter = id => {
    setItems(items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          counter: item.counter + 1
        };
      }
      return item;
    }));
  };

  const decrementCounter = id => {
    setItems(items.map(item => {
      if (item.id === id && item.counter > 0) {
        return {
          ...item,
          counter: item.counter - 1
        };
      }
      return item;
    }));
  };

  const chooseRandomItem = () => {
    if (items.length === 0) {
      return;
    }
    const randomIndex = Math.floor(Math.random() * items.length);
    const chosenItem = items[randomIndex];
    setChosenItem(chosenItem);
  };

  const resetSelection = () => {
    setChosenItem(null);
    setItems([]);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Add New Value"
        value={itemName}
        onChange={e => setItemName(e.target.value)}
      />
      <button className="add-button" onClick={addItem}>Add New</button>
      <button className="random-button" onClick={chooseRandomItem}>▶</button>
      {chosenItem ? (
        <div className="chosen-item">
          <h2>Winner 🍸</h2>
          <p>{chosenItem.name}</p>
          <button className="reset-button" onClick={resetSelection}>🔁</button>
        </div>
      ) : null}
      <ul>
        {items.map(item => (
          <Element key={item.id} item={item} deleteItem={deleteItem} incrementCounter={incrementCounter} decrementCounter={decrementCounter} />
        ))}
      </ul>
    </div>
  );
}

export default App;


