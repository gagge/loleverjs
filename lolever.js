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
	  }
	};
	return lolever;
}());
