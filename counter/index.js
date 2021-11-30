const button = document.querySelector('#inc-button');
let counter = 0

button.addEventListener('click', () => {
const element = document.querySelector('#counter');
counter += 1
element.innerText = counter ;
});