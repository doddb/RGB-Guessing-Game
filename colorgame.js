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

function hoverAnimations(){
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
}


function tileGenerater(x){
	//Takes in the difficulty setting and applies random rgb colors to the 
	//		tile using the generateRGBValues function
	//		let x == onEasy

	if (x == true){

		// For Square 1 colorset
		var RGBparse = rgbValues1[0] + "," + rgbValues1[1] + "," + rgbValues1[2];
		square = document.getElementById("01");
		square.style.backgroundColor = "rgb(" + RGBparse + ")";

		//For Square 2 colorset
		var RGBparse = rgbValues2[0] + "," + rgbValues2[1] + "," + rgbValues2[2];
		square = document.getElementById("02");
		square.style.backgroundColor = "rgb(" + RGBparse + ")";

		//For Square 3 colorset
		var RGBparse = rgbValues3[0] + "," + rgbValues3[1] + "," + rgbValues3[2];
		square = document.getElementById("03");
		square.style.backgroundColor = "rgb(" + RGBparse + ")";

		// For setting the 4-6 squares back to neutral color in the event of a difficulty switch
		square = document.getElementById("04");
		square.style.backgroundColor = "#FAFAFA";

		square = document.getElementById("05");
		square.style.backgroundColor = "#FAFAFA";

		square = document.getElementById("06");
		square.style.backgroundColor = "#FAFAFA";
	}

	else if(x == false){

		// For Square 1 colorset
		var RGBparse = rgbValues1[0] + "," + rgbValues1[1] + "," + rgbValues1[2];
		var square = document.getElementById("01");
		square.style.backgroundColor = "rgb(" + RGBparse + ")";

		//For Square 2 colorset
		var RGBparse = rgbValues2[0] + "," + rgbValues2[1] + "," + rgbValues2[2];
		square = document.getElementById("02");
		square.style.backgroundColor = "rgb(" + RGBparse + ")";

		//For Square 3 colorset
		var RGBparse = rgbValues3[0] + "," + rgbValues3[1] + "," + rgbValues3[2];
		square = document.getElementById("03");
		square.style.backgroundColor = "rgb(" + RGBparse + ")";

		// For Square 4 colorset
		var RGBparse = rgbValues4[0] + "," + rgbValues4[1] + "," + rgbValues4[2];
		square = document.getElementById("04");
		square.style.backgroundColor = "rgb(" + RGBparse + ")";

		//For Square 5 colorset
		var RGBparse = rgbValues5[0] + "," + rgbValues5[1] + "," + rgbValues5[2];
		square = document.getElementById("05");
		square.style.backgroundColor = "rgb(" + RGBparse + ")";

		//For Square 6 colorset
		var RGBparse = rgbValues6[0] + "," + rgbValues6[1] + "," + rgbValues6[2];
		square = document.getElementById("06");
		square.style.backgroundColor = "rgb(" + RGBparse + ")";

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

	}
}

function easyMode(){
	//This is code to reset back to easy mode.(3 squares)

		var numOfSquares = document.querySelectorAll(".colored-area");

		hoverAnimations();
		tileGenerater(onEasy);

		//-----------------------
		//For detrmining the winning square
		//Determines a random index form the array "RGBArray"
		var RGBArray = [rgbValues1,rgbValues2,rgbValues3];
		var winner = Math.floor(Math.random() * Math.floor(3));


		//Set the H1 element in the title banner to match the winner 
		var clue = document.getElementById("winner").innerHTML = "RGB(" + RGBArray[winner] + ")";


		for (var  x = 0; x < numOfSquares.length; x++){
			numOfSquares[x].addEventListener("click", function(){
				var PlayerClicks = this.style.backgroundColor;
				//debug lines to show the rgb value of what the player clicked vs the winner
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
		
		};

}





function hardMode(){

	var numOfSquares = document.querySelectorAll(".colored-area");
	tileGenerater(onEasy);
	//-----------------------
	//For detrmining the winning square
	//Determines a random index form the array "RGBArray"
	var RGBArray = [rgbValues1,rgbValues2,rgbValues3,rgbValues4,rgbValues5,rgbValues6];
	var winner = Math.floor(Math.random() * Math.floor(6));


	//Set the H1 element in the title banner to match the winner 
	var clue = document.getElementById("winner").innerHTML = "RGB(" + RGBArray[winner] + ")";


	for (var  x = 0; x < numOfSquares.length; x++){
		numOfSquares[x].addEventListener("click", function(){
			var PlayerClicks = this.style.backgroundColor;
			//debug lines to show the rgb value of what the player clicked vs the winner
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
	};


}

//Sets random values for each color
var rgbValues1 = generateRGBValues();
var rgbValues2 = generateRGBValues();
var rgbValues3 = generateRGBValues();
var rgbValues4 = generateRGBValues();
var rgbValues5 = generateRGBValues();
var rgbValues6 = generateRGBValues();

//radio buttons for difficulty and new game
var easyButton = document.getElementById("easy difficulty");
var hardButton = document.getElementById("hard difficulty");
var resetGame = document.getElementById("reset");

//Starts the game off in easy mode
var onEasy = true;
easyMode();


//Switches the game back to easy mode
easyButton.addEventListener("click", function(){
	if(onEasy == false){
		document.querySelector(".banner").style.backgroundColor = "#000000"
		document.querySelector("#Annoucement").innerHTML = "Pick The Color That Matches";
		//sets global difficulty
		onEasy = true;
		easyMode();
	}

});

//Changes the game to hard mode
hardButton.addEventListener("click", function(){
	if(onEasy == true){
		document.querySelector(".banner").style.backgroundColor = "#000000"
		document.querySelector("#Annoucement").innerHTML = "Pick The Color That Matches";
		//sets global difficulty
		onEasy = false;
		hardMode();
	}

});

// Code to reset the game.
resetGame.addEventListener("click", function(){
	
	if(onEasy == true){
		document.querySelector(".banner").style.backgroundColor = "#000000"
		document.querySelector("#Annoucement").innerHTML = "Pick The Color That Matches";
		//sets global difficulty
		onEasy = true;
		easyMode();
	}

	else if(onEasy == false){
		document.querySelector(".banner").style.backgroundColor = "#000000"
		document.querySelector("#Annoucement").innerHTML = "Pick The Color That Matches";
		//sets global difficulty
		onEasy = false;
		hardMode();
	}
});
