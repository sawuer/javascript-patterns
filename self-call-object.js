// Self calling object
({
	maxwidth: 600,
	maxheight: 300,
	getSum: function() {
		console.log(this.maxwidth + this.maxheight);
	},
	init: function() {
		window.thisObject = this; // access to this object
		this.getSum();
	}
}).init();