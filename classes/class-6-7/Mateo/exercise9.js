/*
  Find Most Common Hobbies

  This code takes an array of objects as input, where each object represents a user with their hobbies.
  It must returns the count of each hobby as an object.

  Example:
  Input: [{ user: "Daniel", aficiones: ["Futbol", "Baseball", "Basketball"] }]
  Output: { Futbol: 1, Baseball: 1, Basketball: 1 }
*/

// Please use the following array of objects as input for the function:

const users = [
  { user: "Daniel", aficiones: ["Futbol", "Baseball", "Basketball"] },
  { user: "Sara", aficiones: ["Futbol", "Volleyball", "Tennis"] },
  { user: "John", aficiones: ["Baseball", "Basketball", "Swimming"] },
  { user: "Emily", aficiones: ["Basketball", "Tennis", "Soccer"] },
  { user: "David", aficiones: ["Volleyball", "Soccer", "Swimming"] },
  { user: "Anna", aficiones: ["Futbol", "Tennis", "Swimming"] },
];

const findMostCommonHobbies = (users) => {
  const hobbies = {};
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users[i].aficiones.length; j++) {
      if (hobbies[users[i].aficiones[j]]) {
        hobbies[users[i].aficiones[j]]++;
      } else {
        hobbies[users[i].aficiones[j]] = 1;
      }
    }
  }
  return hobbies;
};

// console.log(findMostCommonHobbies(users));
