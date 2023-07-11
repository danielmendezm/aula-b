/*
  Exercise: Word Count

  Write a function that takes a word and a sentence as input,
  and returns the number of times the word appears in the sentence.

  Example:
  Input: wordCount("apple", "I have an apple and an orange, but I prefer an apple.")
  Output: 2
*/

const wordCount = (word, sentence) => {
  const words = sentence.split(" ");
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    const cleanedWord = words[i].replace(/[.,]/g, "");
    if (cleanedWord === word) {
      count++;
    }
  }
  return count;
};

// console.log(
//   wordCount("apple", "I have an apple and an orange, but I prefer an apple.")
// );
// console.log(
//   wordCount("orange", "I have an apple and an orange, but I prefer an apple.")
// );
