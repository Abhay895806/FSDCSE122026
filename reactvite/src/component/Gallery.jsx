import React from 'react'
import ICard from './ICard'

function Gallery() {
    const student =[
     {
        pic : "https://i.pinimg.com/736x/0e/1b/49/0e1b4984c22ff810051677b8c7a29e7d.jpg",
        name: "Abhay",
        rollNo: "2400320100017",
        branch: "CSE",
        college: "ABESEC"
    },
    {
        pic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1m5vwsldcfts0T41-js8uRacAjd73sGg-lxNmgqLiow&s=10",
        name: "John",
        rollNo: "2400320100018",
        branch: "CSE",
        college: "ABESEC"
    },
    {
        pic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlqNGV3KC0s8JNadvSyp4MSdk3rm5XFYz56lpIsmAgEw&s=10",
        name: "Jane",
        rollNo: "2400320100019",
        branch: "CSE",
        college: "ABESEC"
    },
    {
        pic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNrxqnKlUm-VJoFpyBJUTk4mFQ8X8UyAJamGS_wK6E6w&s=10",
        name: "Doe",
        rollNo: "2400320100020",
        branch: "CSE",
        college: "ABESEC"
    }];
  return (
    <div style ={{border:'2px solid red', display:'flex'}}>
      {
      student.map((ele) => (
        <ICard data={ele}></ICard>  
      ))
      }

    </div>
  )
}

export default Gallery
