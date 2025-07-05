const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('คะแนน : ', (answer) => {
    if(answer >= 90){
        console.log('คุณได้เกรด 4');
    }else if(answer >= 90){
        console.log('คุณได้เกรด 4');
    }else if(answer >= 80){
        console.log('คุณได้เกรด 3');
    }else if(answer >= 70){
        console.log('คุณได้เกรด 2');
    }else if(answer >= 60){
        console.log('คุณได้เกรด 1');
    }else{
        console.log('คุณได้เกรด 0');
    }
    
    rl.close();
});