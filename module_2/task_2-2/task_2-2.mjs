"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Use JavaScript to calculate the following expression, ensuring the result is -34:
2 + 3 * 2 - 4 * 6*/
 
const result = 2 + 3 * (2 - 4) * 6;

printOut( result + "");

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Convert 25 metres and 34 centimetres to inches. An inch is 25.4 millimetres (maximum 2 decimal places in
the answer).*/

const mettoinc = 25 * 1000 / 25.4;
const centoinc = 34 * 10 / 25.4;
const result2 = mettoinc + centoinc;
const formated2 = result2.toFixed(2);     // toFixed setter antall desimaler i svaret. 

printOut( formated2 + "");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Convert 3 days, 12 hours, 14 minutes, and 45 seconds to minutes. (Not allowed to use date objects). The
task must be solved with primitives*/
const daytohour = 3 * 24;
const hourtomin = (daytohour + 12) * 60;
const sectomin = 45 / 60;

const result3 = hourtomin + 14 + sectomin;

printOut(result3 + "");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Convert 6,322.52 minutes to days, hours, minutes, and seconds. (Not allowed to use date objects). The
task must be solved with primitives.*/
let totalminutes = 6322.52;

//minutes to days
const mininaday = 24 * 60;
const totdays = Math.floor(totalminutes / mininaday);
printOut(totdays + " Days ");

totalminutes %= mininaday; // the remaining minutes after days

// minutes to hours
const mininhour = 60;
const tothours = Math.floor(totalminutes / mininhour);
printOut(tothours + " Hours ");

totalminutes %= mininhour;        // %= resterende av desimalene etter hele tallet er brukt

// remaining minuttes

const mininmin = Math.floor(totalminutes);
printOut(mininmin + " Minutes ");


// remaining seconds

const secinmin = 60;
const totsec = Math.round((totalminutes - mininmin) * secinmin);
printOut(totsec + " Secounds ")

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Convert 54 dollars to Norwegian kroner, and print the price for both:
NOK → USD and USD → NOK.
Use 76 NOK = 8.6 USD as the exchange rate.
The answer must be in whole "Kroner" and whole "dollars".*/
let startusd = 54;
const nokrate = 76;
const usdrate = 8.6;
const ennok = nokrate / usdrate; // value of one kroner in usd
const enusd = usdrate / nokrate; // value of one uds in nok

const nok = Math.round(startusd * ennok); //54 dollar til kroner
const usd = Math.round(startusd / enusd); // kroner til 54 dollar //Math.round runder opp/ned tallet
 


printOut(startusd + " Dollar is " + nok + " Kroner "); // totalsum dollar til kroner

printOut(usd + " Kroner is " + startusd + " Dollars ");  // totalsum kroner til dollar


printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Create a variable that contains the following text:
"There is much between heaven and earth that we do not understand."
● a. Print the number of characters in the text. 
● b. Print the character at position number 19.
● c. Print the characters starting at position number 35 and 8 characters forward.
● d. Print the index at which "earth" starts in the text.*/

// oppgave a
const text1 = "There is much between heaven and earth that we do not understand."
const totchatxt = text1.length;
console.log(totchatxt); //output

printOut(totchatxt + " Characters in the text "); // antallet karakterer i teksten

// oppgave b
const  cha19 = 19;
const chapob = text1.charAt(cha19); // chapob fordi oppgaven er nr b i rekkefølgen.
printOut(" karateren på posisjon " + cha19 + " er " + chapob );

// oppgave c

const startcha = 35;
const forwardcha = 8;


const chastartfor = text1.substring(startcha, startcha + forwardcha);  // .substring (start, slutt)
printOut( " Characters from position number 35 and 8 forvards is: " + chastartfor);


// oppgave d.

const substring = "earth";
const indexd = text1.indexOf(substring);
printOut( " index to the word \""  + substring + "\" starts at " + indexd);    // \= printer alt som står bak

printOut(newLine);
printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Comparison, print the values for the following expressions (evaluate whether the statements are true):
● aa.  Is 5 greater than 3?
● bb. Is 7 greater than or equal to 7?
● cc. Is "a" greater than "b"?
● dd. Is "1" less than "a"?
● ee. Is "2500" less than "abcd"?
● ff. "arne" is not equal to "thomas".
● gg. (2 equals 5) is this statement true?
● hh. ("abcd" is greater than "bcd") is this statement false?*/

// oppgave aa. 

const result53 = 5 > 3;
console.log(result53);

printOut(result53 + " , 5 is bigger than 3 ")

// oppgave bb.


const resultbb = 7 >= 7;
console.log(resultbb);

printOut(resultbb + " 7 is equal to 7 "); // true = equal

// Oppgave cc (is a greater than b?)


printOut("A > b = " + ("a" > "b").toString());

// Oppgave dd (is "1" less than "a")

printOut(" 1 < a = " + ("1" < "a").toString());

// Oppgave ee (is "2500" less than "abcd"?)

printOut(" 2500 < abcd = " + ("2500" < "abcd").toString());


// Oppgave ff "Arne" is not equal to "Thomas"

printOut("Arne is not equal to Thomas" +  ("arne" !== "thomas").toString());
    

// Oppgave gg (2 equals 5) is this statement true?

printOut("2 equals 5, true?" + (2 == 5));

// Oppgave hh (("abcd" is greater than "bcd") is this statement false?*/)
const abcd = "abcd";
const bcd = "bcd";
const resultabcd = ("abcd" > "bcd" === false);
console.log( resultabcd + " gggg");


printOut("abcd is greater than bcd === false?" + resultabcd.toString());



printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Convert and print the following expressions:
● from text "254" to a number*/
let text254 = "254";
let number254 = text254;
console.log(number254);
printOut(" text 254 = " + number254);

/*● from text "57.23" to a number*/

let text5723 = "57.23";
let number5723 = + text5723;
console.log(number5723);
printOut("text 57.23 = " + number5723);

/*● from text "25 kroner" to a number*/

let text25 = "25 kroner";
let number25 = parseInt(text25);    // parseint fjerner text bak nummer
console.log(number25);
printOut("25 kroner til nummer = " + number25);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Create a variable "r" and randomly generate a number from 1 to 360 (1 >= r <= 360).*/
let r = Math.ceil(Math.random() * 360 + 1);
console.log(r);
printOut("r = " + r);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Use modulus (%) to calculate how many weeks and days are in 131 days.*/

let totaldayys = 131;
let weekss = Math.floor(totaldayys / 7);
let dayys = totaldayys % 7; 
 printOut(" there are " + weekss + " weeks, and " + dayys + " days in" + totaldayys + " days ");
printOut("Replace this with you answer!");
printOut(newLine);