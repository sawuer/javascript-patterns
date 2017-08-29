function Universe() {
  if (!(this instanceof Universe)) {
    throw new Error('Function-constructor Universe cannot be invoked without "new"');
  }
  var instance;
  Universe = function Universe() {
    return instance;
  };
  Universe.prototype = this;
  instance = new Universe();
  instance.constructor = Universe;

  this.start_time = 0;
  this.bang = 'Big';
  
  return instance;
}


// проверка
var uni = new Universe();
var uni2 = new Universe();

console.log(uni)
console.log(uni2)

uni.some = 10;

console.log(uni)
console.log(uni2)
