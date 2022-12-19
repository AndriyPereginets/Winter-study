"use strict";

/* const obj = {
    name: "Jonh",
    age:25,
    isMarried: false
};
console.log(obj.age);

let arr = ['plum.png', 6, [],];
console.log(arr[1]);

const America = ['South America', 'North America', 'Mexico'];
console.log(America[2]);  */

/* console.log('arr' + " - object");
console.log(4 + "5");

let incr = 10,
    decr = 10;

/* incr++;
decr--; */

/* console.log(++incr);
console.log(--decr);

console.log(5%2);

console.log(2*4 == 8); */
 
/* && - І
|| - або */

let numberOfFilms = +prompt ('Скільки фільмів ви вже переглянули','');

 const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
 };


    for (let i = 0; i < 2; i++) {
        const a = prompt('Один з останнії переглянутих фільмів?',''),
              b = prompt('На скільки оцінюєте його','');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;  
            console.log('done'); 
        } else {
            console.log('error');
            i--;
        }                 
    }

    if (personalMovieDB.count < 10) {
        console.log("Переглянуто мало фільмів!");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Класичний переглядач");
    } else if (personalMovieDB.count >= 30) {
        console.log("Ви єбаний кіноман!!!!");
    } else {
        console.log("Помилка");
    }


    console.log(personalMovieDB);



  /*  let num = 50; */

  /*  while (num <= 55) {
        console.log(num);
        num++;
   } */

/* do {
    console.log(num);
    num++;
}
while (num <= 55);

for (let i = 1; i < 10; i++) {
    if (i ===6) {
        break;
    }
    console.log(i);
}

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i);
} */

/* for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
} */

/* let result = '';
const leghth = 7;

for (let i = 1; i < leghth; i++) {
    for (let j = 0; j < i; j++) {
        result += "*";
    }

    result += '\n';
}
 console.log(result);


 first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
            for (let k = 0; k < 3; k++) {
                if (k === 2) break first;
                 console.log(`Third level: ${k}`);
            }
        }
    }


    for (let i = 5; i <=10; i++) {
    console.log(i);
    }

    for (let i = 20; i >= 10; i--) {
        if (i === 13) {
            break;}
        console.log(i);
    }

    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 1) {
            continue;
        } 
             console.log(i);
        }
       

        for (let i = 2; i <= 10; i++) {
            if (i ===3) {
                continue;
            }
            if (i ===5) {
                continue;
            }
            if (i ===7) {
                continue;
            }
            if (i ===9) {
                continue;
            }
                 console.log(i);
            }




    

    for (let i = 2; i <= 16; i++) {
        if (i % 2 === 0) {
            continue;
        } else {
            console.log(i);
        }
    }


    let i = 2;
    while (i < 16) {
            i++;
        if (i % 2 === 0) {
            continue;
        } 
       console.log(i);      
    }
   

    const Numbers = [];

    for (let i = 5; i < 11; i++) {
        Numbers[i - 5] = i;
    }

    console.log(Numbers);
    return(Numbers); */


    let i = [1, 2, 3, 4,];
    for (let a of i) {
        console.log(a);
    } 

 let num = 20;
 function showFirstMessage(text) {
    console.log(text);
    num = 10;
    }
 
 showFirstMessage("Hello kitty!");
 console.log(num);

/*  function calc(a, b) {
    return (a + b);
 }

 console.log(calc(4, 3));
 console.log(calc(5, 3));
 console.log(calc(10, 2));
 console.log(calc(6, 8)); */

 function ret() {
    let num = 50;
    return num;
 }

 const anotherNum = ret();
 console.log(anotherNum);

const logger = function() {
    console.log('Hello!');
}

logger();

const calc = (a, b) => {
    console.log('1');
    return a + b;
};

const uahCurs = 3;
const usdCurs =38;
const eurCurs =45;

function converter(amout, Curs) {
    console.log(Curs * amout);
}

converter(500, usdCurs);
converter(500, uahCurs);
converter(500, eurCurs);

