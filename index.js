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

const mypromise = new Promise((resolve,reject)=>
{
const username = "abhay";
const password = "12345";
if(username =="abhay"&& password =="12345"){
    resolve("success");
}else{
    reject("username or password incorrect")
}
})
// mypromise.then((msg)=>{
//     console.log(msg)
// }).catch((msg)=>{
//     console.log(msg)
// }).finally(()=>{
//     console.log("All done")
// })
 async function handleData(){
    try{
        
               const msg =  await mypromise;
               console.log(msg)
                
    }catch(err){
        console.log(err)
    }
    finally{
        console.log("All Done")
    }
}
handleData();