"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Use "for" loops to generate two lines on the HTML page. One should count from 1 to 10, and the other
should count from 10 to 1. Use only two lines to print the rows.*/

let countStart = "";
let countStopp = "";

for(let i = 1, j = 10; i <= 10; i++, j--) {
 countStart += " " + i.toString();
 countStopp += " " + j.toString();
}
printOut(countStart + "");
printOut(countStopp + "");



printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Create a program that can guess a number between 1 and 60. Declare a variable and assign it a value, for
example, 45. Let the computer "guess" by generating a random number. Use a "while" loop and the
"random" function. Keep the "while" loop running as long as the "guessed number" is incorrect. Print the
number once the "while" loop has completed. You do not need to print anything while the "while" loop is in
progress*/

const answerNumber = 45;
let guessNumber = 0;
while(answerNumber !== guessNumber){  //kjøres når de variablene over er forskjellige
    guessNumber = Math.ceil(Math.random() *60); // math.ceil runder opp til nermest atll(uten komma).

} 
 printOut("guess number = " + guessNumber.toString());



printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/*Take the program from part 2 and expand it to guess a number between 1 and one million. Print the
number of guesses as well as the number of milliseconds it took to guess the number. HINT: Use the
Date.now() function to measure time*/

guessNumber = 0;  //settes på nytt for å restarte den. Kan ikke da bruke let eller const. (først lagd bare bruk igjen)
let guessCount = 0;
const startTime= Date.now();

while(answerNumber !== guessNumber) {
    guessCount++;

guessNumber = Math.ceil(Math.random()* 1000000);   

}
 const endTime = Date.now();
 const timeUsed = endTime - startTime; // største tallet først
 printOut("antall gjettninger =" + guessCount.toString() + "millisekunder brukt = " + timeUsed.toString());



printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Use a "for" loop and a "while" loop to find all prime numbers greater than 1 and less than 200.
○ HINT: A prime number is any natural number greater than 1 that is only divisible by itself and
1. The number 1 is not a prime. (See Wikipedia on primes or ask your AI)*/

for (let number = 2; number < 200; number++) {  // loop for tall mellom 2 -200
    let isPrime = true;
    let divide = 2;

 while (divide * divide <= number) {                //while loop for å sjekke dividitering
    if (number % divide === 0) {
        isPrime = false;
        break
    }
    divide++;                                           // hvis delelig = ikke primtall
 }
 if (isPrime) {                             //hvis tallet ikke kan deles, er det primtall
    printOut("primtall:" + number);
 }
}


printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Create two loops that print 9 columns and 7 rows with the text "K1, R1" for the first cell, "K2, R1" for the
second cell, and so on.
○ Hint: Use what we call nested loops. This is a "for" loop within another "for" loop.
Use the provided printOut function to print each row with its sets of columns; remember to place this in
the right level of the nested for loops. The output should look like this:
K1R1 K2R1 K3R1 K4R1 K5R1 K6R1 K7R1 K8R1 K9R1
K1R2 K2R2 K3R2 K4R2 K5R2 K6R2 K7R2 K8R2 K9R2
K1R3 K2R3 K3R3 K4R3 K5R3 K6R3 K7R3 K8R3 K9R3
K1R4 K2R4 K3R4 K4R4 K5R4 K6R4 K7R4 K8R4 K9R4
K1R5 K2R5 K3R5 K4R5 K5R5 K6R5 K7R5 K8R5 K9R5
K1R6 K2R6 K3R6 K4R6 K5R6 K6R6 K7R6 K8R6 K9R6
K1R7 K2R7 K3R7 K4R7 K5R7 K6R7 K7R7 K8R7 K9R7*/

//loop for rad (1-7)

for (let row = 1; row <= 7; row++) {
    let rowText = "";  //for å akimulere rad teksten

 // loop for kolonne(1-9)
 for(let column = 1; column <= 9; column++) {
     rowText += `K${column}R${row}`;
 }
 printOut(rowText + "");

}



printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Simulate 5 student grades using the Math.random() function, from 1 to 236 (inclusive).
For each grade, print the student's grade (A to F) based on the point distribution provided:
○ A: 89% – 100%
○ B: 77% – 88%
○ C: 65% – 76%
○ D: 53% – 64%
○ E: 41% – 52%
○ F: 0% – 40%
Sorting Challenge (Bonus): Sort and print the 5 grades in descending order (from A to F) without using
an array. You can use a for loop and a do/while loop to achieve this.
Hint for Success: If you successfully complete the sorting challenge, you'll unlock a valuable hint for Part
9 of "DAT101: Mandatory assignment 4.1" that will make it easier to solve. The learning outcomes remain
the same, but this hint will give you a head start!*/

