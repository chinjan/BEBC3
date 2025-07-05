const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('คะแนน : ', (answer) => {
    if(answer >= 90){
        console.log('คุณได้เกรด 4');
    }else{
        console.log('คุณไม่ได้เกรด 4');
    }
    
    rl.close();
});