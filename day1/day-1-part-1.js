const fs = require("fs");

const input = fs.readFileSync("./input.txt") + "";
const sonarReadings = input.split("\n").map(Number);

let increaseCount = 0;

for (i = 0; i < sonarReadings.length - 1; i++) {
  if (sonarReadings[i + 1] > sonarReadings[i]) {
    increaseCount++;
  }
}

console.log(increaseCount);
