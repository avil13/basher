const readline = require('readline');

const clc = require('./utils/color');
const getList = require('./utils/list');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const items = [
    'bugfix/ID-100-todo-edodev-4944-label',
    'bugfix/ID-100-todo-click.native',
    'feature/ID-100-matomo',
    'feature/ID-100-add-registrqation-page',
    'feature/ID-100-input',
    'feature/ID-100-unit-frontend',
    'feature/ID-100-countdown',
    'feature/ID-100-ui',
    '* feature/ID-100-remove-animated_css',
    'master',
    'test',
];

console.log(clc._clear);
console.log(clc._saveCursor);
console.log(getList({
    list: items
}));
console.log(clc._restoreCursor);



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
