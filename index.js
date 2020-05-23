var randomNumber1 = Math.floor(Math.random()* 6 + 1 );

var randomImage ="dice" + randomNumber1 + ".png"; //dice1.png -dice2.png

var randomImageSource = "images/"+randomImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6 + 1 );

var randomImageSource2 ="images/dice"+ randomNumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


var randomNumberSum= randomNumber1 + randomNumber2;

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = randomNumberSum ;
}else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML = randomNumberSum;
}else if (randomNumber1=randomNumber2) {
  document.querySelector("h1").innerHTML = randomNumberSum;
}








// function createRandomNumber1(){
// var randomNumber1 = Math.floor(Math.random() * 6 + 1 );
// console.log(randomNumber1);
// if (randomNumber1 == 1){
//   document.getElementsByClass("img1")[0].setAttribute("src", "images/dice1.png");
// }
// else if (randomNumber1 ==2) {
//   document.getElementsByClass("img1")[0].setAttribute("src", "images/dice2.png");
// }
// else if(randomNumber1 ==3){
//     document.getElementsByClass("img1")[0].setAttribute("src", "images/dice3.png");
// }
//
// else if (randomNumber1 ==4) {
//   document.getElementsByClass("img1")[0].setAttribute("src", "images/dice4.png");
// }
// else if (randomNumber1 ==5) {
//   document.getElementsByClass("img1")[0].setAttribute("src", "images/dice5.png");
// }
// else if (randomNumber1 ==6) {
//   document.getElementsByClass("img1")[0].setAttribute("src", "images/dice6.png");
// }
// }
//
// function createRandomNumber2(){
//
// if (randomNumber2 == 1){
//   document.getElementsByClass("img2")[0].setAttribute("src", "images/dice1.png");
// }
// else if (randomNumber2 ==2) {
//   document.getElementsByClass("img2")[0].setAttribute("src", "images/dice2.png");
// }
// else if(randomNumber2 ==3){
//     document.getElementsByClass("img2")[0].setAttribute("src", "images/dice3.png");
// }
//
// else if (randomNumber2 ==4) {
//   document.getElementsByClass("img2")[0].setAttribute("src", "images/dice4.png");
// }
// else if (randomNumber2 ==5) {
//   document.getElementsByClass("img2")[0].setAttribute("src", "images/dice5.png");
// }
// else if (randomNumber2 ==6) {
//   document.getElementsByClass("img2")[0].setAttribute("src", "images/dice6.png");
// }
// }
//
// createRandomNumber1();
// createRandomNumber2();
//
