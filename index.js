var randomNumber1=Math.random();
randomNumber1=(randomNumber1*6)+1;
randomNumber1=Math.floor(randomNumber1);
var d1="./images/dice"+randomNumber1+".png";


document.querySelector("img.img1").setAttribute("src",d1);

var randomNumber2=Math.random();
randomNumber2=(randomNumber2*6)+1;
randomNumber2=Math.floor(randomNumber2);

var d2="./images/dice"+randomNumber2+".png";
document.querySelector("img.img2").setAttribute("src",d2);

if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins"
}
else if(randomNumber2<randomNumber1){
    document.querySelector("h1").innerHTML="Player 1 wins"
}
else{
     document.querySelector("h1").innerHTML="Draw!"
}