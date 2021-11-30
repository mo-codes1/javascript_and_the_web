/**
 * @jest-environment jsdom
 */

const { test, expect } = require('@jest/globals');


test('displays a post', () => {
  document.body.innerHTML = `<button id="add-post-btn">Add post</button>
    <div class="post" id="post-1">
      A first post
    </div>
    <div class="post" id="post-2">
      A second post
    </div>
    <div class="post" id="post-3">
      A third post
    </div>`;

  require('./index')
  const button = document.querySelector("#add-post-btn")
  button.click()
  
  expect(document.querySelectorAll('.post').length).toBe(4)

});