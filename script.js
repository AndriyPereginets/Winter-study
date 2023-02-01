'use strict';

/* const box = document.getElementById('box');

console.log(box);

const buttons = document.getElementsByTagName('button')[1];

console.log(buttons);

const circles = document.getElementsByClassName('circle');
console.log(circles [2]);
 // Якщо не звертатись до елементу в доку буде масив, з яким хуй шо зробиш!

const hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart); */

const   box = document.getElementById('box'),
        buttons = document.getElementsByTagName('button'),
        circles = document.getElementsByClassName('circle'),
        hearts = document.querySelectorAll('.heart'),
        oneHeart = document.querySelector('.heart'),
        wrapper = document.querySelector('wrapper');

/* box.style.backgroundColor = 'blue';
box.style.width = '500px'; */

box.style.cssText = 'background-color: blue; width: 500px';

buttons[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

/* for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'green';
} */

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
/* const text = document.createTextNode('Im here!'); */
div.classList.add('black');

 document.body.append(div);

/* document.querySelector('wrapper').append(div); */

/* wrapper.prepend(div); */

/* hearts[0].before(div); */
/* hearts[0].after(div); */

/* circles[0].remove(); */

/* hearts[0].replaceWith(circles[0]); */

div.innerHTML = '<h1>Hello World!</h1>';

/* div.textContent = 'Hello'; */

div.insertAdjacentHTML('beforebegin','<h2>Hello</h2>');

