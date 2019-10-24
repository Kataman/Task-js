var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let operations = 0;
function working(initial, desired) {
    let current = initial;

    while (current < desired ) {
        current = current + (current * 70 / 100);
        operations = operations + 1;
    }
};

rl.on('line', function(line) {
    const args = line.split(' ');
    const initial = parseInt(args[0], 10);
    const desired = parseInt(args[1], 10);
    working(initial, desired);
});

rl.on('close', () => {
  console.log(operations);
});