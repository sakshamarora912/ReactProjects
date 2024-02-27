import React, { useRef, useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const countRef =useRef(0);
  
    const increment = () => {
      setCount(count + 1);
    };
    const decrement = () => {
      if(count>0){
      setCount(count - 1);
      }
    };

    const increment_1 = () => {
      countRef.current+=1;
      console.log(countRef.current)
    };
    const decrement_1 = () => {
      if(countRef.current>0){
      countRef.current-=1;console.log("hello")
      }
    };
  
    return (
      <div>
        <span>Count: {countRef.current} </span>
        <span>UseRef   </span>
        <button onClick={increment_1}>+</button>
        <button onClick={decrement_1}>-</button> <br/>
        
        <span>Count: {count} </span>
        <span>UseState </span>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button><br/>
      </div>
    );
  }


export default Counter