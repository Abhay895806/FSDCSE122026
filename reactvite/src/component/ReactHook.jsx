import React,{useState} from 'react'

function ReactHook() {
    const [counter,setCounter] = useState(100);
    function increaseCounter(){
       // alert('Hii');
         setCounter(counter+1);
    }
  return (
    <div>
      <h2 style={{color:'red'}}> Working on ReactHook</h2>
      <h1>Counter value={counter}</h1>
      <button onClick={increaseCounter}>Increase CounterValue</button>
    </div>
  )
}

export default ReactHook
