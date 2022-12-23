 //Let's display our answers into the HTML Document:
 const answer1 = document.querySelector('.answer-1');

 
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

  console.table(fifteen);
//Next, work on displaying the array in the HTML doc:
  // answer1.innerHTML = (`The answer is: ${fifteen}`);