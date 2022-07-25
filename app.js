/*
Q. write a javascript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100.
*/

const checkNumbers = function (a, b) {
  // 1--check the numbers are 100 or not? if it is 100 then return true or else return

  if (a === 100 || b === 100 || a + b === 100) {
    return true;
  } else {
    return false;
  }
};

// console.log(checkNumbers(100, 50));

/*
Q. write a javascript program to get the extension of a file name?
*/

const lastFileName = (str) => str.slice(str.lastIndexOf("."));
// console.log(lastFileName("wejorjoar.app"));
//

/*
Q. Write a javascript program to replace every character in a given string with the character following it in the alphabet.
*/

const moveCharsForward = (str) =>
  str
    .split("")
    .map((char, i) => String.fromCharCode(char.charCodeAt(0) - 1))
    .join("");

// console.log(moveCharsForward("what"));

/*
Q. Write a JavaScript Program to get the current date.
Expected Output:

   mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

*/

const today = new Date();

// console.log(year, month, day);

const formatDate = (date = new Date()) => {
  // console.log(date);
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  // console.log(`${month}-${day}-${year}`);
  // console.log(`${month}/${day}/${year}`);
  // console.log(`${day}-${month}-${year}`);
  // console.log(`${day}/${month}/${year}`);
};

formatDate();