// simulerer karakterer for 5 studenter

    function assignGrade(score){
let percentagegrade = (score/236) * 100; // kalkulerer prosenten i karakteren

if (percentagegrade >= 89) {
    return ("A");
} else if (percentagegrade >= 77) {
    return ("B");
} else if (percentagegrade >= 65) {
    return (" C");
}else if (percentagegrade >= 53) {
    return (" D");
}else if (percentagegrade >= 41) {
        return ("E");
    } else {
        return("F");
    }

    }


for (let i = 1; i <= 5; i++) {
    let score = Math.floor(Math.random() * 236 ) + 1; // genererer tall mellom 1 og 236

    let grader = assignGrade(score);   // gir karakter basert på score
    printOut(`student ${i}: score = ${score}, Grade = ${grader}`);
}





printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Simulate 6 dice and print how many "throws" it takes to get:
● 1 2 3 4 5 6 (full straight)
● 3 pairs
● 2 of a kind and 4 of a kind (tower)
● All the same (Yahtzee)*/

let fullStraitChecher = false;
let yatsyChecker = false;
let fullTowerCheker = false;
let ThreeParChecker = false;
let rollCounter = 0;

do {
    // Generate new random dice values each iteration
    const d1 = Math.ceil(Math.random() * 6) + 1;
    const d2 = Math.ceil(Math.random() * 6) + 1;
    const d3 = Math.ceil(Math.random() * 6) + 1; 
    const d4 = Math.ceil(Math.random() * 6) + 1;
    const d5 = Math.ceil(Math.random() * 6) + 1;
    const d6 = Math.ceil(Math.random() * 6) + 1;
    rollCounter++;
}
    // Count occurrences of each die face
    let count1 = 0, count2 = 0, count3 = 0, count4 = 0, count5 = 0, count6 = 0;

    // Counting the dice
    switch (d1) { case 1: count1++; break; case 2: count2++; break; case 3: count3++; break; case 4: count4++; break; case 5: count5++; break; case 6: count6++; break; }
    switch (d2) { case 1: count1++; break; case 2: count2++; break; case 3: count3++; break; case 4: count4++; break; case 5: count5++; break; case 6: count6++; break; }
    switch (d3) { case 1: count1++; break; case 2: count2++; break; case 3: count3++; break; case 4: count4++; break; case 5: count5++; break; case 6: count6++; break; }
    switch (d4) { case 1: count1++; break; case 2: count2++; break; case 3: count3++; break; case 4: count4++; break; case 5: count5++; break; case 6: count6++; break; }
    switch (d5) { case 1: count1++; break; case 2: count2++; break; case 3: count3++; break; case 4: count4++; break; case 5: count5++; break; case 6: count6++; break; }
    switch (d6) { case 1: count1++; break; case 2: count2++; break; case 3: count3++; break; case 4: count4++; break; case 5: count5++; break; case 6: count6++; break; }

    // Check for Yatzy
    if (!yatsyChecker && (count1 === 6 || count2 === 6 || count3 === 6 || count4 === 6 || count5 === 6 || count6 === 6)) {
        yatsyChecker = true;
        printOut("Yatsy!");
        printOut(`Rolls: ${rollCounter}`);
    }

    // Check for Full Tower (4 of one kind and 2 of another)
    if (!fullTowerCheker && (count1 === 4 || count2 === 4 || count3 === 4 || count4 === 4 || count5 === 4 || count6 === 4) &&
        (count1 === 2 || count2 === 2 || count3 === 2 || count4 === 2 || count5 === 2 || count6 === 2)) {
        fullTowerCheker = true;
        printOut("Full Tower!");
        printOut(`Rolls: ${rollCounter}`);
    }

    // Check for Full Straight (1 of each number from 1 to 6)
    if (!fullStraitChecher && (count1 === 1 && count2 === 1 && count3 === 1 && count4 === 1 && count5 === 1 && count6 === 1)) {
        fullStraitChecher = true;
        printOut("Full Straight!");
        printOut(`Rolls: ${rollCounter}`);
    }

    // Check for Three Pairs

    if(!ThreeParChecker)
    {
    let pairs = 0;
    if (count1 === 2) pairs++;
    if (count2 === 2) pairs++;
    if (count3 === 2) pairs++;
    if (count4 === 2) pairs++;
    if (count5 === 2) pairs++;
    if (count6 === 2) pairs++;

    if (pairs === 3) {
        ThreeParChecker = true;
        printOut("Three Pairs!");
        printOut(`Rolls: ${rollCounter}`);
    }
    }

printOut(newLine);