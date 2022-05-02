
/*When the user clicks this button, the website turns into dark mode */
/*written with W3 schools*/
function darkMode() {
  var toggleBody = document.body;
  toggleBody.classList.toggle("dark-mode");
}

/*These are the functions that will handle the quotes */
//database of famous quotes
var quotes = null;

//quote object
function Quote(type, quote, source) {
  (this.type = type),
    (this.quote = quote),
    (this.source = source),
    (this.debug = function () {
      return this.type + " " + this.quote + " " + this.source;
    });
}
/* JSON quotes, updated with my own favorite quotes */
function getAllQuotes() {
  let quotesJSON =
    '{ "quotes" : [' +
    '{ "type":"Famous People" , "quote":"Sometimes it is the people no one can imagine anything of who do the things no one can imagine." , "source":"Alan Turing" },' +
    '{ "type":"Video Game" , "quote":"We don\'t get to choose how we start in this life. Real greatness is what you do with the hand you\'re dealt." , "source":"Victor Sullivan (Uncharted)" },' +
    '{ "type":"Video Game" , "quote":"Sic Parvis Magna (Greatness from small beginnings)" , "source":"Uncharted" },' +
    '{ "type":"Famous People" , "quote":"Failure is an option here. If things are not failing, you are not innovating enough." , "source":"Elon Musk" },' +
    '{ "type":"TV Show" , "quote":"It\'s not about who you\'ve been with, it\'s about who you end up with. Sometimes the heart doesn\'t know what it wants until it finds what it wants." , "source":"Pam Halpert (The Office)" },' +
    '{ "type":"Famous People" , "quote":"If you can\'t explain it simply, you don\'t understand it well enough." , "source":"Albert Einstein" },' +
    '{ "type":"Biblical" , "quote":"Do unto others as you would have them do unto you. Luke 6:31" , "source":"The Lord and Savior" },' +
    '{ "type":"Movie" , "quote":"Dread it, run from it, destiny still arrives." , "source":"Thanos (Avengers Infinity War)" },' +
    '{ "type":"Biblical" , "quote":"Love suffers long and is kind. It is not proud. Love bears all things. Believes all things, hopes all things, and endures all things. Love never fails." , "source":" I Corinthians 13: 4, 7-8" },' +
    '{ "type":"Famous People" , "quote":"The further society drifts from the truth, the more it will hate those who speak it" , "source":"George Orwell" }' +
    ']}';

  quotes = JSON.parse(quotesJSON).quotes;
}

/* This function gets the next quote, randomly */
function getNextQuote() {
  //create random number and get the quote
  let random = Math.floor(Math.random() * quotes.length);

  //create quote object
  let quote = new Quote(
    quotes[random].type,
    quotes[random].quote,
    quotes[random].source
  );

  //update UI with new quote object
  updateUI(quote);
}

/* This function updates the user interface */
function updateUI(quote) {
  //populate quote type, quote itself, and quote source on UI page elements
  type.innerText = quote.type;
  quotation.innerText = quote.quote;
  source.innerText = quote.source;
}
