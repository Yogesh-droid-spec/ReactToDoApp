import React, { useState } from "react";

function App() {
  const [items,setItems] = useState([]);
  const [inputText,setInput] = useState("");
   
  function handleChange(event){
        const input = event.target.value;
        setInput(input);
  }

  function handleClick() {
       setItems(prevItems => {
         return [...prevItems,inputText];
       }
       )
       setInput("");
       
    }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={inputText} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => {
           return <li>{item}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
