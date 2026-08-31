import React from 'react'
import pic from '../images/student.jpeg'

function ICard() {
  let a = 23;
let name = "Abhay";
let Roll_no = 2400320100017;
let Branch = "CSE";
let college = "ABESEC";
  return (
    <div>
      <img src={pic} height={200} width={200} style={{borderRadius:'50%'}}></img>
      <h2 style={{color:'red'}}>Welcome to React using vite</h2>
      <h1 style={{backgroundColor:'green'}}>Value of a ={a}</h1>
      <div style={{border:'10px solid red',height:'200px'}}>
        <h1 >Name : {name}</h1>
        <h1>Roll_no : {Roll_no}</h1>
        <h1>Branch : {Branch}</h1>
        <h1>college : {college}</h1>
      </div>
    </div>
  )
}

export default ICard
