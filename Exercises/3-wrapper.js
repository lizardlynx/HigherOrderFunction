'use strict';

const contract = (fn, ...types) => (...args) => {
  let res = 0;
  for (let i = 0; i <= args.length; i++) {
    if (i === args.length) {
      res = fn(...args);
      if (typeof res !== typeof types[i](0)) {
        throw new TypeError('wrong type of result');
      }
      return res;
    }
    if (typeof args[i] !== typeof types[i](0)) {
      throw new TypeError('There are wrong types you used!!!');
    }
  }
};

module.exports = { contract };
