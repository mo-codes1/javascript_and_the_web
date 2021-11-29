const addNewPost = (title) => {
  const newInput = document.createElement('div');
  const newDiv = document.querySelectorAll('.post').length + 1;

  newInput.innerText = title
  newInput.className = 'post'
  newInput.id = 'post-' + newDiv;
  document.body.appendChild(newInput);
}

module.exports = addNewPost