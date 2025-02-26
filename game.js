const prompt = require("prompt-sync")();
const choices = ["rock", "paper", "scissor"];

let draw = 0;
let youwin = 0;
let compwin = 0;

for (i = 0;i<3;i++){
console.log("Insert Your choice (rock , paper , scissor)")
let yourchoice = prompt("Give your choice: ").toLowerCase();
while(!(choices.includes(yourchoice.trim().toLowerCase()))){
    console.log("Invalid choice ")
    yourchoice = prompt("Give your choice: ").trim().toLowerCase();
}
let comp_choice = Math.floor(Math.random() * choices.length);
let comp = choices[comp_choice];
console.log(`Computer choice: ${comp}`) // to check computer choice 
if(yourchoice === comp){
    draw = draw+1;
}else if((yourchoice === "rock" && comp === "paper") || (yourchoice === "paper" && comp ==="scissor") || (yourchoice ==="scissor" && comp==="rock")){
    compwin=compwin+1;
}else{
    youwin= youwin+1
}
}

if(compwin == youwin){
    console.log("Draw");
}else if(compwin>youwin){
    console.log("Computer Win");
}else{
    console.log("You win");
}