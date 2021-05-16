// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");
var lwrcaseEl = document.getElementById('lowerc');
var upprcaseE1 = document.getElementById("upperc");
var numberE1 = document.getElementById("number");
var symbolE1 = document.getElementById("symbol");
var password = document.getElementById("password");
var charactersE1 = document.getElementById("characters").value;



var lwrcase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upprcase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var number = ["1","2","3","4","5","6","7","8","9"]
var symbol = ["!","@","#","$","%","^","&","*","?","<",">"]

// Write password to the #password input
/////////////wanted to use for better funtion with less if statements
/*
var haslwr = lwrcaseEl.checked;
var hasuppr = upprcaseE1.checked;
var hassym = symbolE1.checked;
var hasnmbr = numberE1.checked;
*/

/////////////wanted to use for a better function with less if statements
/*function getlwr(){
  return (upprcase [Math.floor(Math.random() * upprcase.length)])
}
function getuppr() {
  return (upprcase [Math.floor(Math.random() * upprcase.length)])
}
function getnmbr() {
  return (number [Math.floor(Math.random() * number.length)])
}
function getsym() {
  return (symbol [Math.floor(Math.random() * number.length)])
} */



function writePassword() {
  if (lwrcaseEl.checked === true) {
   password.append(lwrcase [Math.floor(Math.random() * lwrcase.length)])
  }
  if (upprcaseE1.checked === true) {
    password.append(upprcase [Math.floor(Math.random() * upprcase.length)])
    
  }
  if (numberE1.checked === true) {
    password.append(number [Math.floor(Math.random() * number.length)]);
  }
  if (symbolE1.checked === true) {
    password.append(symbol [Math.floor(Math.random() * number.length)]);
  }
} 

/////////count get this to work
/*
for (var i = 0; i < charactersE1.value; i++) {
  generateBtn.addEventListener("click", function(){
    writePassword()
  });
  
}
*/
console.log(writePassword())

// Add event listener to generate button
 generateBtn.addEventListener ("click",console.log("hello"));
