// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:




var stringifyJSON = function(obj) {
  var stringify = function(item) {
    
    
    
    
    
    
    
    
  };
};



var stringifyJSON = function(obj) {
  // your code goes here
  // deal with array
  //if array stringifyJSON(obj[0])
  // "[" + x , y , z + "]"
  console.log(obj);
  if (Array.isArray(obj)) { 
    // return '[' + arrResults + ']';
    return '[' + obj.map(function(item) {
      return stringifyJSON(item);
    }) + ']';
  }
  if (typeof obj === 'object' && obj !== null) {
    var objResults = Object.keys(obj);
    // var thing = '{' + objResults.map(function(prop) {
    //   if (typeof prop !== 'undefined' && 
    //       prop !== undefined && 
    //       typeof obj[prop] !== 'undefined' && 
    //       obj[prop] !== undefined && 
    //       typeof prop !== 'function' && 
    //       typeof obj[prop] !== 'function') {
    //     return stringifyJSON(prop) + ':' + stringifyJSON(obj[prop]);
    //   } else {
    //     return;
    //   }
    // }) + '}'; 
    
    var test = objResults.map(function(prop) {
      if (typeof prop !== 'undefined' && 
          prop !== undefined && 
          typeof obj[prop] !== 'undefined' && 
          obj[prop] !== undefined && 
          typeof prop !== 'function' && 
          typeof obj[prop] !== 'function') {
        return stringifyJSON(prop) + ':' + stringifyJSON(obj[prop]);
      } else {
        return;
      }
    }); 
    console.log(' x ', test);
    if (test.length > 0) {
      test = test.reduce(function(x) {
        if (x !== 'undefined') {
          return x;
        }
      });
    }
    console.log(' y ', test);
    return '{' + test + '}';
    // return thing;
  }

  // deal with primatives
  if (typeof obj === 'string') {
    return '"' + obj + '"'; 
  } else {
    return String(obj);
  }
};