randomNumber1 = Math.floor(6*Math.random() + 1);
if(randomNumber1===1) randomNumber1="dice1.png" ;
if(randomNumber1===2) randomNumber1="dice2.png" ;
if(randomNumber1===3) randomNumber1="dice3.png" ;
if(randomNumber1===4) randomNumber1="dice4.png" ;
if(randomNumber1===5) randomNumber1="dice5.png" ;
if(randomNumber1===6) randomNumber1="dice6.png" ;
document.firstElementChild.lastElementChild.querySelector("div div img").setAttribute("src",randomNumber1);

randomNumber2 = Math.floor(6*Math.random() + 1);
if(randomNumber2===1) randomNumber2="dice1.png" ;
if(randomNumber2===2) randomNumber2="dice2.png" ;
if(randomNumber2===3) randomNumber2="dice3.png" ;
if(randomNumber2===4) randomNumber2="dice4.png" ;
if(randomNumber2===5) randomNumber2="dice5.png" ;
if(randomNumber2===6) randomNumber2="dice6.png" ;
document.firstElementChild.lastElementChild.firstElementChild.querySelector(".img2").setAttribute("src", randomNumber2);

if(randomNumber1>randomNumber2){
    result = "🚩Player 1 Wins!";
}
if(randomNumber1<randomNumber2){
    result = "Player 2 Wins!🚩";
}
if(randomNumber1===randomNumber2){
    result = "Draw!";
}

document.firstElementChild.lastElementChild.firstElementChild.querySelector("h1").innerHTML = result;