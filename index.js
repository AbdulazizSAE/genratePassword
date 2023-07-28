const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let genPass = document.getElementById("gen-pass")
let rect1 = document.getElementById("rec1")
let rect2 = document.getElementById("rec2")

let passwordLength = 12

function randomCharacter(){
  let randomIndex = Math.floor(Math.random()*characters.length)
  return characters[randomIndex]
}

function genratePass(){
    let pass1 = ""
    for(let i=0; i<passwordLength; i++){
        pass1+= randomCharacter()
    }
    return rect1.textContent = pass1
}


function genratePass2(){
  let pass2 = ""
  for (let i=0; i<passwordLength; i++){
    pass2 += randomCharacter()
  }
  return rect2.textContent = pass2
}






