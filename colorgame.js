console.log("connected")

// Generates an array of random RGB values
function generateRGBValues (){
	x = [];
	i = 0
	while(i<3) {
		x.push(Math.floor(Math.random() * Math.floor(255)));
		i++;
	}
	return x;
}

//radio buttons for difficulty and new game
var easyMode = document.getElementById("easy difficulty");
var hardMode = document.getElementById("hard difficulty");
var resetGame = document.getElementById("reset");



//------------------------
//Make all of this into a for loop 
//  I am reusing var's for no reason and it's wasteful
// For Square 1 colorset
var rgbValues1 = generateRGBValues();
var RGBparse = rgbValues1[0] + "," + rgbValues1[1] + "," + rgbValues1[2];
var square1 = document.getElementById("01");
square1.style.backgroundColor = "rgb(" + RGBparse + ")";

//For Square 2 colorset
var rgbValues2 = generateRGBValues();
var RGBparse = rgbValues2[0] + "," + rgbValues2[1] + "," + rgbValues2[2];
var square1 = document.getElementById("02");
square1.style.backgroundColor = "rgb(" + RGBparse + ")";

//For Square 3 colorset
var rgbValues3 = generateRGBValues();
var RGBparse = rgbValues3[0] + "," + rgbValues3[1] + "," + rgbValues3[2];
var square1 = document.getElementById("03");
square1.style.backgroundColor = "rgb(" + RGBparse + ")";

//----------------------
//For loop to replacethe above code
// var rgbValues1 = generateRGBValues();
// var rgbValues2 = generateRGBValues();
// var rgbValues3 = generateRGBValues();
// var RGBArray = [rgbValues1,rgbValues2,rgbValues3];
// for (var i = 0; i < RGBArray.length; i++){
// 	var RGBparse = RGBArray[this][0] + "," + RGBArray[this][1] + "," + RGBArray[this][2];
// 	var square1 = document.getElementById
// }

//-----------------------
//For Hover Animations on the squares and for the clicking of squares
var squareAnimations = document.querySelectorAll(".colored-area");

for (var x = 0; x < squareAnimations.length; x++){
	squareAnimations[x].addEventListener("mouseover", function(){
		this.classList.toggle("colored-area-hover");
	});
	squareAnimations[x].addEventListener("mouseleave", function(){
		this.classList.toggle("colored-area-hover");
	});
}

//-----------------------
//For detrmining the winning square
//Determines a random index form the array "RGBArray"
var RGBArray = [rgbValues1,rgbValues2,rgbValues3];
var winner = Math.floor(Math.random() * Math.floor(3));

//Set the H1 element in the title banner to match the winner 
var clue = document.getElementById("winner").innerHTML = "RGB(" + RGBArray[winner] + ")";


for (var  x = 0; x < squareAnimations.length; x++){
	squareAnimations[x].addEventListener("click", function(){
		var PlayerClicks = this.style.backgroundColor;
		console.log(PlayerClicks);
		console.log(RGBArray[winner]);
	
		if (PlayerClicks == "rgb(" + RGBArray[winner][0] + ", " + RGBArray[winner][1] + ", " + RGBArray[winner][2] + ")"){
		console.log("We have a winner");
		document.querySelector(".banner").style.backgroundColor = "rgb(" + RGBArray[winner][0] + ", " + RGBArray[winner][1] + ", " + RGBArray[winner][2] + ")";
		document.querySelector("#Annoucement").innerHTML = "We have a Winner!";
		}
		else{
			console.log("Nope, try again");
			document.querySelector("#Annoucement").innerHTML = "Nope, try again...";
		}



	});
// }
//checks the color of the square the player against the winning rgb value
// if (PlayerClicks.style.backgroundColor == "rgb(" + RGBArray[winner] + ")"){
// 	console.log("We have a winner");
// }
// else{
// 	console.log("Nope, try again");
}
// generates a random number from 0 to 255 for the color game
//Math.floor(Math.random() * Math.floor(255));