//console.log("hello")
const root = document.getElementById('container')
const button =document.getElementById('btn')
console.log(root+button)
const h2 = document.createElement('h2');
h2.innerHTML = 'Resume Builder';
const loader = document.createElement('h1')
root.appendChild(loader);
const img = document.createElement('img');
const name = document.createElement('name');
function buildResume(){
    try{
        loader.innerHTML = 'Building...'
        img.src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5MzwpePG1N9kfTexgxJrnNoa2hEBXGBos_bW9Agh32Q&s=10';
        img.setAttribute('height',100);
        img.setAttribute('width',100);
        root.appendChild(img);
        root.appendChild(h2);
    }catch(e){
        console.log(e)
        loader.innerHTML = 'Error in building resume'
    }
    finally{
        root.removeChild(loader);
    }
  //  root.appendChild(h2);
//alert("hello...");
}
button.addEventListener('click',buildResume);