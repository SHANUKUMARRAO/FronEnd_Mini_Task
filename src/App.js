import './App.css';
import React,{useState} from 'react';

function App() {
  const [counter, setCounter] = useState(1);

  const handleChange = (e) => {
    e.preventDefault();
    console.log(parseInt(e.target.value));
    if(e.target.value>1000) setCounter(1000);
    else if(counter>0 && counter<10 && counter>e.target.value) setCounter(1);
    else setCounter(parseInt(e.target.value));
  }

  const handleDec = (e) => {
    e.preventDefault();
    if(counter===1) return;
    setCounter(counter-1);
  }

  const handleInc = (e) => {
    e.preventDefault();
    if(counter===1000) return;
    setCounter(counter+1);
  }

  return (
    <div className="App">
      <button onClick={handleDec} className="btn negative">-</button>
      <input onChange={handleChange} className="btn inpu" type="integer" value={counter}/>
      <button onClick={handleInc} className="btn positive">+</button>
    </div>
  );
}

export default App;