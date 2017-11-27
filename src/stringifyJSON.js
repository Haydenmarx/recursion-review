// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // deal with array
  //if array stringifyJSON(obj[0])
  if (Array.isArray(obj)) {
    // var arrResults = '[' + 1 + 'cat' + true + ']';
    // for (var i = 0; i < obj.length; i++) {
      
    // }
    // return '[' + arrResults + ']';
    return '[' + obj.map(function(item) {
      return stringifyJSON(item);
    }) + ']';
  }
  // deal with objects

  // deal with primatives
  if (typeof obj === 'string') {
    return '"' + obj + '"'; 
  } else {
    return String(obj);
  }
};
