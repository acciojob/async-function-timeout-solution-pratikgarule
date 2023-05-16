const text = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

//your code here
 function showMessage() {
    const message = text.value;
    const delayVal = delay.value; 
  setTimeout (() =>{
    givingValue();
   },delayVal ) 
  
   async function givingValue (){
    await showMessage();
    output.innerHTML = message;
   }
  
}

btn.addEventListener("click", showMessage);