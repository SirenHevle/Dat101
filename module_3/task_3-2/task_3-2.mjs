"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Use "for" loops to generate two lines on the HTML page. One should count from 1 to 10, and the other
should count from 10 to 1. Use only two lines to print the rows.*/


printOut("Replace this with you answer!");
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
 printOut("guess number =" + guessNumber.toString());



printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Take the program from part 2 and expand it to guess a number between 1 and one million. Print the
number of guesses as well as the number of milliseconds it took to guess the number. HINT: Use the
Date.now() function to measure time*/

guessNumber = 0; //settes på nytt for å restarte den. Kan ikke da bruke let eller const. (først lagd bare bruk igjen)
let guessCount = 0;
const startTime= Date.now();

while(answerNumber !== guessNumber); {
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



printOut("Replace this with you answer!");
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





printOut("Replace this with you answer!");
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



printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Simulate 6 dice and print how many "throws" it takes to get:
● 1 2 3 4 5 6 (full straight)
● 3 pairs
● 2 of a kind and 4 of a kind (tower)
● All the same (Yahtzee)*/

let dice1 = Math.ceil(Math.random() * 6);
let dice2 = Math.ceil(Math.random() * 6);
let dice3 = Math.ceil(Math.random() * 6);
let dice4 = Math.ceil(Math.random() * 6);
let dice5 = Math.ceil(Math.random() * 6);
let dice6 = Math.ceil(Math.random() * 6);


let diceThrow = "";
 diceThrow += dice1.toString() + ",", 
 diceThrow += dice2.toString() + ",",
 diceThrow += dice3.toString() + ",",
 diceThrow += dice4.toString() + ",",
 diceThrow += dice5.toString() + ",",
 diceThrow += dice6.toString() + ",",
  
 diceThrow =       // ta vekk for å la dataen generere selv
 // all the same YATZY

 const count1 = (diceThrow.match(1/g) || "").length;
 const count2 = (diceThrow.match(1/g) || "").length;
 const count3 = (diceThrow.match(1/g) || "").length;
 const count4 = (diceThrow.match(1/g) || "").length;
 const count5 = (diceThrow.match(1/g) || "").length;
 const count6 = (diceThrow.match(1/g) || "").length;
  
 printOut("count1 =" + count1.toString());

 const diceCount = "";
 
 diceCount += dice1.toString() + ",", 
 diceCount += dice2.toString() + ",",
 diceCount += dice3.toString() + ",",
 diceCount += dice4.toString() + ",",
 diceCount += dice5.toString() + ",",
 diceCount += dice6.toString() + ",",
 
let eqals6 = (diceCount.match(6/g) || "").length
const equals1 = (diceCount.match(1/g) || "").length
 


printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
