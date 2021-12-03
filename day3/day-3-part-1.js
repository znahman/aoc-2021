const fs = require("fs");

const input = fs.readFileSync("./input.txt") + "";
const diagnostics = input.split("\n");

const numLength = diagnostics[0].length;

let gammaRate = [];
let epsilonRate = [];

for (i = 0; i < numLength - 1; i++) {
    let oneCount = 0;
    let zeroCount = 0;
    for(j = 0; j < diagnostics.length; j++){
        if(diagnostics[j].charAt(i) === "1"){
            oneCount++
        } else {
            zeroCount++
        }
    }
    if(oneCount > zeroCount){
        gammaRate.push("1");
    } else {
        gammaRate.push("0");
    }
}

for (i = 0; i < gammaRate.length; i++) {
    if(gammaRate[i] === "1") {
        epsilonRate.push("0");
    } else {
        epsilonRate.push("1");
    }
}

console.log(gammaRate);
console.log(epsilonRate);

const gammaRateDecimal = parseInt(gammaRate.join(""), 2);
const epsilonRateDecimal = parseInt(epsilonRate.join(""), 2);

console.log("gamma rate: " + gammaRateDecimal);
console.log("epsilon rate: " + epsilonRateDecimal);

const powerConsumption = gammaRateDecimal * epsilonRateDecimal;

console.log("Power consumption: " + powerConsumption);

// gamma rate: most common bit in the corresponding position
// epsilon rate
// power consumption is gamma rate multiplied by epsilon rate