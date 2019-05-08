// Q1. Create a variable called `denzel` - that can't be redeclared - and assign it the string 'please denzel, help me'
const denzel = 'please denzel, help me';
console.log(denzel);
//constants can't be redeclared

// Q2. Use the variable `actor` to create a new variable called `inspirational` that is assigned the string "Is Denzel Washington an inspirational actor?"
const actor = 'Denzel Washington';
const inspirational = "Is " + actor + " an inspirational actor?";
console.log(inspirational);

// Q3  Make an object called `family` and give it the following properties:
// family has been `married` on "1983" (Number)
// family is not `presidentOfTheUnitedStates` (boolean)
// family has `children` called "John David", "Katia", "Olivia" and "Malcolm" (array of strings)
const family = {
    'married': 1983,
    'presidentOfTheUnitedStates': false,
    'children': ['John David', 'Katia', 'Olivia', 'Malcolm']
};
console.log("Family has been married in " + family.married + " and has the children: " + family.children);

// Q4. Change
// * the `name` stage to "A Raisin in the Sun"
// * the `year` stage to "2014"
// using dot notation
const stage = {
  'name': 'Fences',
  'year': '2010'
};
stage.name = 'A Raisin in the Sun';
stage.year = '2014';
console.log(stage.name);

// Q5. Change the `movie` "glory" to "Training Day" using square bracket notation
const awards = {
  'movie': 'glory'
};
awards[0] = 'Training Day';
console.log(awards.movie);

// Q6. Create an object call "earlywork"
// The key should be the movie name and the value the release year
// Movies are
// * Carbon Copy (1981)
// * A Soldier Story (1984)
// * Power (1986)
// * Cry Freedom (1987)
// * For Queen and Countryy (1988)
const earlywork{
    'Carbon Copy': 1981,
    'A Soldier Story': 1984,
    'Power': 1986,
    'Cry Freedom': 1987,
    'For Queen and Countryy': 1988
}
console.log(earlywork.Power);

// Q7. Return a new array from `debaters` with all item in uppercase
const debaters = ['we do', 'what we have to do', 'in order to do', 'what we want to do'];
var uppercaseDebaters = debaters.map(item=> item.toUpperCase());
console.log(uppercaseDebaters);

// Q8. Using this array do the following
const directors = ['spikelee', 'ridleyscott', 'zemeckis'];

// 1. add "tonyscott" value to the end of `directors` array
var addedTony = directors.push('tonyscott');
console.log(addedTony);

// 2. remove "spikelee" value and store it in a variable called firstDirector
var firstDirector = directors.shift();

// 3. add "himself" value  to the start of `directors` array
var addedHimself = directors.unshift('himself');
console.log(addedHimself);

// 4. remove "ridleyscott" value from the array and store it in a variable called secondDirector
var secondDirector = directors.splice(pos, 1);

// 5. let 'zemeckis' in the array but put a copy of it on a variable called thirdDirector
var thirdDirector = directors[1];
console.log(firstDirector, secondDirector, thirdDirector);

// Q9. Write the function `duplicate` that return the expected result
function duplicate(array){
    var duplicatedArray = array.slice(0);
    duplicatedArray.concat(array);
    return duplicatedArray;
}
console.log(duplicate(['Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child']));
// ❯ ['Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child', 'Happily', 'Ever', 'After', 'Fairy', 'Tales', 'for', 'Every', 'Child']

// Q10. Refactor the current ES5-style function `police` in ES6-style.
const police = function (names) {
  const results = [];

  for (let i = 0; i < names.length; i++) {
    results.push(names[i] + 'I am the police');
  }
  return results;
};

const quotes = ['You will never see the light of... ', 'I run shit around here ', 'King Kong aint got shit on me '];

console.log(police(chorus));
 // ❯ ['You will never see the light of... I am the police', 'I run shit around here I am the police', 'King Kong aint got shit on me I am the police'];


// Q11. Related to the https://www.tvmaze.com/people/66167/denzel-washington link
// What's the query selector to get all Cast Credits titles (Live with Kelly & Ryan, The Late Show with Stephen Colbert...).

// Q12. Related to the https://www.tvmaze.com/people/66167/denzel-washington link
// How many http requests are performed to render the page?

// Q13. Related to the following api call with "curl"
// ❯ curl "http://api.tvmaze.com/people/6616"
// Could you describe and explain the response?

// Q14. Refactor the following codebase with a promise notation
fs.readFile(filePath, function(err, data) {
  if (err) {
    // handle the error, the return is important here
    // so execution stops here
    return console.log(err)
  }
  // use the data object
  console.log(data)
})

// Q15. Refactor the following codebase with async/await notation
fetch('http://api.tvmaze.com/search/people?q=denzel+washington')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const {person} = data[0];
    const {id} = person;

    return fetch(`http://api.tvmaze.com/people/${id}/castcredits?embed=show`);
  })
  .then(response => {
    return response.json();
  })
  .then(console.log);

// Q16. Give me at least 3 memorable websites that engage to continue (because of nice UX/UI AND avoid to give me facebook, airbnb etc...)

// Q17. Describe an ESILV project that you worked on that you’re proud of?

// Q18. Describe an ESILV project that you worked on that you’re not so proud of?

// Q19. What are some things you like about the developer tools you use?

// Q20. Last question: could you explain me - in your terms - why I decided to focus on Javascript Ecosystem for the Web Architecture(s) course?
