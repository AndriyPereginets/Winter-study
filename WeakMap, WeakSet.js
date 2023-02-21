'use strict';

let cashe = new WeakMap();

function casheUser (user) {
    if (!cashe.has(user)) {
        cashe.set(user, Date.now());
    }

    return cashe.get(user);
}





let Andriy = {name: 'Andriy'};
let Vazya = {name: 'Vasyl'};

casheUser(Andriy);
casheUser(Vazya);

Vazya = null;


console.log(cashe.has(Andriy));
console.log(cashe.has(Vazya));

/// WeakSet
/// add, has, delete

let massages = [
    {text: 'avadakedavra', from: 'Volan de Mort'},
    {text: 'Я живий', from: ' MC Пєтя'},
    {text: 'Rak', from: 'Cam'}
];

let readMassages = new WeakSet();

readMassages.add(massages[0]);
readMassages.add(massages[1]);

readMassages.add(massages[0]);

console.log(readMassages.has(massages[0]));