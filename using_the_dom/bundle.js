(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // addNewPost.js
  var require_addNewPost = __commonJS({
    "addNewPost.js"(exports, module) {
      var addNewPost2 = (title) => {
        const newInput = document.createElement("div");
        const newDiv = document.querySelectorAll(".post").length + 1;
        newInput.innerText = title;
        newInput.className = "post";
        newInput.id = "post-" + newDiv;
        document.body.appendChild(newInput);
      };
      module.exports = addNewPost2;
    }
  });

  // index.js
  var addNewPost = require_addNewPost();
  addNewPost("A fourth post");
})();
