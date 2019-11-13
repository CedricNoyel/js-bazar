/* eslint-disable */

// 1 - Promesse simple

const p = new Promise((resolve, reject) => {
  const a = 2;
  if (a === 2) {
    resolve('Success');
  } else {
    reject(new Error('something bad happened'));
  }
});

p.then((message) => {
  console.log(`then message : ${message}`);
}).catch((message) => {
  console.log(`catch message : ${message}`);
});


// 2 - Promesses multiples

const recordVideoOne = new Promise((resolve, reject) => {
  resolve('recordVideoOne done');
});

const recordVideoTwo = new Promise((resolve, _reject) => {
  resolve('recordVideoTwo done');
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('recordVideoThree done');
});

// Promise.all - Executes toutes les promesses passées en paramètre
Promise.all([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree,
]).then((message) => {
  console.log(`Promises.all : ${message}`);
});

// Promise.race - Execute le then une fois qu'une des promesses est exécutée
Promise.race([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((message) => {
  console.log(`Promises.race : ${message}`);
});