"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/

let wakeUpTime = 8;

if(wakeUpTime == 7) {

  printOut("Du kan ta Bussen til skolen") 
} 
else if(wakeUpTime === 8){
  printOut("Wake Up Time = 8")
  printOut("Du kan ta toget til skolen")
} 
else {
  printOut("Du må ta bilen")
}
printOut(newLine);
 

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let numbz = 0;

if(numbz > 0){
  printOut("positive");

} else if(numbz < 0){
  printOut("Negative");
}
else{
  printOut("task 5: value is 0")
printOut("value is zero");
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Imagine you have a photo editing profession. And you have a website where people can upload pictures
for you to work on. However, the images must be 4MP or larger, if they are smaller, you cannot use them.
Create a variable that holds a generated random integer between 1 and 8 (inclusive). Use this variable to
simulate the uploaded image size and print it. Then create an if statement that prints out “Thank you” if the
size is equal to or greater than the limit. Otherwise, print out "The image is too small".*/

let imageSizes = Math.floor(Math.random() * 8) + 1;
const imagmax = 8;
const imagmin = 4;
printOut("uploaded image size:" + imageSizes.toString() + "MP")

if(imageSizes < imagmax) {
  printOut("Thank You!");
} 
else if(imageSizes > imagmin){

  printOut("The image is to Small");
} 


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Expand part 6 to exclude if the image size is larger or equal to 6MP, then print out “Image is too large”*/


let imageSize = Math.floor(Math.random() * 8) + 1;
const imagesixemaz = 6;
const imagesizeminimum = 4;

printOut("uploaded image size:" + imageSize.toString() + "MP")

if(imagesizeminimum > imageSize) {
  printOut("The Image is too small");
} 
else if(imagesixemaz < imageSize){

  printOut("To Large");
} else {
  printOut("Thank You!")
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/*Use this code:
const monthList =["January", "February", "Mars", "April", "Mai",
"June", "July", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
Print if monthName contains “r”: “You must take vitamin D” else “You do not need to take vitamin D” */

const monthList =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//const dayOfMonths = [31,28,31,30,31,30,31,31,30,31,30,31];
const noOfMonth = monthList.length;

const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
printOut("valgt måned er: " + monthName);

if (monthName.includes("r")){
  printOut("Take your vitamin D");
} else{
  printOut("You do not need to take Vitamin D");
} 
 
 


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/*Expand exercise 8 to print how many days there are in the current month. And do not use date object */

//const indexOfMonth = monthList.indexOf(monthName);
//const dayyss = dayOfMonths[indexOfMonth];
//printOut("Antall dager i valgte måneder:" + monthName + " : " + dayyss + "dager");//



if (monthName === "February") {
  printOut("Det er 28 dager i valgt måned");

} else if (monthName === "April" || monthName === "June" || monthName === "September"  || monthName === "November") {
  printOut("det er 30 dager i valgt måned");
}
 else{
  printOut("det er 31 dager i valgt måned");

}


printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Imagine you have an art gallery, but you need to refurbish the premises, so you close the gallery from
March through May, but in April you have temporary premises in the building next door. Use the month
constant in exercise 8 to inform the status of your gallery in that month.*/

if(monthName === "April") {
  printOut("Vi har åpent galleri i nabobygget");
}
else if(monthName === "May" || "March") {
  printOut("Galleriet er dessverre stengt grunnet oppussing");
}
else{
  printOut("Galleriet er åpent");
}



printOut(newLine);
