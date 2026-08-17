//console.log("Hello,World ! This  is the FSDCSE122026 Module ");
//console.log("Using JS")
// let a = 34;
// if(a>10){
//     let a =40;
//     console.log("Hi a inside the block:"+a);
// }
// console.log("Heyy.. a is now outside the block:"+a)
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(230,30))
// const sum = (a,b)=>{return a+b};
// console.log(sum(12,30));
// const data = function(msg){
//     return "Hello, i m using JS" +msg
// }
// console.log(data("and Node"))


//IIFE
//(()=>{console.log("Hey ..using and calling by IIFE")})();


//callback
// function sum(a,b){
//     return a+b;
// }
// function sumWithMsg(clbk,msg){
//      const result = clbk(10,6);
//      console.log("Hey , Your result : "+result+",  well Done  "+msg);
     
// }
// sumWithMsg(sum,"Abhay")

// function login(msg,error){

// if(error){
//     console.log("Error is:"+error);
// }
// else{
//     console.log(msg);
// }
// }
// function loginhandler(username,password,clbk){
//     if(username =="admin" && password=="12345"){
//         clbk("login successful",null);
//     }
//     else{
//         clbk(null,"username or password is incorrect")
//     }
// }
// loginhandler("abhay","12345",login)
// console.log("one")
// setTimeout(()=>{
//     console.log("Two")
// },1000)
// console.log("Three")
// setTimeout(()=>{
//     console.log("One")
//     setTimeout(()=>{
//         console.log("Two")
   
//     setTimeout(()=>{
//         console.log("Three")
    
//     setTimeout(()=>{
//         console.log("Four")
   
//     setTimeout(()=>{
//         console.log("Five")
//     setTimeout(()=>{
//         console.log("Six")
//          },1000)
//     },1000)
//     },1000)
//      },1000)
//       },1000)
// },1000)


// const loginPromise = new Promise((resolve, reject) => {
//     const username = "abhay";
//     const password = "12345";

//     if (username === "abhay" && password === "12345") {
//         resolve("Login Successful");
//     } else {
//         reject("Invalid Username or Password");
//     }
// });

// const coursePromise = new Promise((resolve, reject) => {
//     const courseAvailable = true;

//     if (courseAvailable) {
//         resolve("Course: B.Tech CSE");
//     } else {
//         reject("Course Not Found");
//     }
// });
//  async function handleData(){
//     try{
        
//                const msg =  await myPromise;
//                console.log(msg)
                
//     }catch(err){
//         console.log(err)
//     }
//     finally{
//         console.log("All Done")
//     }
// }
// handleData();

// async function handleData() {
//     try {
//         const login = await loginPromise;
//         console.log(login);

//         const course = await coursePromise;
//         console.log(course);

//         console.log("Welcome Abhay!");

//     } catch (error) {
//         console.log("Error:", error);
//     } finally {
//         console.log("All Done");
//     }
// }

// handleData();
const button=document.getElementById('btn');
const container=document.getElementById('container');
 const loading= document.createElement('div');
 container.appendChild(loading);

async function fetchData(){
                try{
               loading.innerHTML="<h2>Loading Data...</h2>";
const serverData=await fetch('https://fakestoreapi.com/products')
const jsonData= await serverData.json();
console.log(jsonData)
           // container.innerHTML=`${JSON.stringify(jsonData)}` //template string${}

           let table = `<table border ='4px' >
           <tr> <td>IMAGE</td><td>ITEM_ID</td>
            <td>TITLE</td>
            <td>PRICE</td> </tr>
          ${
            jsonData.map((ele)=>(
                `<tr>
                <td><img src =${ele.image} height  = "100px" width ="100px" alt ='Cloth'/></td>
                <td>${ele.id}</td>
                <td>${ele.title}</td>
                <td>${ele.price}</td>
                </tr>`
            ))
          }

           </table>`
           container.innerHTML = table;
            
        
        }catch(e){
             loading.innerHTML='<h2>Loading Error</h2>'
        }
        finally{
             loading.innerHTML=''
        }

        }

button.addEventListener('click',fetchData)