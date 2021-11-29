//changing the content of the first div to 'A first post refreshed by JavaScript'.

document.getElementById("post-1").innerHTML = "A first post refreshed by JavaScript"

//Define a function getPostContents that returns an array containing the three string contents inside the three <div> elements:

const getPostsContents = () => {
  return [document.querySelectorAll('div')];

}

//Define a function addNewPost that takes one argument (the post title) and adds a new <div> element on the page, writing the 
//received argument as the new content. Calling the following should make the HTML change (you can verify this in the "Elements" 
//console tab — and see the new div added on the page too).

const addNewPost = (title) => {
  const newInput = document.createElement('div');
  const newDiv = document.querySelectorAll('.post').length + 1;

  newInput.innerText = title
  newInput.className = 'post'
  newInput.id = 'post-' + newDiv;
  document.body.appendChild(newInput);
}

