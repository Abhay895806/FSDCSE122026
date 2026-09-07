import React,{useState} from 'react'
import cat from '../images/cat.png'

function Imagemanipulation() {
    const[height,setHeight] = useState(200);
    const[width,setWidth] = useState(200);
    const[red,setRed] = useState(20);
    const[green,setGreen] = useState(200);
    const[blue,setBlue] = useState(140);
    function enhanceHeight(){
        setHeight(height+10);
    }
    function enhanceWidth(){
        setWidth(width+10);
    }
    function reduceHeight(){
        setHeight(height-10);
    }
    function reduceWidth(){
        setWidth(width-10);
    }
    function reset(){
        setHeight(200);
        setWidth(200);
    }
  return (
    <div>
     <h2 style={{color:'white', backgroundColor:'brown'}}> Imagemanipulation using React</h2>
     <div style={{border:'2px solid red',height:'300px',width:'400px',marginLeft:'300px',backgroundColor:'rgb(${red},${green},${blue})'}}>
    <img src={cat} height={height} width={width}></img>
    </div>
    <div>
       <h2>Height={height}</h2>
       <h2>Width={width}</h2>
    </div>


    <button onClick={enhanceHeight}>Enhance Height</button>
    <button onClick={enhanceWidth}>Enhance Width</button>
    <button onClick={reduceHeight}>Reduce Height</button>
    <button onClick={reduceWidth}>Reduce Width</button>
    <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Imagemanipulation
