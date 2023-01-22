function calculateVolumeAndArea(num) {  
    let area = [6 * (num * num)];
    let extent = [num * num * num];
    if (typeof num !== "number" || num < 0 || !Number.isInteger(num)) {
        console.log('При обрахунку відбулась помилка!');
    } else {
        console.log(`Об'єм куба: ${extent}, площа: ${area}`);
    }
   
}

calculateVolumeAndArea(5.5);


function getCoupeNumber(seatMumber) {
    if (typeof (seatMumber) !== 'number' || seatMumber < 0 || !Number.isInteger(seatMumber)) {
        console.log('Помилка');
    }

    if (seatMumber === 0 || seatMumber > 36) {
        console.log('Таких місць немає');
    }
    else {
        console.log(Math.ceil(seatMumber /4));
    }
} 

getCoupeNumber(30);


/* Задача 8.1 */

function getTimeFromMinute(time) {
    if (typeof (time) !== 'number' || time < 0 || !Number.isInteger(time)) {
        console.log('Помилка, перевірте дані');
    }
    const hours = Math.floor(time/60);
    const minute = time % 60;

    let hoursStr = '';

    switch (hours) {
        case 1:
            hoursStr = 'година';
            break;
         case 2:
         case 3:
         case 4:
            hoursStr = 'години';
            break;
        default:
            hoursStr = 'годин';
    
    }
    console.log(`Це ${hours} ${hoursStr} та ${minute} хвилин`);
    
    
}

getTimeFromMinute(560);


const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ua', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

/* function showExperience () {
    const {exp} = personalPlanPeter.skills;
    console.log(exp);
} */



/* showExperience(personalPlanPeter); */

/* function showProgramingLangs () {
   for (let dev in personalPlanPeter) {
    for ( let programs in personalPlanPeter[dev]) {
        console.log(programs);
    }
   }
}  */
function showProgramingLangs () {
    const a = personalPlanPeter.skills.programmingLangs.js,
    b = personalPlanPeter.skills.programmingLangs.php;
     console.log(a, b);
} 

showProgramingLangs();


const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr == '') {
        console.log('Семья пуста');
    }
    else {
        console.log(`Семья состоит из: ${arr}`);  
}
}

showFamily(family);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase()); 
    });
   
}
standardizeStrings(favoriteCities);

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        console.log('Помилка');
    }
    else
    {const reverse = Array.from(str).reverse().join('');
console.log(reverse); }
}

reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    for (let i = 0; i < arr.length; i++) {
             if (arr[i] === missingCurr) {
                continue;
            }
             str += `${arr[i]}\n`;
         }
        console.log(str);
    }


availableCurr([...baseCurrencies, ...additionalCurrencies], 'RUB');