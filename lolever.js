window.lolever = (function () {
	var lolever = {
		//Check if the value or int only contains numbers
		isNumeric: function(string) {
			var regex = /^[0-9]+$/;
			return regex.test(string);
		},
		//Check if the value is only alphabetic
		isAlphabetic: function(string) {
			var regex = /^[a-zA-ZæøåäöÆØÅÄÖ]+$/;
			return regex.test(string);
		},
		//Check if the value is an valid email address.
		isEmail: function(string) {
			var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			return regex.test(string);
		},
		//Check if the value is integer
		isInt: function(int) {
			return int === parseInt(int);
		},
		//Check of the value is float
		isFloat: function(float) {
			return typeof(float)==="number" && !this.isInt(float); 
		},
		//Check if the value is an object
		isObject: function(object) {
			return toString.call(object) === '[object Object]';
		},
		//Check if the value is an array
		isArray: function(object) {
			return toString.call(object) === '[object Array]';
		},
		//Check if the value is a string
		isString: function(string) {
			return typeof(string) === 'string';
		},
		//Check if string is bigger than min length and smaller than max length
		stringLength: function(string, min, max) {
			return ((string.length < min || string.length > max) ? false : true);
		},
		//Check if array is bigger than min length and smaller than max length (actually calls the stringLength-function)
		arrayLength: function(array, min, max) {
			return this.stringLength(array, min, max);
		},
		//Get size of object
		getObjectSize: function(object) {
			var count = 0;
			for (var i in object) {
				object.hasOwnProperty(i) && count++
			}
			return count;
		},
		//Check if object is bigger than min size and smaller than max size
		objectSize: function(object, min, max) {
			return ((this.getObjectSize(object) < min || this.getObjectSize(object) > max) ? false : true);
		},
		//Get type of object, thanks to Angus Croll (read more at: https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/)
		getType: function(object) {
  			return ({}).toString.call(object).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
		}
	};
	return lolever;
}());
