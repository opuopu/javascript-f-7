// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);
// console.log(11);
// console.log(12);
// console.log(13);
// console.log(14);
// console.log(15);
// console.log(16);
// console.log(17);
// console.log(18);
// console.log(19);
// console.log(20);

// let x = 0;
// x++;
// x++;
// x++;
//  for loop
// for (let x = 0; x <= 10; x++) {
//   console.log(x);
// }

const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];

// // console.log(fruits.length);
// const size = fruits.length;
// for (let i = 0; i < size; i++) {
//   console.log(fruits[i]);
// }

// const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let summation = 1;
// for (let i = 0; i < numbers.length; i++) {
//   summation = summation * numbers[i];
// }

// console.log(summation);

const students = [
  { name: 'Alice', age: 20, salary: 5000 },
  { name: 'Bob', age: 22, salary: 6000 },
  { name: 'Charlie', age: 19, salary: 7000 },
  { name: 'David', age: 21, salary: 8000 },
  { name: 'Eve', age: 23, salary: 9000 },
];
let totalAge = 0;
let totalSalary = 0;
for (let i = 0; i < students.length; i++) {
  totalAge = totalAge + students[i].age;
  totalSalary = totalSalary + students[i].salary;
}
console.log(totalAge);
console.log(totalSalary);
