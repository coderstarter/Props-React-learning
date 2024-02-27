import React from 'react'

function Counter(props) {
  return (
    <div style={{ display : "flex"}}>
        <button onClick={() => props.update(props.text + 1)}>Increment</button>
        <p>{props.text}</p>
        <button>Decrement</button>
    </div>
  )
}

export default Counter