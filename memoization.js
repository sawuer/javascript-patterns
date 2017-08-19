var myFunc = function(param) {
  if (!myFunc.cache[param]) {
	  var result = {};
	  	// some operations
  	  myFunc.cache[param] = result;
	}
  return myFunc.cache[param];
};

// Container of results
myFunc.cache = {};
myFunc(2);
myFunc(3);
myFunc(10);
myFunc(4);
console.log(myFunc.cache)
