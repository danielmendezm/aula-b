/*
  Fibonacci Sequence

  Write a function that generates the Fibonacci sequence up to a given number of terms. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding numbers.

  Example:
  Input: 8
  Output: [0, 1, 1, 2, 3, 5, 8, 13]
*/

const fibonacciSequence = (number) => {
  const sequence = [0, 1];
  for (let i = 2; i < number; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
};

// console.log(fibonacciSequence(8));
// console.log(fibonacciSequence(10));
// console.log(fibonacciSequence(12));
