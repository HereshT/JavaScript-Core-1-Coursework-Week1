// Add comments to explain what this function does. You're meant to use Google!

//  the output is what the function returns, which is Math.random() * 10; _ random method class Math = The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, then * 10 and it could be a number < 10 && >0  

function getRandomNumber() {
  return Math.random() * 10; 
}
 
// Add comments to explain what this function does. You're meant to use Google!
// The concat() method concatenates the string arguments to the calling string and returns a new string. in this case the two argument will be joined without any space in between
function combine2Words(word1, word2) {
  return word1.concat(word2);
}



function concatenate(firstWord, secondWord, thirdWord) {
  return firstWord.concat(` ${secondWord} ${thirdWord}`);
  

  // Write the body of this function to concatenate three words together.
  // Look at the test case below to understand what this function is expected to return.
}
console.log(concatenate("code" , "your", "future"));
  
/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====

There are some Tests in this file that will help you work out if your code is working.

To run the tests for just this one file, type `npm test -- --testPathPattern 3-function-output` into your terminal
(Reminder: You must have run `npm install` one time before this will work!)
==================================
*/

test("concatenate example #1", () => {
  expect(concatenate("code", "your", "future")).toEqual("code your future");
});

test("concatenate example #2", () => {
  expect(concatenate("I", "like", "pizza")).toEqual("I like pizza");
});

test("concatenate doesn't only accept strings", () => {
  expect(concatenate("I", "am", 13)).toEqual("I am 13");
});
