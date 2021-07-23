/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array
 * an array of objects
 * each object contains at least two properties(quote and source) 
***/
const quotes = [
  {quote: 'Life is what happens when you\'re busy making other plans', source: 'John Lennon', tags: 'Facts of Life'},
  {quote: 'If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough.', source: 'Oprah Winfrey', tags: 'Facts of Life'},
  {quote: 'You will face many defeats in life, but never let yourself be defeated.', source: 'Maya Angelou', tags: 'Facts of Life'},
  {quote: 'Never let the fear of striking out keep you from playing the game.', source: 'Babe Ruth', tags: 'Advice'},
  {quote: 'I have decided to stick with love. . . . Hate is too great a burden to bear.', source: 'Martin Luther King Jr', citation: "Where Do We Go From Here?", year: '1967'}
];

/***
 * `getRandomQuote` function
 * generate a random number between 0 and the index of the last item in the quotes array(4)
 * returns the quote object from the quotes array whose index is equal to that random number
***/

function getRandomQuote(quoteArr) {
  let randomIndex = Math.floor(Math.random() * quoteArr.length);
  let quoteObj = quoteArr[randomIndex];
  return quoteObj;
}

/***
 * `printQuote` function
 * accesses a random quote from the quotes array 
 * uses string interpulation to grow htmlString with information from the quotes array
 * returns the completed htmlString and prints it to the browser
***/

let htmlString = '';

function printQuote() {
  let randomQuoteObj = getRandomQuote(quotes);
  
  htmlString = `<p class="quote">${randomQuoteObj.quote}</p>
  <p class="source">${randomQuoteObj.source}`;
  
  if (randomQuoteObj.citation !== undefined ) {
    htmlString += `<span class="citation">${randomQuoteObj.citation}</span>`;
  }

  if (randomQuoteObj.year !== undefined ) {
    htmlString += `<span class="year">${randomQuoteObj.year}</span>`;
  }
  
  if (randomQuoteObj.tags !== undefined ) {
    htmlString += `<span class="tags"> #${randomQuoteObj.tags }</span>`;
  }

  htmlString += '</p>';
  
  return document.getElementById('quote-box').innerHTML = htmlString;
}

let red;
let green;
let blue;

function colorChange() {
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  
  let randomRGB = `rgb(${red}, ${green}, ${blue})`;
  return document.body.style.backgroundColor = randomRGB;
}

document.getElementById('load-quote').addEventListener("click", colorChange, false);
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);