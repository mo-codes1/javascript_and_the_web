(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // add.js
  var require_add = __commonJS({
    "add.js"(exports, module) {
      module.exports = (a, b) => {
        return a + b;
      };
    }
  });

  // multiply.js
  var require_multiply = __commonJS({
    "multiply.js"(exports, module) {
      module.exports = (a, b) => {
        return a * b;
      };
    }
  });

  // index.js
  var add = require_add();
  var multiply = require_multiply();
  console.log(multiply(add(10, 2), 10));
})();
