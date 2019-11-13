/* eslint-disable */

// ===== VAR =====
// est modifiable à l'interieur d'un sous bloc

var x1 = 1;

if (x1 === 1) {
  var x1 = 2;
  console.log(x1 + ' => expected output: 2');
}

console.log(x1 + ' => expected output: 2');


// ===== LET =====
// est propre au bloc dans lequel elle est definie

let x2 = 1;

if (x2 === 1) {
  let x2 = 2;
  console.log(x2 + ' => expected output: 2 (à l\'interieur du bloc)');
}

console.log(x2 + ' => expected output: 1 (à l\'exterieur du bloc)');


// ===== CONST =====
// N'est pas modifiable après déclaration
const x3 = 42;

try {
  x3 = 99;
} catch(err) {
  console.log(err);
}

console.log(x3 + ' => expected output: 42');


// UNDEFINED, UNDECLARED & NULL

// 1 - UNDECLARED - Variable qui n'existe pas
console.log(undeclaredVar);

// 2 - UNDEFINED - Variable declaree mais non assignée à une valeur
let undefinedVar;
console.log(undefinedVar);

// 3 - NULL - Variable assigée à la valeur null
let nullVar = null;
console.log(nullVar);
