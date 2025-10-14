const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// checkign javascript array or not
// console.log(Array.isArray(array1));

//  sorting an array
const unsortedArray = [3, 6, 8, 2, 1, 2, 3, 4, 6, 7, 8];
unsortedArray.sort();
// console.log(unsortedArray);

// sorting a string type array
const stringArray = ['banana', 'apple', 'orange', 'mango', 'kiwi', 'grape'];
// stringArray.sort();
// console.log(stringArray);

// object type array
const students = [
  { name: 'alice', age: 25 },
  { name: 'bob', age: 22 },
  { name: 'charlie', age: 23 },
  { name: 'david', age: 24 },
];

const totalAge =
  students[0].age + students[1].age + students[2].age + students[3].age;

// array reverse

stringArray.reverse();
// console.log(stringArray);

// array concatination
const parents1 = ['alice', 'bob'];
const parents2 = ['charlie', 'david'];
const parents3 = ['eva', 'frank'];
console.log(parents1, parents2, parents3);
const concat = parents2.concat(parents1, parents3);
console.log(concat);
