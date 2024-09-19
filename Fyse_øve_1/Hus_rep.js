"use strict"

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//FJell
ctx.beginPath(); //deklarerer at vi skal begynne å tegne

ctx.moveTo(0, 100); // setter en start på hvor vi skal begynne å tegne  x og y verdi
ctx.lineTo(200, 270); // start og sluttpungt til streken
ctx.lineTo(400, 100);
ctx.lineTo(700, 300);
ctx.strokeStyle = "grey";
ctx.stroke(); // her tegner vi streken på siden !! må huskes

// sol
ctx.beginPath();
ctx.arc(150, 80, 35, 0, 2 * Math.PI); // gang med to for å få en sirkel
ctx.strokeStyle = "yellow";
ctx.fillStyle = "yellow";
ctx.fill();
ctx.stroke();

// hus1
ctx.beginPath();
ctx.fillStyle = "red";
ctx.fillRect(420, 370, 150, 150);
ctx.fill();
ctx.stroke();

</script>

