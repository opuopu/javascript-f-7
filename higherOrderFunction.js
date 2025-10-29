const summation = (x, y) => {
  const sum = x + y;
  return sum;
};

const substraction = (x, y) => {
  const sub = x - y;
  return sub;
};

//  receive a function as a parameter
//  return the function result
const calculator = (a, b, functions) => {
  console.log('this is calculator');
  return functions(a, b);
};

const sumResult = calculator(10, 20, summation);
const subResult = calculator(30, 15, substraction);
console.log(sumResult);
console.log(subResult);
