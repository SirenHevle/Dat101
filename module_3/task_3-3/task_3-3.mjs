"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Create a function that takes no parameters and returns no values. Have it print today's date in the
Norwegian standard. Example: "Friday, October 18, 2019" Use an example from this resource:
toLocaleString , Use "no-NB" as an alias for the Norwegian language in the function call to
"toLocaleDateString".*/

function PrintTodaysDateNorwegian() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const norwegianDate = today.toLocaleDateString('no-NB', options);
  printOut(norwegianDate + "");
}   

PrintTodaysDateNorwegian();

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Level Up Your Date Function: Take your "Today's Date" function from Task 1 and supercharge it! Not
only should it display today's date in elegant Norwegian fashion, but it also needs to return that date as a
powerful date object, ready for further manipulation.
The Hype Train is Leaving the Station: Craft a new function that calculates the number of days left until
the epic release of 2XKO, the highly-anticipated tag-team fighting game set in the League of Legends
universe, launching on May 14th, 2025.
Time for the Grand Reveal: Combine the might of your two functions to print today's date and the thrilling
countdown to 2XKO's debut. Feel free to add a bit of flair to your output - maybe a themed message or a
touch of visual excitement!
Remember:
● This task isn't just about coding; it's about harnessing the power of dates and functions to create
something both informative and engaging.
● Accuracy is key! Make sure your countdown is precise and your date formatting is impeccable.
● Creativity is encouraged! Let your passion for gaming and multimedia shine through in your output.*/
/*

PrintTodaysDateNorwegian(return today) 

// finn ut dager til slipp av 2XKO
function daysToRelease() {
    const today = PrintTodaysDateNorwegian();
    const releaseDate = new Date('2025-05-14'); // dato for utgivelse
    const minutesInOneday = 24 * 60 * 60 * 1000;


// finn forskjell på dager
const differanceInMs = releaseDate - today;
const daysLeft = Math.ceil(differanceInMs / minutesInOneday);

//kalkulering av dager som vises på nedtelling

if (daysLeft > 0 ) {
    printOut(`⏳ Bare ${daysLeft} til vi lanserer 2XKO! Samle vennene og finn frem BeforeUnloadEvent. Dette tar av 💥`);
        else if (daysLeft === 0){
            printOut("🎉🎉 Idag er dagen vi alle har ventet på! 2XKO er her! Samle kompisene og forbred dere på kamp!" )
        } else {
            printOut("2XKO er allerede lansert. Gikk du glipp av den store dagen? fortvil ikke 🎉 Du finner oss på alle playstation konsoller! seer deg der💥 ");
        }
}
}






printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Create a function that receives the radius of a circle and prints the diameter, circumference, and area.*/

function circlerecieve(radius) {
    const diameter = 2 * radius;
    const circumference = 2* Math.PI * radius
    const area = Math.PI * Math.pow(radius, 2);
    printOut(`For a circle with radius ${radius}:`);
    printOut(`diameter: ${diameter}`);
    printOut(`circumference: ${circumference.toFixed(2)}`);
    printOut(`Area: ${area.toFixed(2)}`);
}

circlerecieve(8);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Create a function that receives the width and height of a rectangle in an object. Print the circumference
and area of the given rectangle.*/
function rectangleObject(dimentions) {
    const {widht, height} = dimentions; 
    const circumferences = 2 * (widht + height);
    const areas = widht * height;

    printOut(` for a rectangle with widht: ${widht} and height: ${height}:`);
    printOut(`circumference: ${circumferences}`);
    printOut(`Area: ${areas}`);
}

const dimentions = {widht: 25, height: 10};
rectangleObject(dimentions);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Create a function that handles the conversion between Celsius, Fahrenheit, and Kelvin. Use three different
numbers and print all three combinations as integers (no decimals). Design the function to take two
parameters: first the temperature, then the temperature type/id. Use these parameters to convert to the
other two temperature types and print them. Formula:*/

function convertTemperature(temp, unit) {
    let celsius, fahrenheit, kelvin;
  
    switch (unit) {
      case "C": // Input is Celsius
        celsius = temp;
        fahrenheit = Math.round((temp * 9/5) + 32); // Celsius to Fahrenheit
        kelvin = Math.round(temp + 273.15);         // Celsius to Kelvin
        break;
  
      case "F": // Input is Fahrenheit
        fahrenheit = temp;
        celsius = Math.round((temp - 32) * 5/9);    // Fahrenheit to Celsius
        kelvin = Math.round((temp - 32) * 5/9 + 273.15); // Fahrenheit to Kelvin
        break;
  
      case "K": // Input is Kelvin
        kelvin = temp;
        celsius = Math.round(temp - 273.15);         // Kelvin to Celsius
        fahrenheit = Math.round((temp - 273.15) * 9/5 + 32); // Kelvin to Fahrenheit
        break;
  
      default:
        console.log("Please provide a valid unit: 'C', 'F', or 'K'");
        return;
    }
  
    printOut(`Celsius: ${celsius}°C, Fahrenheit: ${fahrenheit}°F, Kelvin: ${kelvin}K`);
  }

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Create a function that calculates the price without VAT (sales tax). The function needs two arguments, one
for the price including VAT (gross amount) and one for the tax group in text (normal = 25%, food = 15%,
hotel, transport, and cinema = 10%). The text argument should not be case-sensitive. If the VAT group is
not correct, the text "Unknown VAT group!" should be printed. The function must return the price without
tax, i.e., the net price. Call the function four times with different gross amounts. One for each of the VAT
groups (25, 15, and 10) and one with an unknown group for example “goblins”. Tip: Use "NaN" to identify
that an unknown VAT group is returned from the function. Formula: net = (100 * gross) / (vat + 100).*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Create a function that takes 3 arguments and returns the following calculation:
● Speed = Distance / Time
If speed is missing, calculate speed. If time is missing, calculate time. If distance is missing, calculate the
distance. If more than one parameter is missing, return NaN.*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Create a function that takes four parameters and returns a result. Parameter one: A text string. Parameter
two: Value for the maximum size of the text string. Parameter three: Text character. Parameter four:
Consecutive insertion of characters (boolean value). Take the text parameter; if it's smaller than the
maximum, make it larger with the specified character, either before or after, using the given boolean value.
Have the function return the new string and print it out.*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
From mathematics, we have the following expression:
1 + 2 = 3
4 + 5 + 6 = 7 + 8
9 + 10 + 11 + 12 = 13 + 14 + 15
16 + 17 + 18 + 19 + 20 = 21 + 22 + 23 + 24
25 + 26 + 27 + 28 + 29 + 30 = 31 + 32 + 33 + 34 + 35
Create a function or functions that can test this expression for 200 lines. If the test fails, print out where the
two sides are not equal and stop the loop. If all 200 lines are OK, print "Maths fun!".*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!
Recursive function. Create a function that calculates the factorial of a given number. Factorial of 5 = 5 * 4 *
3 * 2 * 1. Factorial of 6 = 6 * 5 * 4 * 3 * 2 * 1. Etc.
Have the function call itself to calculate the result and print the final answer.*/
printOut("Replace this with you answer!");
printOut(newLine);
