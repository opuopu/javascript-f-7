const greet = callback => {
  console.log('hello from greet');
  return callback();
};

const afterGreet = () => {
  console.log('hello from after greeting');
};

greet(afterGreet);
