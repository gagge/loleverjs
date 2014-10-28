loleverjs
=========

Low Level Verifier

Lolever is a small javascript library which help you to determine if some stuff is true or false without any data bindings to html inputs or similiar.
I have the intentions to keep the project small and simple. 

#### Usage 

##### Numbers

	lolever.isNumeric(300);
	//returns true

	lolever.isNumeric('Probably false');
	//returns false

##### Alphabetic Characters

	lolever.isAlphabetic('Abc');
	//returns true

	lolever.isAlphabetic(1337);
	//returns false

##### Emails

	lolever.isEmail('smith@examples.com');
	//returns true

	lolever.isEmail('john@example');
	//returns false

##### Integers

	lolever.isInt(1337);
	//returns true

	lolever.isInt('1337');
	//returns false

##### Objects

	var object = {};
	lolever.isObject(object);
	//returns true

	var array = [];
	lolever.isObject(array);
	//returns false

##### Arrays

	var array = [];
	lolever.isArray(array);
	//returns true

	var object = {};
	lolever.isArray(object);
	//returns false

##### Strings

	lolever.isString('string');
	//returns true

	lolever.isString(1337);
	//returns false



#### MIT License

Copyright © 2014 Tobias Johnsson &lt;gagges@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
