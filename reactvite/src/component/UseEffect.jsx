import React, {useEffect, useState} from 'react'

function UseEffect() {
    const[count,setCount] = useState(20);
    const[pointer,setPointer] = useState(1000);
    useEffect(()=>{
       // console.log("counter="+counter)
       console.log("Hey ...using useEffect hook, count ="+count);
    },[count])
  return (
    <div>
      <h2 style={{ color: 'blue' }}>count = {count}</h2>
      <h2 style={{ color: 'green' }}>pointer = {pointer}</h2>
      use effect
      <button onClick={()=>setCount(count+10)}>counter</button>
    </div>
  )
}

export default UseEffect
