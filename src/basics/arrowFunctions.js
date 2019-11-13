/* eslint-disable */

// Suivant le tutoriel vidéo : https://www.youtube.com/watch?v=h33Srr5J9nY&list=PLZlA0Gpn_vH-0FlQnruw2rd1HuiYJHHkm&index=3

// 1 - La fonction somme
// Les 3 formes ci-dessous sont equivalentes

function sum(a, b) {
    return a + b;
}

let sum2 = (a, b) => {
    return a + b;
}

let sum3 = (a, b) => a + b;

// 2 - La fonction isPositive
// Les 3 formes ci-dessous sont equivalentes

function isPositive(a) {
    return a >= 0;
}

let isPositive2 = (a) => {
    return a >= 0;
}

let isPositive3 = (a) => a >= 0;
let isPositive4 = a => a >= 0;

// 3 - Generer un nombre aléatoire
// Les 2 formes ci-dessous sont equivalentes

function randomNumner() {
    return Math.random();
}

let randomNumner2 = () => Math.random;

// 4 - Placer une fonction anonyme dans un evenement
// Les 2 formes ci-dessous sont equivalentes

document.addEventListener('click', () => {
    console.log('Click');
  });

document.addEventListener('click', () => console.log('Click'));
    
