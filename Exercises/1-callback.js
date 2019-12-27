'use strict';

const iterate = (obj, callback) => {
  for (const key of Object.keys(obj)) {
    callback(key, obj[key], obj);
  }
  // the solution was too short
};


module.exports = { iterate };
