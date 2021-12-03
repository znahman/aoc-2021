const fs = require("fs");

const input = fs.readFileSync("./input.txt") + "";
const diagnostics = input.split("\n");

for (i = 0; i < diagnostics.length; i++) {
    diagnostics[i] = diagnostics[i].replace("\r", "");
}

const numLength = diagnostics[0].length;

let validOxygenNumbers = diagnostics.slice();

for (i = 0; i < numLength; i++) {
    let oneCount = 0;
    let zeroCount = 0;
    let keepNumber = -1;
    for(j = 0; j < validOxygenNumbers.length; j++){
        if(validOxygenNumbers[j].charAt(i) === "1"){
            oneCount++
        } else {
            zeroCount++
        }
    }
    if(oneCount > zeroCount || oneCount === zeroCount){
        keepNumber = "1";
    } else {
        keepNumber = "0";
    }
    console.log("keep number: " + keepNumber);
    console.log("digit num: " + i);
    for(k = 0; k < validOxygenNumbers.length; k++){
        if(validOxygenNumbers[k].charAt(i) !== keepNumber){
            if(validOxygenNumbers.length > 1){
                console.log(validOxygenNumbers);
                console.log("removing: " + validOxygenNumbers[k] + " at position: " + k );
                validOxygenNumbers.splice(k, 1);
                k = -1;
                console.log("length after remove: " + validOxygenNumbers.length);
                console.log(validOxygenNumbers);
            } else {
                break;
            }
        }
    }
    console.log("\n\n\n");
}

console.log("oxygen rating: " + validOxygenNumbers);
console.log("\n\n\n\n");

let validC02Numbers = diagnostics.slice();

for (i = 0; i < numLength; i++) {
    let oneCount = 0;
    let zeroCount = 0;
    let keepNumber = -1;
    for(j = 0; j < validC02Numbers.length; j++){
        if(validC02Numbers[j].charAt(i) === "1"){
            oneCount++
        } else {
            zeroCount++
        }
    }
    if(oneCount > zeroCount || oneCount === zeroCount){
        keepNumber = "0";
    } 
    if(oneCount < zeroCount) {
        keepNumber = "1";
    }
    // console.log("keep number: " + keepNumber);
    for(k = 0; k < validC02Numbers.length; k++){
        if(validC02Numbers[k].charAt(i) !== keepNumber){
            if(validC02Numbers.length > 1){
                // console.log("removing: " + validC02Numbers[k] );
                validC02Numbers.splice(k, 1);
                k = -1;
                // console.log("length after remove: " + validC02Numbers.length);
                // console.log(validC02Numbers);
            } else {
                break;
            }
        }
    }
    // console.log("\n\n\n");
}

// console.log(validC02Numbers);
// console.log("\n\n\n");

console.log(validOxygenNumbers);
console.log(validC02Numbers);


oxygenRate = parseInt(validOxygenNumbers[0], 2);
c02Rate = parseInt(validC02Numbers[0], 2);
lifeSupportRating = oxygenRate * c02Rate;

console.log("oxygen rate: " + oxygenRate);
console.log("c02 rate: " + c02Rate);
console.log("life support rating: " + lifeSupportRating);

// oxygen generator rating
// c02 scrubber rating
// life support rating is oxygen generator rating multipled by c02 scrubber rating