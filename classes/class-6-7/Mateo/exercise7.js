/*
  Find Highest and Lowest Values

  This code takes an array of numbers as input and returns an object
  containing the highest and lowest values found within the array.

  Example:
  Input: [5, 2, 8, 1, 9]
  Output: { highestValue: 9, lowestValue: 1 }
*/

const findHighestAndLowestValues = (numbers) => {
  let highestValue = numbers[0];
  let lowestValue = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > highestValue) {
      highestValue = numbers[i];
    }
    if (numbers[i] < lowestValue) {
      lowestValue = numbers[i];
    }
  }
  return { highestValue, lowestValue };
};

// console.log(findHighestAndLowestValues([5, 2, 8, 1, 9]));
// console.log(findHighestAndLowestValues([5, 2, 8, 1, 9, 10, 0, -1]));
// console.log(findHighestAndLowestValues([5, 2, 8, 1, 9, 10, 0, -1, 10]));
