var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let result;

function smallestDivisor(number) {
    function process(number, divisor) {
        if (number % divisor === 0) {
                result = divisor;
            } else {
                return process(number, ++divisor);
            }
        }
    return process(number, 2);
}

rl.on('line', function(line) {
    let number = parseInt(line, 10);
    smallestDivisor(number);    
});

rl.on('close', () => {
    console.log(result); 
});
