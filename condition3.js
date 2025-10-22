const bangla = 30;
const english = 20;
const math = 10;

// if (bangla >= 80) {
//   if (english >= 80) {
//     if (math >= 80) {
//       console.log('A+');
//     } else {
//       console.log('A');
//     }
//   } else {
//     console.log('Try again');
//   }
// } else {
//   console.log('Try again');
// }

if (bangla >= 80 || english >= 80 || math >= 80) {
  console.log('A+');
} else {
  console.log('Try again');
}

const person = {
  name: 'John',
  age: 10,
  isStudent: true,
  address: 'dhaka',
};

// if (person.isStudent || person.age >= 20 || person.address === 'dhaka') {
//   console.log('student');
// } else {
//   console.log('not a student');
// }

//  &&
// ||
