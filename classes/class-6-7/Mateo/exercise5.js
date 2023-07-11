/*
  Exercise: Calculate Percentage

  Write a function that takes two parameters: a percentage (in decimal form) and a number.
  The function should calculate and return the result of multiplying the percentage by the number.

  Example:
  Input: calculatePercentage(0.25, 80)
  Output: "The {25%} of 80 is 20"
*/

const calculatePercentage = (percentage, number) => {
  const result = percentage * number;
  return `The {${percentage * 100}%} of ${number} is ${result}`;
};

// console.log(calculatePercentage(0.25, 80));
// console.log(calculatePercentage(0.5, 100));
