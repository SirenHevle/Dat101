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

function PrintTodaysDateNorwegian() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const norwegianDate = today.toLocaleDateString('no-NB', options);
  printOut(norwegianDate + "");
}   

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
function displayDateAndCountdown() {
    // Set the release date of 2XKO
    const releaseDate = new Date("2025-05-14");

    // Display today's date and calculate the countdown
    const today = PrintTodaysDateNorwegian();
    const daysLeft = calculateDaysUntilRelease(releaseDate);

    // flair to the final output
    printout("✨------------------------✨");
    printout("🕒 Dagens informasjon:");
    printout(`📅 Dagens dato: ${today.toLocaleDateString("no-NO")}`);
    printout("🎮 Hypen er ekte!");
    printout("✨------------------------✨");
}


*/



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

function convertTemperature(temp, type) {
  let celsius, fahrenheit, kelvin;

  // Convert based on the type provided
  if (type === "C") {
      celsius = temp;
      fahrenheit = Math.round((temp * 9) / 5 + 32);
      kelvin = Math.round(temp + 273.15);
  } else if (type === "F") {
      celsius = Math.round((temp - 32) * 5 / 9);
      fahrenheit = temp;
      kelvin = Math.round((temp - 32) * 5 / 9 + 273.15);
  } else if (type === "K") {
      celsius = Math.round(temp - 273.15);
      fahrenheit = Math.round((temp - 273.15) * 9 / 5 + 32);
      kelvin = temp;
  } else {
      printOut("Invalid temperature type. Use 'C', 'F', or 'K'.");
      return;
  }

  // Print the conversions as integers
  printOut(`Temperature: ${temp} ${type}`);
  printOut(`Celsius: ${celsius}°C`);
  printOut(`Fahrenheit: ${fahrenheit}°F`);
  printOut(`Kelvin: ${kelvin} K`);
}

// Call the function with different examples
convertTemperature(25, "C"); // Celsius to Fahrenheit and Kelvin
convertTemperature(77, "F"); // Fahrenheit to Celsius and Kelvin
convertTemperature(298, "K"); // Kelvin to Celsius and Fahrenheit


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
function calculateNetPrice(grossAmount, vatGroup) {
  const vatRates = {
      normal: 25,
      food: 15,
      hotel: 10,
      transport: 10,
      cinema: 10
  };

  // Normalize the input to lowercase
  vatGroup = vatGroup.toLowerCase();

  // Check if the VAT group is valid
  if (vatRates.hasOwnProperty(vatGroup)) {
      const vat = vatRates[vatGroup];
      const netPrice = (100 * grossAmount) / (vat + 100);
      return netPrice.toFixed(2); // Return the net price rounded to 2 decimals
  } else {
      printOut("Unknown VAT group!");
      return NaN; // Return NaN for unknown VAT group
  }
}

// Call the function for different cases
printOut("Normal (25% VAT):" + calculateNetPrice(200, "normal")); // Expected: 100.00
printOut("Food (15% VAT):" + calculateNetPrice(500, "food")); // Expected: 100.00
printOut("Hotel (10% VAT):" + calculateNetPrice(340, "hotel")); // Expected: 100.00
printOut("Unknown group:" + calculateNetPrice(130, "goblins")); // Expected: NaN



printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Create a function that takes 3 arguments and returns the following calculation:
● Speed = Distance / Time
If speed is missing, calculate speed. If time is missing, calculate time. If distance is missing, calculate the
distance. If more than one parameter is missing, return NaN.*/

function calculateDistanceTimeSpeed(distance, time, speed) {
  // If all parameters are provided, return NaN
  if (distance !== undefined && time !== undefined && speed !== undefined) {
      return NaN; // More than one parameter missing or all are provided
  }

  // Calculate the missing value
  if (distance === undefined) {
      // Calculate distance (Distance = Speed * Time)
      if (speed !== undefined && time !== undefined) {
          return speed * time;
      }
  } else if (time === undefined) {
      // Calculate time (Time = Distance / Speed)
      if (distance !== undefined && speed !== undefined) {
          return distance / speed;
      }
  } else if (speed === undefined) {
      // Calculate speed (Speed = Distance / Time)
      if (distance !== undefined && time !== undefined) {
          return distance / time;
      }
  }

  // If any condition doesn't match, return NaN
  return NaN;
}

