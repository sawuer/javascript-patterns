(function () {
  var
    astr = “[object Array]”,
    toString = Object.prototype.toString;
  function isArray(a) {
    return toString.call(a) === astr;
  }
  function indexOf(haystack, needle) {
    var i = 0,
      max = haystack.length;
    for (; i < max; i += 1) {
      if (haystack[i] === needle) {
        return i;
      } 
    }
    return ­1; 
  }
  myarray = {
    isArray: isArray,

    // two similar methods
    indexOf: indexOf,
    inArray: indexOf
  };
}());
