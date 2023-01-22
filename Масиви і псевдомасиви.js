'use strict';

const arr = [18, 12, 23, 16 ,8];
arr.sort(compareNum);
console.log(arr);

function compareNum (a,b) {
    return a - b;
}


/* arr[99] = 0;
console.log(arr.length);
console.log(arr); */ /* - порушення логіки масиву, додаємо значення а length рахує від останнього +1, відповідно виходить 100 */

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} всередині масива ${arr}`);
});

arr.pop(); /* - pop метод який видаляє останній елемент з масиву */

arr.push(10); /* - добавляє елемент в кінець масиву */



/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}  */

/* for (let znachennia of arr) {
    console.log(znachennia);
} */

/* const str = prompt("", "");
const products = str.split(",");
products.sort();
console.log(products.join(';')); */