"use strict"

function alert(message) {
	console.log(message);
}

function makeBuffer() {
	let strings = '';

	return {
		add : function(value) {
			if (isNaN(value)) {
				strings = strings + value + ' ';
			} else {
				strings += value;
			}
		},
		print : function() {
			return strings;
		},
		clear : function() {
			strings = '';
		}
	}
}

let buffer = makeBuffer();

buffer.add('JavaScript');
buffer.add('Вчити');
buffer.add('Потрібно!');

console.log(buffer.print());

let buffer1 = makeBuffer();

buffer1.add(0);
buffer1.add(1);
buffer1.add(0);

console.log(buffer1.print());

var buffer3 = makeBuffer();

buffer3.add("Тест");
buffer3.add("тебе не з'їсть");
alert(buffer3.print());

buffer3.clear ();

alert(buffer3.print()); 