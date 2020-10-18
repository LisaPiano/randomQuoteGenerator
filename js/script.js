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
//Below is an array of objects containing quotes, sources, citations, years and tags
var quotes = 
[
  {
    quote: 'You are what you eat',
    source: 'Anthelme Brillat-Savarin',
    citation: 'Physiologie du Gout, ou Medetations de Gastronomie Transcendante',
    year: '1826', 
    tag: 'general'
  }, 
  {
    quote: 'I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.', 
    source: 'Maya Angelou', 
    citation: 'Interview for Beautifully Said Magazine', 
    year: '2012',
    tag: 'general'
  },
  { 
    quote: 'Wenn ich des Tages nicht dreimal Mein Schälchen Coffee trinken darf, so werd ich ja zu meiner Qual wie ein verdorrtes Ziegenbrätchen." Translation: If I can\'t drink my little bowl of coffee three times a day, then I\'ll be like a piece of dried-up goat meat in my misery.', 
    source: 'Johann Sebastian Bach', 
    citation: 'The coffee cantata---Schweigt stille, plaudert nicht (Be still, stop chattering), BWV 211',
    year: '1732, 1735',
    tag: 'music'
  },  
  {
    quote: 'Without music life would be a mistake.', 
    source: 'Frederic Neitzche', 
    citation: 'Twighlight of the Idols', 
    year: '1889',
    tag: 'music'
  },  
  {
    quote: 'My music is best understood by children and animals.', 
    source: 'Igor Stravinsky', 
    citation: 'The Observer', 
    year: '1961',
    tag: 'music'
  },
  {
    quote: 'The trouble with you and me, Ned, is that we want everyone in the world to personally love us, and of course that\'s impossible; you just don\'t meet everyone in the world.', 
    source: 'Leonard Bernstein', 
    citation: 'From Ned Rorem, Paris Diary', 
    year: '1996',
    tag: 'music'
  }, 
  {
    quote: 'I think it\'s really tragic when people get serious about stuff. It\'s such an absurdity to take anything really seriously … I make an honest attempt not to take anything seriously: I worked that attitude out about the time I was eighteen, I mean, what does it all mean when you get right down to it, what\'s the story here? Being alive is so weird.', 
    source: 'Frank Zappa', 
    citation: 'As quoted in No Commercial Potential : The Saga of Frank Zappa', 
    year: '1972',
    tag: 'music'
  },  
  {
    quote: 'If I could express the same thing with words as with music, I would, of course, use a verbal expression. Music is something autonomous and much richer. Music begins where the possibilities of language end. That is why I write music.', 
    source: 'Johan Sibelius', 
    citation: 'Interview with Berlingske Tidende', 
    year: '1919',
    tag: 'music'
  },
  {
    quote: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',  
    source: 'Albert Einstein',
    tag: 'humor'
  },
  {
    quote:  'Before you criticize someone, walk a mile in their shoes. That way, you\'ll be a mile from them, and you\'ll have their shoes.', 
    source: 'Jack Handey',
    tag: 'humor'
  }
  ]
/***
 * `getRandomQuote` function
***/
//Declare variable i outside of function
let i; 

//create a function that generates a rondom number (i) that spans from 0 to array.length.
//This generates a random quote.
function getRandomQuote(array)
{
  i = Math.floor(Math.random() * array.length)
  return quotes[i]; 
}

/***
 * `printQuote` function
***/
//construct a function, printQuote, that uses the getRandomQuote function to print
//out the quote, source, citation and year of the quote
function printQuote()
{
  getRandomQuote(quotes); 
  let sentence1  = quotes[i]. quote; 
  let sentence2 = quotes[i]. source; 
  let sentence3 = quotes[i]. citation; 
  let sentence4 = quotes[i]. year; 
  let sentence5 = quotes[i].tag; 
  
  
  //assign the variable, output, to a string that first includes the quote, 
  //and then increments the source
  let output = `<p class = 'quote'> ${sentence1}`;
  output += `<p class = 'source'> ${sentence2}`;

  //If the object contains a citation, increment the output string to include the citation
  if (sentence3)
  {
    output +=  `<span class = 'citation'> ${sentence3}</span>`;
  }
  //if the object contains a year, increment the output string to include the year
  if (sentence4)
  {
    output +=  `<span class = 'year'>${sentence4}</span>`;
  }
  //if the object contains a tag, increment the output string to include the tag
  if (sentence5)
  {
    output += `<span class = 'year'>${sentence5}</span>`;
  }
  `</p>`;
  


  //print out the output string to the innerHTML
  document.getElementById('quote-box').innerHTML = `${output}`; 


  /***
   * click event listener for the print quote button
   * DO NOT CHANGE THE CODE BELOW!!
  ***/

  document.getElementById('load-quote').addEventListener("click", printQuote, false);
  
  //here is code that will change the background color every time the printQuote() function is called
  const randomColor = 
  Math.floor(Math.random() * 16777215).toString(16); 
  document.body.style.backgroundColor = "#" + randomColor; 
  randomColor.innerHTML = "#" + randomColor;
}//This is the end of the printQuote function

//call the printQuote function
printQuote(); 

//call the printQUote function every 10 seconds. I learned this from the Javascript setInterval() topic ofr programiz.com
setInterval(printQuote, 10000);


