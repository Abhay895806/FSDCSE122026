// console.log("Hello ")

const container = document.getElementById('container')

const root = ReactDOM.createRoot(container)

// const h2 = React.createElement('h2',{style:{color:'red'}},'Welcome to React JS')
// const h1 = React.createElement('h1',{},'Working On React JS')

// const img = React.createElement('img',{src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGdEEHf1iLxl6NTfXIsBTJLAFV7rY2Khie2YRQiKjfw7NebN-M2KkcxhM&s=10',style :{height :'200',width:'200'}})
// const h11 = <h1>Hello Using Babel </h1>
// const div =React.createElement('div',{},img,h1,h2) 

const h1 =  <h1>Welcom To React.. </h1>
const img = <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGdEEHf1iLxl6NTfXIsBTJLAFV7rY2Khie2YRQiKjfw7NebN-M2KkcxhM&s=10' height={200} width={200}></img>
 const div = <div>{h1}{img}</div>
const h3 = <h3>Resume Builder</h3>
const div1 =
 <>
 <div>

    
    {h3}
    {div}

    </div>
 </>

root.render(div1);