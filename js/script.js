/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {quote: 'Life is what happens when you\'re busy making other plans', author: 'John Lennon'},
  {quote: 'If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough.', author: 'Oprah Winfrey'},
  {quote: 'You will face many defeats in life, but never let yourself be defeated.', author: 'Maya Angelou'},
  {quote: 'Never let the fear of striking out keep you from playing the game.', author: 'Babe Ruth'},
  {quote: 'I have decided to stick with love. . . . Hate is too great a burden to bear.', author: 'Martin Luther King Jr', citation: "Where Do We Go From Here?", year: '1967'}
];

console.log(quotes);

/***
 * `getRandomQuote` function
***/

function getRandomQuote (quoteArr) {
  let randomNum = Math.floor(Math.random() * quoteArr.length);
  console.log(`randomNum is: ${randomNum}`);
  return quoteArr[randomNum];
}

console.log(getRandomQuote(quotes));

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// document.getElementById('load-quote').addEventListener("click", printQuote, false);