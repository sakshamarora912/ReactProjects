import React ,{useState,useRef}from 'react'

const ChangeValue = () => {
    const [inputValue,setInputValue]=useState('hello');
    const handleSubmit=()=>{
        setInputValue("saksham");
    }

    const setvalue=useRef("hello");
    const handleSubmit_1=()=>{
        setvalue.current="saksham";
    }

  return (
    <div>
      <p>{inputValue}</p>
      <button onClick={handleSubmit}>Submit</button><br/><br/>

      <p>{setvalue.current}</p>
      <button onClick={handleSubmit_1}>Submit</button>
    </div>
  )
}

export default ChangeValue