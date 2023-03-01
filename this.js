'use strict';

/* 1) */ function useThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}

useThis(4, 5); /* 1 */

/* 2) */ const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
    }
};

obj.sum(); //2)


//3)
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    }

const andriy = new User('Andriy', 27); //3)

//4) 
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const someone = {
    name: 'Bob'
};

sayName.call(someone, ' Boroshok');
sayName.apply(someone,  [' Pereginets']);

//4
function count(num) {
    return this*num;
}

const double = count.bind(2);

console.log(double(3));
console.log(double(18)); //4

// 1) Звичайна функція: this - буде window, якщо використовувати use strict  то буде udefined
// 2) Контекст у методів об'єкта - сам ою'єкт
// 3) this в конструкторах і класах це новий екземпляр о'бєкта (особливо запам'ятати)!
// 4) ручна прив'язка this


const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    this.style.backgroundColor = 'red';
});

const adada = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
        }; 

    say();

    }
};

adada.sayNumber();

const duo = a => a * 2; // Стрілкова функція скорочує код, якщо вміщується в одну лінійку то можна без душок
/// та return, також якщо атрибут один можна не ставити дужки (a)
console.log(duo(4));







