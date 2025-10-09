let student1 = {
  bangla: 80,
  english: 90,
  math: 100,
  science: 85,
};

let student2 = {
  bangla: 70,
  english: 60,
  math: 75,
  science: 100,
  name: 'john doe',
  isPassed: true,
};

let student3 = {};

//  way 1 using dot .
//  way 2 using bracket []
// console.log(student1['bangla'], student2.bangla);
// console.log(student3);

let person = {
  name: 'John',
  age: 30,
  city: 'New York',
};

let personDetails = person.city + ' ' + person.name + ' ' + person.age;
console.log(personDetails);
