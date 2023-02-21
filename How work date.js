'use strict';

/* const now = new Date(); */
/* new Date.parse('2023-02-21');


console.log(now.setHours(20));
console.log(now);

console.log(now.getTime());
console.log(now.getTimezoneOffset());
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getMonth());
console.log(now.getDay()); */

let start = new Date();

for (let i = 0; i < 100000, i++;) {
    let some = i ** 3;
}

let end = new Date();

alert(`'Цикл відпрацював за${end - start} мм`);