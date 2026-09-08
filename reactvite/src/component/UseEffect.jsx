import React, {useEffect, useState} from 'react'

function UseEffect() {
    const[counter,setCounter] = useState(20);
    useEffect(()=>{
        console.log("counter="+counter)
    })
  return (
    <div>
      
    </div>
  )
}

export default UseEffect
