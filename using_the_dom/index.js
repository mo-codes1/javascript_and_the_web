const addNewPost = require('./addNewPost');
const button = document.querySelector("#add-post-btn")

 button.addEventListener("click", ()=>{
     addNewPost("A fourth post");

 })