/*
  Exercise: Multiplication Table

  Write a function that takes a number as input and returns its complete multiplication table.

  Example:
  Input: 5
  Output:
  
  5 x 1 = 5
  5 x 2 = 10
  5 x 3 = 15
  ...
  5 x 10 = 50
*/

const multiplicationTable = (number) => {
  const table = [];
  for (let i = 1; i <= 10; i++) {
    table.push(`${number} x ${i} = ${number * i}`);
  }
  return table;
};

// console.log(multiplicationTable(5));
