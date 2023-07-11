/*
  Check Email

  This function takes an email address as input and returns true if the email is valid,
  and false otherwise.

  Example:
  Input: checkEmailValidity('john@example.com')
  Output: true
*/

const checkEmailValidity = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
};

// console.log(checkEmailValidity("john@examplecom"));
// console.log(checkEmailValidity("john@example.com"));
