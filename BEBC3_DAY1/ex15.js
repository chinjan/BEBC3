const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please type your name : ', (answer) => {
    console.log(`Hello ${answer}`);
    console.log(`Goodbye, ${answer}`);
    rl.close();
});