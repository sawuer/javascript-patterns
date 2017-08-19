// Via constructor ----------------------- //
function User1(name, age) {
	this.name = name;
	this.age = age;
}
User1.prototype.getInfo = function() {
	console.log(this.name, this.age);
}

var user1 = new User1('Sowyer', 21);
user1.getInfo();
// End: Via constructor ----------------------- //






// Via constructor and module ----------------------- //
var User2 = (function() {
	function constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	constructor.prototype = {
		getInfo: function() {
			console.log(this.name, this.age);
		}
	}
	return constructor;
}());

var user2 = new User2('Sowyer', 21);
user2.getInfo();
// End: Via constructor and module ----------------------- //






// Via constructor, module, and function createInstance ----------------------- //
function createInstance(someClass, conf) {
	return Object.create(someClass).constructor(conf);
}

var User3 = {
	constructor: function(conf) {
		this.name = conf.name;
		this.age = conf.age;
		return this;
	},
	getInfo: function() {
		console.log(this.name, this.age);
	}
}

var user3 = createInstance(User3, {
	name: 'Sowyer',
	age: 21
});

user3.getInfo();
// End: Via constructor, module, and function createInstance ----------------------- //






// Via native class ----------------------- //
class User4 {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	getInfo() {
		console.log(this.name, this.age);
	}
}

var user4 = new User4('Sowyer', 21);
user4.getInfo();
// End: Via native class ----------------------- //


















