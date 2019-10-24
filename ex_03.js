let readline = require('readline');
let rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let result;

function passwordCheck(password) { 
    if (password.length > 7 
        && password.match(/[A-Z]/) 
        && password.match(/[a-z]/)
        && password.match(/[0-9]/)) {
            result = 'YES';
    }
        
    else {
        result = 'NO';
    }
}

rl.on('line', function(line) {
    let password = line;
    passwordCheck(password);    
});

rl.on('close', function() {
    console.log(result);
});