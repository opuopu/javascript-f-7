// function fname() {
//   console.log('Hello, World!');
//   console.log('This is a sample function.');
// }

// function summation() {
//   let a = 5;
//   let b = 10;
//   console.log('The sum is: ' + (a + b));
// }

// fname();
// summation();

// function summation() {
//   let a = 5;
//   let b = 10;
//   console.log(a + b);
// }

// function substraction() {
//   let a = 15;
//   let b = 5;
//   console.log(a - b);
// }

// function multipilcation() {
//   let a = 5;
//   let b = 10;
//   console.log(a * b);
// }

// summation();
// multipilcation();
// substraction();
// const a = 10;
// const b = 20;
// const c = 30;
// const d = 20;
// const e = 100;

// const sum = a + b;
// const sum2 = c + d;
// const sum3 = d + e;
// console.log('The total sum is: ' + sum);
// console.log('The total sum2 is: ' + sum2);
// console.log('The total sum3 is: ' + sum3);

// function summation(x1, x2, x3, x4, x5) {
//   const sum = x1 + x2 + x3 + x4 + x5;
//   console.log('The sum is: ' + sum);
// }

// summation(20, 30, 50, 100, 200);
// summation(30, 30);

// summation(100, 200);
// summation(5, 15);
// summation(7, 8);
// summation(50, 70);
const person = {
  name: 'John',
  age: 30,
  city: 'New York',
};
const person2 = {
  name: 'John',
  age: 30,
  city: 'New York',
};
function arrayofObjects(object, object2, x) {
  console.log(object.city, object2.age + x);
}

// arrayofObjects(person, person2, 10);

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const array2 = [5, 15, 25, 35, 45];
function arraySum(array) {
  let summation = 0;
  for (let i = 0; i < array.length; i++) {
    summation += array[i];
  }
  return summation;
}

// function substraction(array) {
//   let result = 0;
//   for (let i = 0; i < array.length; i++) {
//     result = result - array[i];
//   }
//   console.log(result);
// }
const result1 = arraySum(arr);
const result2 = arraySum(array2);
const substraction = result1 - result2;
console.log(substraction);
// substraction(arr);
// substraction(array2);
