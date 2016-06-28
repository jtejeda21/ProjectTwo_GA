window.onload = function() {
	document.querySelector('#reset-button').addEventListener('click', function(startUp) {
		console.log(startUp);
		console.log(this);
		prompt("Player One, please type your name");
	})
}


//when new game button is clicked, it will prompt each 
//player to enter their name
//game begins with player one defaulting to x


var arrai = ['A1','A2','A3','B1','B2','B3','C1','C2','C3']
var x = [""]
var y = [""]









// CONSTRUCTOR FUNCTIONS TRIAL ///////////////////////////
// var Tictac = {
// 	playerOne = "",
// 	playerTwo = "",
// 	x = "x",
// 	o = "o",
// 	threeConnect = false,
// 	winner = false,

// }


