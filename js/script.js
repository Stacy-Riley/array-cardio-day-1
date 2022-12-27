 //Let's display our answers into the HTML Document:
 const answer1 = document.querySelector('.answer-1');
 const answer2 = document.querySelector('.answer-2');
 const answer3 = document.querySelector('.answer-3');
 const answer4 = document.querySelector('.answer-4');
 const answer5 = document.querySelector('.answer-5');
 const answer6 = document.querySelector('.answer-6');
 const answer7 = document.querySelector('.answer-7');
 const answer8 = document.querySelector('.answer-8');

 
 //Some data we can work with:
 const inventors = [
  {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
  {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
  {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
  {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
  {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
  {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
  {first: 'Max', last: 'Planck', year: 1858, passed: 1947}
 ];

 const people = [
  'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Nick','Beecher, Henry',
  'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 
  'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
  'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas',
  'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
  'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi',
  'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken',
  'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
  'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'
 ];

//  Array.prototype.filter()
// 1. Filter the list of inventors from those who were born in the 1500's.
  const fifteen = inventors.filter(function(inventor){
    if(inventor.year >= 1500 && inventor.year < 1600){
      return true; // this means that we keep it!
    } 
  });
  // console.table(fifteen);

//Next, display the array in the HTML doc:
  const filterOutput = JSON.stringify(fifteen);
  answer1.innerHTML = `The answer is: <br> ${filterOutput}`;

  ///////////////////////////////////////////////////////////////////////

  //Array.prototype.map() - map will always return the same amount of items that you give it:
  //2. Give us an array of the inventors' first and last names
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
// console.log(fullNames);

//Display inside HTML doc:
const mappedData = fullNames.join(", ")
answer2.innerHTML = `The answer is: <br> ${mappedData}`;

///////////////////////////////////////////////////////////////////////

  //Array.prototype.sort()
  //3. Sort the inventors by birthdate, oldest to youngest
  const ordered = inventors.sort(function(personA, personB){
    if(personA.year > personB.year){
      return 1; //by assigning a 1 or -1 it will bubble the names up/down until completed in numerical order
    } else {
      return -1;
    }
  })

  //Example of arrow function with implicit return for same code as above:
  // const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

  // console.table(ordered);

  //Display inside HTML doc:
  const filteredOrder = JSON.stringify(ordered)
  answer3.innerHTML = `The answer is: <br> ${filteredOrder}`

///////////////////////////////////////////////////////////////////////
//Array.prototype.reduce()
//4. How many years did all the inventors live?
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0); //the "0" is to give total a starting point so it doesn't show undefined

// console.log(totalYears);

//Display inside HTML doc:
answer4.innerHTML = `The answer is: ${totalYears} years`;

///////////////////////////////////////////////////////////////////////
//Array.prototype.sort()
//5. Sort the inventors by years lived
const oldest = inventors.sort(function(a, b) {
  const longestLived = a.passed - a.year;
  const nextLongestLived = b.passed - b.year;

  if(longestLived > nextLongestLived) {
    return -1;
  } else {
    return 1
  }
})
//in place of the if statement: return longestLived > nextLongestLived ? -1 : 1;
console.log(oldest);

//Display inside HTML doc:
const oldestResults = JSON.stringify(oldest);
answer5.innerHTML = `The answer is: <br> ${oldestResults}`;

///////////////////////////////////////////////////////////////////////
//Array.prototype.sort()
// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name.
//https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
