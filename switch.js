const number = 1;

// if (number == 1) {
//   console.log('Today is Sunday');
// } else if (number == 2) {
//   console.log('Today is Monday');
// } else if (number == 3) {
//   console.log('Today is Tuesday');
// } else if (number == 4) {
//   console.log('Today is Wednesday');
// } else {
//   console.log('Today is not Sunday, Monday, Tuesday, Wednesday');
// }

switch (number) {
  case 1:
    console.log('Today is Sunday');
    break;
  case 2:
    console.log('today is monday');
    break;
  case 3:
    console.log('Today is Tuesday');
    break;
  case 4:
  case 5:
    console.log('Today is Wednesday');
    break;

  default:
    console.log('Today is not Sunday, Monday, Tuesday, Wednesday');
}
