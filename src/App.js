import './App.css';
import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount(count +1);
    setCount(count+1)
    // The function handleIncrement is incrementing the value by 1 
    // instead of 2 because setCount is asynchronous and does not immediately
    // update the state. When you call setCount(count + 1) twice in a row, both
    //  calls are using the same initial value of count, so the second call does
    //  not see the updated value from the first call.
    setCount((count) => count+1);
    setCount((count) => count+1);
    setCount((count) => count+1);
    setCount((count) => count+1);
    // By using the functional form of setCount, each update is based on the 
    // previous state, ensuring that the state is correctly incremented.
  }
  function handleDecrement(){
    if(count === 0){
      return;
    }
    setCount((count) => count-1);
  }
  return (
    <div className="App">
      <button onClick={handleIncrement}>Increment</button>
      <h1>{count}</h1>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
