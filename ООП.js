'use strict';

let str = 'some';
let strOnbj = new String(str);

console.log(typeof(str));
console.log(typeof(strOnbj));

const spaceMarrine = {
    health: 500,
    armor: 250,
    mana: 50,
       battleRoar: function () {
            console.log('for the Imperator!');
        }
};

const fallenAngel = Object.create(spaceMarrine);

/* Object.setPrototypeOf(fallenAngel, spaceMarrine); */

fallenAngel.battleRoar();





