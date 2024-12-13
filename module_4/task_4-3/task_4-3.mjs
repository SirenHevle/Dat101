"use strict";
/*
const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];*/

//const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!
Create code in cmbTask1CalculateClick to calculate the perimeter and area of the given rectangle.*/
const cmbTask1Calculate = document.getElementById("cmbTask1Calculate");
cmbTask1Calculate.addEventListener("click", cmbTask1CalculateClick);
function cmbTask1CalculateClick() {
  const txtRectHeight = document.getElementById("txtRectHeight");
  const txtRectWidth = document.getElementById("txtRectWidth");
  const height = Number(txtRectHeight.value);
  const width = Number(txtRectWidth.value);
console.log("height = " + height);
console.log("width= " + width);

const perimeter = (height + height + width + width);
const area = (height * width);
console.log("Omkrets: " + perimeter + "Areal: " + area);

console.log("Bredde er av typen" + typeof width); //undefined
console.log("Høyde er av typen" + typeof height); // undefined

const txtTask1Output = document.getElementById("txtTask1Output");
txtTask1Output.innerHTML = "Omkrets: " + perimeter + "&nbsp; areal: " + area;

}


//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!
Create an event function that is triggered if you press a key while txtTask2Word has keyboard focus.
Every time the user presses "return" or "enter", add the word to the task2Words array and print how
many words and all the words in txtTask2Output. Clear the input field every time the user presses
"enter" or "return".
○ Tip: txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress)*/

const txtTask2Word = document.getElementById("txtTask2Word");
txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress);

let task2Words = [];
const txtTask2Output = document.getElementById("txtTask2Output");

  function txtTask2WordKeyPress(aEvent) {
    const key = aEvent.key;
      switch(key) {
        case "Enter":
        const words = txtTask2Word.value.split(" "); //splitt for å få med alle ordene
        txtTask2Word.value = "";
        task2Words = task2Words.concat(words);
        txtTask2Output.innerHTML = "Number of words:" + task2Words.length + "<br>" + task2Words.join(" ");
      console.log(task2Words);
          break;
      
    }
  }
  
//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!
Create a click event function to check which of the checkboxes are selected. And print the result in
txtTask3Output

const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");
cmbTask3CheckAnswer.addEventListener("click", cmbTask3CheckAnswerClick);
const txtTask3Output = document.getElementById("textTask3Output");

  let text = ""; //tømmer teksten
  function cmbTask3CheckAnswerClick() {
    const chkTask3 = document.getElementsByName("chkTask3");
      for( let i = 0; 1 < chkTask3.length; i++) {
      const checkBox = chkTask3[i];
      if(checkBox.checked) {
        const value = checkBox.value;
        text += "Du har valgt nummer " + value + ".<br/>"

      }
  }
  txtTask3Output.innerHTML = text;
  text = ""; // tømmer teksten
  }
*/

const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");
cmbTask3CheckAnswer.addEventListener("click", cmbTask3CheckAnswerClick);
const txtTask3Output = document.getElementById("txtTask3Output");
let text = "";

function cmbTask3CheckAnswerClick() {
    // finner alle check boxene med id-navnet
    const chkTask3 = document.getElementsByName("chkTask3");
    

    // Loop gjennom checkboxene for å finne alle
    for (let i = 0; i < chkTask3.length; i++) {
    
      const checkBox = chkTask3[i];
        if (checkBox.checked) {
            const value = checkBox.value;
            text += "Du har valgt nummer " + value + ".<br/>";
        }
    }

    // legger resulatet tilbake i iden
    txtTask3Output.innerHTML = text;

    // tømmer teksten
    text = "";
}


//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!
Use a for-loop to add "radio" buttons to the divTask4Cars element. Get the values from the CarTypes
array. Print the selected car in txtTask4Output.*/


// lag Array ned bilnavn
const CarTypes = ["Aston Martin", "Bentley", "Alfa Romeo", "Ferrari", "subaru", "Porche", "Tesla", "Toyota", "Renault", "Peugeot", "Suzuki", "Mitsubishi", "Nissan"];

//hent dokumentet hvor div skal legges
const divTask4Cars = document.getElementById("divTask4Cars");

// lag radio knapp med loop
for (let i = 0; i < CarTypes.length; i++) {
    // radio knapp
    const radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.name = "car"; // Samme navn på alle for å funk
    radioButton.value = CarTypes[i];

    // Lag label for radioknapp
    const label = document.createElement("label");
    label.textContent = CarTypes[i]; // Setter bilmerke og knapp sammen

    // event listener for å velge bilmerke
    radioButton.addEventListener("change", function () {
        const output = document.getElementById("txtTask4Output");
        output.textContent = "Your favorite is: " + this.value;
    });

    // legg label og knapp til div
    divTask4Cars.appendChild(radioButton);
    divTask4Cars.appendChild(label);

    // Pause for bedre visning
    divTask4Cars.appendChild(document.createElement("br"));
}




//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!
Create an event function that occurs when the element selectTask5Animals changes value (change),
and print the user's selection in the txtTask5Output element.
*/

// lag drop-down og hent elementer
const selectTask5Animals = document.getElementById("selectTask5Animals");
const txtTask5Output = document.getElementById("txtTask5Output");

// Event funksjon som trigges når du trykke
selectTask5Animals.addEventListener("change", function () {
    const selectedAnimal = selectTask5Animals.options[selectTask5Animals.selectedIndex].textContent; // Henter valgt dyr
    txtTask5Output.textContent = `Selected animal: ${selectedAnimal};` // viser valgt verdi
});



//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!
Take all the names from the GirlsNames array and add them to the selectTask6Girls element.
Create an event function in the same way as in task 5 and print the name the user selects in
txtTask6Output.*/

// Jentenavn array
const GirlsNames = [
  "Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"
];

// valgt element og output
const selectTask6Girls = document.getElementById("selectTask6Girls");
const txtTask6Output = document.getElementById("txtTask6Output");

// alle navn fra array i dropdown
GirlsNames.forEach((name) => {
  const option = document.createElement("option");
  option.value = name;
  option.textContent = name; // display navn
  selectTask6Girls.appendChild(option); // beskrivelse i dropbox
});

// event funksjon for valgt navn
selectTask6Girls.addEventListener("change", function () {
  const selectedName = selectTask6Girls.value; // hent valgt navn
  txtTask6Output.textContent = "Selected name: " + selectedName; // vis frem valgt navn
});





//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!
Use the data from filmtittel (movie title), filmsjanger (movie genre), filmregissør (movie
director), and filmrate (movie rating) and fill in the HTML table every time the user clicks the
"cmbAddMovie" button. Fill in the data from the MovieGenre array in selectMovieGenre.*/
