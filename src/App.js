import { useState } from 'react';
import './App.css';
import Counter from './Counter';
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Counter update={setCount} text={count}/>
      <Counter update={setCount} text={count}/>
      <Counter update={setCount} text={count}/>
      <button onClick={() => setCount(count+1)}>Increment +</button>
    </div>
  );
}

export default App;
