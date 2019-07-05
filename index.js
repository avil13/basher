const readline = require('readline');

const clc = require('./utils/color');
const getList = require('./utils/list');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const items = [
    'bugfix/EDODEV-5300-todo-edodev-4944-label',
    'bugfix/EDODEV-5310-todo-click.native',
    'feature/EDODEV-4744-matomo',
    'feature/EDODEV-4916-add-registrqation-page',
    'feature/EDODEV-5030-input',
    'feature/EDODEV-5207-unit-frontend',
    'feature/EDODEV-5232-countdown',
    'feature/EDODEV-5257-ui',
    '* feature/EDODEV-5323-remove-animated_css',
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
