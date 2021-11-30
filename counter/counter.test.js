/**
 * @jest-environment jsdom
 */


test('increments the value after clicking button', () => {

  document.body.innerHTML = ` <div>
  <span id="counter">0</span>
  <button id="inc-button">Increment</button>
  </div>`

  require('./index')

  const button = document.querySelector('#inc-button')
  button.click();
  
  expect(document.querySelector('#counter').innerText).toBe(1);

});