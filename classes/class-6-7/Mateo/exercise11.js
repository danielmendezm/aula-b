/*
  Find Most Common Character

  This function takes a text string as input and returns the most commonly used character.

  Example:
  Input: findMostCommonCharacter('Hello, World!')
  Output: 'l'
*/

const findMostCommonCharacter = (text) => {
  text = text.toLowerCase();
  const characters = {};
  for (let i = 0; i < text.length; i++) {
    if (characters[text[i]]) {
      characters[text[i]]++;
    } else {
      characters[text[i]] = 1;
    }
  }
  let mostCommonCharacter = text[0];
  for (let character in characters) {
    if (characters[character] > characters[mostCommonCharacter]) {
      mostCommonCharacter = character;
    }
  }
  return mostCommonCharacter;
};

// console.log(findMostCommonCharacter("Hello, World!"));
// console.log(findMostCommonCharacter("Hello, WorLd!"));
