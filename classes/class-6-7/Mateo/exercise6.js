/*
  Real-Time Clock

  This code creates a clock that displays the current time in HH:mm:ss format,
  updating every second.

  Example:
  Output: 10:45:20
*/

const clock = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  console.log(`${hours}:${minutes}:${seconds}`);
};

// console.log(clock());
