'use strict';

// To String

//1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2)

console.log(typeof(5 + '')); // При складанні з string завжди буде string

// To Number
//1)
console.log(typeof(Number('4')));

//2)
console.log(typeof(+'5'));
console.log(typeof(parseInt('15px', 10)));

let answer = +prompt('Hello', '');

// To boolean

//0, '', null, undefined, NaN - завжди false
//1)

let swircher = null;

if (swircher) {
    console.log('Working...');
}

swircher = 1;
if (swircher) {
    console.log('Working...');
}

//2)
console.log(typeof(Boolean('4')));

//3) !!
console.log(typeof(!!'4444'));