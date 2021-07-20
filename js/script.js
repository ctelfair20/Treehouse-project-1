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
  {quote: 'Life is what happens when you\'re busy making other plans', source: 'John Lennon'},
  {quote: 'If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough.', source: 'Oprah Winfrey'},
  {quote: 'You will face many defeats in life, but never let yourself be defeated.', source: 'Maya Angelou'},
  {quote: 'Never let the fear of striking out keep you from playing the game.', source: 'Babe Ruth'},
  {quote: 'I have decided to stick with love. . . . Hate is too great a burden to bear.', source: 'Martin Luther King Jr', citation: "Where Do We Go From Here?", year: '1967'}
];


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

let htmlString = ''

function printQuote (quoteArr) {
  let randomQuoteObj = getRandomQuote(quoteArr);
  console.log(randomQuoteObj);
  htmlString = `<p class="quote">${randomQuoteObj.quote}</p>
  <pclass="source">${randomQuoteObj.source}`

  if (randomQuoteObj.citation !== undefined ) {
    htmlString += `<span class="citation">${randomQuoteObj.citation}</span>`
  }

  if (randomQuoteObj.year !== undefined ) {
    htmlString += `<span class="year">${randomQuoteObj.year}</span>`
  }

  htmlString += '</p>';
  console.log(htmlString);
}

console.log(printQuote(quotes));

document.getElementById('quote-box').innerHTML = htmlString; 
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);