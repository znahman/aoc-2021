const fs = require("fs");

const input = fs.readFileSync("./input.txt") + "";
const instructions = input.split("\n");

let horizontalPosition = 0;
let depth = 0;

for (i = 0; i < instructions.length; i++) {
    const instructionAndDirection = instructions[i].split(" ");
    const direction = instructionAndDirection[0];
    const amount = parseInt(instructionAndDirection[1]);

    if(direction === "forward") {
        horizontalPosition+=amount;
    }
    if(direction === "down") {
        depth+=amount;
    }
    if(direction === "up") {
        depth-=amount;
    }
}

console.log("horizontal position: " + horizontalPosition);
console.log("depth: " + depth);
console.log(depth * horizontalPosition);