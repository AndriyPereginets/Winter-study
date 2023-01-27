'use strict';


const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
 arr.sort();
const mainArray = [];
let juniorArray = [];

arr.forEach((item) => {
  juniorArray.push(item); 
  if (juniorArray.length === 3) {
    mainArray.push(juniorArray);
    juniorArray = [];
  }
});

if (juniorArray.length > 0) {
  mainArray.push('The rest of the students: ' + juniorArray.join(', '));
} 
console.log(mainArray);
}

sortStudentsByGroups(students);

