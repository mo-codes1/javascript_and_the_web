const addNewPost = require('./addNewPost');


const button = document.querySelector("#add-post-btn");
const text = document.querySelector('#add-text');


 button.addEventListener("click", ()=>{
   const newinput = text.value;
   addNewPost(newinput);

 })