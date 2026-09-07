import React from 'react'
import pic from '../images/student.jpeg'

function ICard({data}) {
//   let a = 23;
// let name = "Abhay";
// let Roll_no = 2400320100017;
// let Branch = "CSE";
// let college = "ABESEC";
  return (
    <div>
      <div style={{border:'2px solid red',height:'500px'}}>
      <img src={data.pic} height={200} width={200} style={{borderRadius:'50%'}}></img>
      {/* <h2 style={{color:'red'}}>Welcome to React using vite</h2> */}
      {/* <h1 style={{backgroundColor:'green'}}>Value of a ={a}</h1> */}
      
        <h2>Name : {data.name}</h2>
        <h2>Roll_no : {data.rollNo}</h2>
        <h2>Branch : {data.branch}</h2>
        <h2>college : {data.college}</h2>
      </div>
    </div>
  )
}

export default ICard
