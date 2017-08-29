var agg = (function () {
  var 
    index = 0,
    data = [1, 2, 3, 4, 5];
  return {
    next: function () {
      var element;
      if (!this.hasNext()) {
        return null;
      }
      element = data[index];
      index++;
      return element;
    },
    rewind: function () {
      index = 0;
    },
    current: function () {
      return data[index];
    },
    hasNext: function () {
      return index < data.length;
    }
  };
}());

while (agg.hasNext()) {
  console.log(agg.next());
}

agg.rewind();
console.log(agg.current()); // 1