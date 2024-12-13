"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
● Part 1: Array Creation & Traversal (5 points)
Create an array where you hard-code all the numbers from 1 to 20. Use a for loop to "run through" the
array and print all the elements in the array.
○ Hint: Look at the learning outcomes to find the solutions to the task.*/

// Step 1: Create an array with numbers from 1 to 20
const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

// Step 2: Use a for loop to traverse the array and print all elements
for (let i = 0; i < numbers.length; i++) {
    printOut(`Element ${i + 1}: ${numbers[i]}`);
}


printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
● Part 2: Array Joining (5 points)
Take the array from task 1 and use a built-in method found in the array object to print all the elements with
a custom defined character separating all the elements.
○ Hint: You should be able to do it with just one line of code
😃*/

// Use the `join` method to print all elements separated by a custom character
printOut(numbers.join(" | ")); // Separator: " | "


printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
● Part 3: String to Array & Traversal (10 points)
Create a constant that contains the text "Hei på deg, hvordan har du det?" (Hello there, how are you?)
Take this text and convert it into an array that contains all the words in the text, i.e., each element should
contain only one word from the text. Use a loop to traverse (run through) this array so that you can print
which word number, which index the word is at, and the word itself*/    
let text = "Hei på deg, hvordan har du det?";

//string to array
const wordsArray = text.split(" "); //splitt med mellomrom

//print nummer, index og ord
for(let i = 0; i < wordsArray.length; i++) {
    printOut(`Word ${i + 1} (Index ${i}): ${wordsArray[i]}`);
}


printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
● Part 4: Array Manipulation: Removing Elements (10 points)
Create an array with these names: "Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
"Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth" and "Kristin".
Then create a function that will remove an element from an array. Let the function have two parameters.
Parameter number one is the array from which you will remove the element, parameter two is the text that
should be removed from the array. Check if the element exists in the array so that you can inform whether
the element exists or not in the array*/

const names = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "kristin"];


function removeElement(array, element) {
    const index = array.indexOf(element); //finn indexen
    if(index !== -1) {
        array.splice(index, 1); //fjerner element
        printOut(`${element} was removed from the array.`);
    } else {
        printOut(`${element} does not exist in the array.`);
    }
}


//test
removeElement(names, "Anne")
removeElement(names, "Truls"); //finnes ikke

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
● Part 5: Array Merging (10 points)
Create a new array with these names: "Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah",
"Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor"and
"Magnus" Merge the arrays with girl names and boy names into a new array with all the names.
○ Hint: You can solve this with two lines of code. Remember that an empty array also has
properties and methods 😃*/


const boynames = ["Jacob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"];

const allName = names.concat(boynames); //Merge array
printOut(allName.join(" , "));


printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Create a class named TBook.
Let the constructor fill in the three attributes (title, author, and ISBN number). Create a public function
"toString" in the class, it should return a text string that contains the three attributes of the class.
Create an array that contains three instances of the TBook class. Use a loop to print out the books that are
in the list*/

