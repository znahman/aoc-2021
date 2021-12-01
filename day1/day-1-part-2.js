const fs = require("fs");

const input = fs.readFileSync("./input.txt") + "";
const sonarReadings = input.split("\n").map(Number);

let increaseCount = 0;
let threeCountSums = [];

for (i = 0; i < sonarReadings.length - 2; i++) {
  threeCountSums.push(
    sonarReadings[i] + sonarReadings[i + 1] + sonarReadings[i + 2]
  );
}

for (j = 0; j < threeCountSums.length - -1; j++) {
  if (threeCountSums[j + 1] > threeCountSums[j]) {
    increaseCount++;
  }
}

console.log(increaseCount);