// Example calls
printOut("Calculate Speed: ", calculateDistanceTimeSpeed(undefined, 2, 10)); // Speed = Distance / Time => 10 / 2 => 5
printOut("Calculate Time: ", calculateDistanceTimeSpeed(10, undefined, 5)); // Time = Distance / Speed => 10 / 5 => 2
printOut("Calculate Distance: ", calculateDistanceTimeSpeed(undefined, 2, 5)); // Distance = Speed * Time => 5 * 2 => 10
printOut("Invalid Input: ", calculateDistanceTimeSpeed(10, 2, 5)); // More than one parameter provided => NaN

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Create a function that takes four parameters and returns a result. Parameter one: A text string. Parameter
two: Value for the maximum size of the text string. Parameter three: Text character. Parameter four:
Consecutive insertion of characters (boolean value). Take the text parameter; if it's smaller than the
maximum, make it larger with the specified character, either before or after, using the given boolean value.
Have the function return the new string and print it out.*/

function adjustTextSize(text, maxSize, character, insertAfter) {
  // Check if the text string is already larger or equal to the maximum size
  if (text.length >= maxSize) {
      return text; // Return the original text as it's already the correct size or larger
  }

  // Calculate how many characters need to be added
  const charactersToAdd = maxSize - text.length;
  const padding = character.repeat(charactersToAdd);

  // Add the padding before or after based on the boolean value
  const result = insertAfter ? text + padding : padding + text;

  // Print the result
  console.log(result);

  // Return the result
  return result;
}

// Example calls
printOut("" + adjustTextSize("Hello", 10, "*" , true));  // Adds '*' after the text: "Hello*****"
printOut("" + adjustTextSize("World" , 12, "-" , false)); // Adds '-' before the text: "-------World"
printOut("" + adjustTextSize("JavaScript" , 10 , "!", true)); // Text is already the correct size: "JavaScript"

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

function testMathExpressions(lines) {
  let start = 1; // Initial starting number
  for (let line = 1; line <= lines; line++) {
      const leftCount = line + 1; // Numbers on the left side
      const rightCount = line; // Numbers on the right side

      // Generate the left side numbers
      const leftSide = Array.from(
          { length: leftCount },
          (_, i) => start + i
      );
      const leftSum = leftSide.reduce((a, b) => a + b, 0);

      // Generate the right side numbers
      const rightStart = start + leftCount; // Starting point for the right side
      const rightSide = Array.from(
          { length: rightCount },
          (_, i) => rightStart + i
      );
      const rightSum = rightSide.reduce((a, b) => a + b, 0);

      // Check if the sums are equal
      if (leftSum !== rightSum) {
          printOut(`Test failed at line ${line}`);
          printOut(`Left side: ${leftSide.join(" + ")} = ${leftSum}`);
          printOut(`Right side: ${rightSide.join(" + ")} = ${rightSum}`);
          return;
      }

      // Update the starting point for the next line
      start = rightStart + rightCount;
  }

  printOut("Math is so fun!");
}

// Run the function for 200 lines
printOut(""+ testMathExpressions(200));

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!
Recursive function. Create a function that calculates the factorial of a given number. Factorial of 5 = 5 * 4 *
3 * 2 * 1. Factorial of 6 = 6 * 5 * 4 * 3 * 2 * 1. Etc.
Have the function call itself to calculate the result and print the final answer.*/

function factorial(n) {
  // Base case: factorial of 0 or 1 is 1
  if (n === 0 || n === 1) {
      return 1;
  }

  // Recursive case: n * factorial of (n - 1)
  return n * factorial(n - 1);
}

// Test the function and print the result
const number = 5; // Replace this with any number you want to test
printOut(`Factorial of ${number} is: ${factorial(number)}`);



printOut(newLine);
