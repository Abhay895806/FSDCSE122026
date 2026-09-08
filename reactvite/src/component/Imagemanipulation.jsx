import React,{useState} from 'react'
import cat from '../images/cat.png'

function Imagemanipulation() {
    const[height,setHeight] = useState(200);
    const[width,setWidth] = useState(200);
    const[red,setRed] = useState(230);
    const[green,setGreen] = useState(20);
    const[blue,setBlue] = useState(140);
    const[angle,setAngle] = useState(0);
    const[marginLeft,setMarginLeft] = useState(0);
    const[marginTop,setMarginTop] = useState(0);
    const[marginRight,setMarginRight] = useState(0);

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
    function marginL(){
        setMarginLeft(marginLeft+10);
    }
    function marginT(){
        setMarginTop(marginTop+10);
    }
    function marginR(){
        setMarginRight(marginRight+10);
    }

    function changeBGColor(){
       // alert('hii');
         setRed((Math.random()*256));
         setGreen((Math.random()*256));
         setBlue((Math.random()*256));
    }
    function rotateCat(){
        setAngle(angle+10);
    }
  return (
    <div>
     <h2 style={{color:'white', backgroundColor:'brown'}}> Imagemanipulation using React</h2>
     <div style={{border:'2px solid red',height:'300px',width:'400px'}}>
    <img src={cat} height={height} width={width} style={{backgroundColor:`rgb(${red},${green},${blue})`, transform: `rotate(${angle}deg)`,marginLeft:`${marginLeft}px`, marginTop:`${marginTop}px`, marginRight:`${marginRight}px`}}></img>
    </div>
    <div>
       <h2> Cat Height={height}</h2>
       <h2> Cat Width={width}</h2>
       <h2> Color code: rgb({red}, {green}, {blue})</h2>
    </div>


    <button onClick={enhanceHeight}>Enhance Height</button>
    <button onClick={enhanceWidth}>Enhance Width</button>
    <button onClick={reduceHeight}>Reduce Height</button>
    <button onClick={reduceWidth}>Reduce Width</button>
    <button onClick={reset}>Reset</button>
    <button onClick={changeBGColor}>ChangeBGColor</button>
    <button onClick={rotateCat}>RotateCat</button>
    <button onClick={marginL}>Margin left</button>
    <button onClick={marginT}>Margin top</button>
    <button onClick={marginR}>Margin right</button>
    </div>
  )
}

export default Imagemanipulation
