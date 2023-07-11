/*
  Count Loops in a Number

  This code takes a number as input and counts the number of loops it has.
  A number has a loop when it forms a closed circle when drawn, such as the number 6.

  Example:
  Input: 0
  Output: 1

  Input: 6
  Output: 1

  Input: 8
  Output: 2

  Input: 9
  Output: 1

  Input: 8680
  Output: 3
*/

const countLoopsInNumber = (number) => {
  const digits = number.toString().split("");
  let count = 0;
  for (let i = 0; i < digits.length; i++) {
    if (
      digits[i] === "0" ||
      digits[i] === "6" ||
      digits[i] === "8" ||
      digits[i] === "9"
    ) {
      count++;
    }
    if (digits[i] === "8") {
      count++;
    }
  }
  return count;
};

// console.log(countLoopsInNumber(0));
// console.log(countLoopsInNumber(6));
// console.log(countLoopsInNumber(8));
// console.log(countLoopsInNumber(8680));
