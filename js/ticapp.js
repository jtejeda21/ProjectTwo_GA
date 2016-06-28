window.onload = function() {
	//when new game button is clicked, it will prompt each 
	//player to enter their name
	document.querySelector('#start-button').addEventListener('click', function() {
	var name1 = prompt("PLAYER 1! What's your name?", "Name");
 	var name2 = prompt("PLAYER 2! Whats your name?", "Name");
 	document.getElementById("playerOne").innerHTML = name1;
 	document.getElementById("playerTwo").innerHTML = name2;
})
}

var playerx = "x"
var playero = "o"
// var xWin = []
// var yWin = []

//game begins with player one defaulting to x
//add event listener to id "1-9" 'click'
//did x or O click

	
var gameOn = function() {

}

// 	document.querySelectorAll(".exo").addEventListener('click', function() {
// 	this.classList.add("ex")
// })










// NOT IN USE /////////////////////////////////////////////////////////////////////////////////////////////



 // 	document.querySelector('#start-button').addEventListener('click', function() {
	// var name2 = prompt("Player 2! Welcome to Tic Tac Toe! Whats your name?", "Name");
 // 	document.getElementById("playerTwo").innerHTML = name;
// })


// 	var enter = prompt("Player One, please type your name");
	// 	var changeName = document.getElementById('#playerOne');
	// 	enter.appendChild(changeName);
	// })



// CONSTRUCTOR FUNCTIONS TRIAL ///////////////////////////
// var Tictac = {
// 	playerOne = "",
// 	playerTwo = "",
// 	x = "x",
// 	o = "o",
// 	threeConnect = false,
// 	winner = false,

// }


