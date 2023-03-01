'use strict';

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.goOut = function() {
    console.log(`${this.name} с'єбав!`);
};

const andriy = new User('Andriy', 27);
const vazya = new User('Vasyl', 24);

vazya.goOut();

andriy.hello();
vazya.hello();

console.log(vazya);
console.log(andriy);