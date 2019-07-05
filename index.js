const readline = require('readline');

const clc = require('./utils/color');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const sp = '\x1b7';
const rp = '\x1b8';
const cl = '\x1b[H\x1b[2J';


console.log(cl);
console.log(sp);
console.log('=>', 1);
console.log('=>', 2);
console.log('=>', 3);
console.log(rp);



// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });


// console.log('=>', red, 123, off);

// rl.on('keypress', (...args) => {
//     console.log('=>', args);
//     process.exit(1);
// });