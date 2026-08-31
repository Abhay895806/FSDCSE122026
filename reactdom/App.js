//console.log("hello")
const container = document.getElementById('container');
//console.log(root);
const root = ReactDOM.createRoot(container);
const h2 = React.createElement('h2',{},'Welcome to React JS')
const h1 = React.createElement('h1',{},"Working on React DOM");
const img =React.createElement('img',{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGdEEHf1iLxl6NTfXIsBTJLAFV7rY2Khie2YRQiKjfw7NebN-M2KkcxhM&s=10",style:{height:'200',width:'200'}});
const div = React.createElement('div',{},img,h1,h2);
root.render(h2);