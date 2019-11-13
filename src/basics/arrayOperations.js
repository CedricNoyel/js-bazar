
const DATA = [
  { id: 1, name: 'Jean', money: 500.0 },
  { id: 2, name: 'Benoit', money: 100.0 },
  { id: 3, name: 'Thomas', money: 0.0 },
  { id: 4, name: 'Theo', money: 12500 },
  { id: 5, name: 'Maxime', money: 10.3 },
];

// 1 - FOREACH
// Display values
DATA.forEach((person) => {
  console.log(person);
});

// 2 - MAP
// Create a new array with returned values from map function
const personNames = DATA.map((person) => person.name);
console.log(personNames);

// 3 - FILTER
// Filter names by first letter
const personFiltered = DATA.filter((person) => person.name[0] === 'T');
console.log(personFiltered);

// 4 - REDUCE
// Accumulate values from array (startValue = 0)
const acc = DATA.reduce((sumMoney, person) => sumMoney + person.money, 0);
console.log(`Total money: ${acc} €`);

// 5 - SOME
// Check if elem is in array (return => true/false)
const isSomeoneNamedJean = DATA.some((person) => person.name === 'Jean');
console.log(`isJeanHere = ${isSomeoneNamedJean}`);

// 6 - EVERY
// Check condition for every elem in array (return => true/false)
const hasEveryoneMoney = DATA.every((person) => person.money > 0);
console.log(`hasEveryoneMoney = ${hasEveryoneMoney}`);

// 7 - SORT
// Create a new array sorted by money
// personA will be before personB if personA has less money than personB
const dataSortedByMoney = DATA.sort((personA, personB) => personA.money - personB.money);
console.log(dataSortedByMoney);

// 8 - FIND
// Return the first person found for the condition
// for exemple here first person with money > 423€
const persona = DATA.find((person) => person.money >= 423);
console.log(persona);
