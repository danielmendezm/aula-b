/*
  Exercise: Reverse String

  Write a function that takes a string as input,
  reverses the order of its characters,
  and returns the reversed string.

  Example:
  Input: reverseString("Hello, world!")
  Output: "!dlrow ,olleH"

  Note: Dont use the split or reverse methods.
*/

const reverseString = (string) => {
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
};

// console.log(reverseString("Hello, world!"));
