function play(){
    var randomNumber1=Math.floor(Math.random()*6+1);
    var firstDice="images/dice"+randomNumber1+".png";
    document.querySelector(".img1").setAttribute("src",firstDice);
    //dice 2
    var randomNumber2=Math.floor(Math.random()*6+1);
    var secondDice="images/dice"+randomNumber2+".png";
    document.querySelector(".img2").setAttribute("src",secondDice);
//win check
if(randomNumber1>randomNumber2)
return 1;
else if(randomNumber2>randomNumber1)
return 2;
else
return 0;
    
}
var check=play();
if(check==1)
document.querySelector("h1").innerHTML="💥Player1 wins";
else if(check==2)
document.querySelector("h1").innerHTML="Player2 wins 💥";
else
document.querySelector("h1").innerHTML="💫 Draw 💫";