class TBook {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    toString() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`;
    }
}

//tBook instance
const books = [
    new TBook("julegrana", "Peter B.", "123-476-876"),
    new TBook("Dompappen", "Anna Wist", "123-456- 765"),
    new TBook("Julenissen", "Claus S", "654-789-321"),
];

//traverse array and print book details

for(const book of books) {
    printOut(book.toString());
}


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Create a static object that looks like this:
You can replace the language in the "name" attributes with whatever you want.
Use this function: Object.keys(EWeekDays) to create an array with the "keys" that exist in the
EWeekDays object.
Create a loop that traverses this "key" array and prints all the elements that exist in the EWeekDays object
○ Hint: Use W3Schools as I have shown you, here you see good examples of exactly this*/

// Step 1: Create the static object `EWeekDays`

    const EWeekDays = {
        WeekDay1: { value: 0x01, name: "Mandag" },    // Monday
        WeekDay2: { value: 0x02, name: "Tirsdag" },   // Tuesday
        WeekDay3: { value: 0x04, name: "Onsdag" },    // Wednesday
        WeekDay4: { value: 0x08, name: "Torsdag" },   // Thursday
        WeekDay5: { value: 0x10, name: "Fredag" },    // Friday
        WeekDay6: { value: 0x20, name: "Lørdag" },    // Saturday
        WeekDay7: { value: 0x40, name: "Søndag" },    // Sunday
        Workdays: { value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager" }, // Monday to Friday
        Weekends: { value: 0x20 + 0x40, name: "Helg" },  // Saturday and Sunday
    };
    
    // sett kalkulator i hexmodus for å regne. Binert går bakover på kalkulatoren, og markeres som null og en. Går alltid opp i 16. 0100101

   const keys =  Object.keys(EWeekDays); // dette gir oss alle nøkkelene i objectet EWeekdays

   printOut("keys:" + keys.join(", ")); // printer ut alle nøklene

   const values = Object.values(EWeekDays); //gir oss alle verdiene i objektet Eweekdays
   printOut("values: " + values.join(" , ")); //printer ut alle verdiene i nøkklene

   let valueKeys = Object.entries(EWeekDays[keys[7]]); //Her ser vi på verdien til nøkkelen workdays[7].
   printOut("valueKeys:" + valueKeys.join(" , ")); // her printer vi verdiene til workdays([7]. 

//Går igjennom alle nøkklene til objectene i Eweekdays. 

for (let index = 0; index < keys.length; index++) { // Henter ut navnet på nøkkelen i objektet
    const key = keys[index];  // henter ut alle verdiene til nøkkelen over (f.eks. weekday 1: 0X01, Mandag)
    text = key;
   
        
    const weekDayObject = EWeekDays[key]; //henter vi objektet til nøkkelen (F.eks weekday 1)
    const weekDayObjectKeys = Object.keys(weekDayObject); // henter vi ut alle nøkelene til f.eks weekday 1.

    for (let i = 0; i < weekDayObjectKeys.length; i++) {  // her henter vi ut f.eks value
            const keyObjectKey = weekDayObjectKeys[i] //henter ut valuen
            const KeyObjectValue = weekDayObject[keyObjectKey];//her henter vi nøkkelen til f.eks 0X01.
            text += " " + keyObjectKey + ": " + KeyObjectValue;
        }
        printOut(text);
    }
  

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Create an array that contains 35 random numbers from 1 to 20 (inclusive). Sort these arrays in ascending
and descending order. To get full credit for this task, it must be solved with "callback" functions that you
use in the .sort(...) method of this array*/

const randomNumbers = Array.from({ length: 35 }, () => Math.floor(Math.random() * 20) + 1);

// Sort in ascending order
printOut("Stigende rekkefølge: " + randomNumbers.sort((a, b) => a - b).join(", "));

// Sort in descending order
printOut("Synkende rekkefølge: " + randomNumbers.sort((a, b) => b - a).join(", "));


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Based on part 8, print out how many times the different numbers occur in the array. First, print the
numbers and their frequency, then print the frequencies and which numbers they correspond to. You must
print the most frequent ones first, and if there are multiple numbers where the frequency is the same, then
it should again be sorted from the smallest to the largest number.*/

/*
//Calculate the frequency
const frequencyMap = randomNumbers.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1; // Increment the count for each number
    return acc;
}, {});

// Convert the frequency map to an array to sort
const frequencyArray = Object.entries(frequencyMap).map(([num, freq]) => ({
    number: parseInt(num),
    frequency: freq,
}));

// Sort by frequency (descending) and by number (ascending) for ties
frequencyArray.sort((a, b) => {
    if (b.frequency === a.frequency) {
        return a.number - b.number; // Sort by number if frequencies are the same
    }
    return b.frequency - a.frequency; // Sort by frequency (descending)
});

//  Print numbers and their frequency
printOut("Number frequencies:");
for (const { number, frequency } of frequencyArray) {
    printOut(`Number: ${number}, Frequency: ${frequency}`);
}

//  Print frequencies and their corresponding numbers
printOut("\nFrequencies and corresponding numbers:");
const groupedByFrequency = frequencyArray.reduce((acc, { number, frequency }) => {
    if (!acc[frequency]) acc[frequency] = [];
    acc[frequency].push(number);
    return acc;
}, {});

for (const [freq, nums] of Object.entries(groupedByFrequency).sort((a, b) => b[0] - a[0])) {
    printOut(`Frequency: ${freq}, Numbers: ${nums.sort((a, b) => a - b).join(", ")}`);
}
*/

const freq = {};
for(let i = 0; i < randomNumbers.length; i++) {
    const value = randomNumbers[i];
    if(freq[value]){ //undefined er false
        freq[value]++;
    } else {
   freq[value] = 1;
}
}
const freqKeys = Object.keys(freq);
freqKeys.sort(sortFreq);   //sorterer listen med call-back funksjon

    function sortFreq(aValue, aValue2){ //sorterer listen basert på frequens
    const freq1 = freq[aValue];
    const freq2 = freq[aValue2];
    return freq2 - freq1; // settes slik for å få synkene 
    }



//hent ut nøklene til objectet / alle tall og frequenser
    text = ""; //klargjør teksten som skal skrives ut
    for(let i = 0; i < freqKeys.length; i++){
    const freqKey = freqKeys[i]; //hjelpevariabler for nøkkelesn
    const freqValue = freq[freqKey]; //hjelpevariabel for verdien
    text += freqKey + "; " + freqValue + ", "; // tall og frekvens i teksten
    }

printOut(text) //skriver ut teksten



/*

    const nøkkelObjectet = {};
    const random = math.ceil(math.random()*20);
    nøkkelObjectet[random] = 0
}


printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!
Create an array that contains rows and columns (2 dimensions, 5x9). Start with an empty array. Use "for"
loops to create rows and columns, respectively. In each "cell," create a text that shows which row and
column the "cell" is in. Then create two new sets of "for" loops to print the array itself.
○ Hint: For each round in the loop for the rows, you create a column. And for each round in the
columns, you write the "cell" value*/

//  Create a 5x9 array with row and column information
const rows = 5;
const cols = 9;
const twoDimensionalArray = [];

// Fill the array with values
for (let row = 0; row < rows; row++) {
    const currentRow = [];
    for (let col = 0; col < cols; col++) {
        currentRow.push(`Row ${row + 1}, Col ${col + 1}`);
    }
    twoDimensionalArray.push(currentRow);
}

// Print the array
printOut("Two-Dimensional Array:");
for (const row of twoDimensionalArray) {
    printOut(row.join(" | ")); // Print each row with " | " separating columns
}

printOut(newLine);


// pilfunksjoner: ((argunenter) => {body})
//ikke navngitte funksjoner: function(argumenter){body}
//vanlige navngitte funksjoner: function navn(argumenter){body}