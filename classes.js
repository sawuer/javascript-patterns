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


console.clear();




// Doug Crockford class ----------------------- //
if (typeof Function.prototype.method !== 'function') {
  Function.prototype.method = function(name, exec) {
    this.prototype[name] = exec;
    return this;
  };
}

var User5 = function(name) {
	this.name = name;
}
User5.method('getName', function() {
	console.log(this.name);
	return this;
})
User5.method('setName', function(name) {
	this.name = name;
	return this;
});

var user5 = new User5('Sowyer');

user5.getName().setName('Ramona').getName();
// End: Doug Crockford class ----------------------- //

console.clear();



// Chain
var SomeClass = function(name, age) {
	if (!(this instanceof SomeClass)) {
		throw new Error('You can not create object without new');
	}
	this.name = name;
	this.age = age;
};

SomeClass.prototype = {
	getInfo: function() {
		console.log(this.name, this.age);
		return this;
	},
	changeName: function(newName) {
		this.name = newName;
		return this;
	},
	changeAge: function(newAge) {
		this.age = newAge;
		return this;
	}
};

var sc = new SomeClass('Sowyer', 23);
sc.getInfo().changeName('Ramona').getInfo().changeAge(54).getInfo();



var SomeClass2 = function(name, age) {
	SomeClass.call(this, name, age);
}
SomeClass2.prototype = Object.create(SomeClass.prototype);
SomeClass.prototype.constructor = SomeClass2;


var sc2 = new SomeClass2('Linker', 24);
sc2.getInfo().changeAge(34).getInfo().changeName('Gwen').getInfo();




var object1 = {
	name: this.name,
	age: this.age,
	getInfo: function() {
		console.log(this.name, this.age);
	}
}



var object2 = Object.create(object1);
object2.name = 'Sowyer';
object2.age = 23;
object2.getInfo();




var constructor = function(spec, my) {
	var that;
	my = my || {};
	that = new object;
	return that;
}


'bitwise'; // Запрещает битовые операции


// for (name in object) {
// 	if (object.hasOwnProperty(name)) {
// 	}
// }


console.clear();









