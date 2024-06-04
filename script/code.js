
const numbers = [5, 10, 15, 20, 25, 30];

// numbers.forEach((number, index) => {
//   console.log(number);

//   if (index < numbers.length - 1) {
//     console.log('Next num:', numbers[index + 1]);
//   }
// });
/*
- recursive function
- 
define a counter = 0
function that will 
*/

let index = 0;

function ArrayRecur(count) {
  if (count == numbers.length) {
    return

  }else{
    const currentNumber = numbers[count];
    console.log(currentNumber);
    ArrayRecur(count + 1); 
  }
}

ArrayRecur(0);