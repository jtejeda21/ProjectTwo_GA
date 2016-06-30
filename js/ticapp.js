window.onload = function() {
	// when new game button is clicked, it will prompt each 
	// player to enter their name then append player names to the board
	document.querySelector('#start-button').addEventListener('click', function() {
	var name1 = prompt("PLAYER 1! What's your name?", "Name ");
 	var name2 = prompt("PLAYER 2! Whats your name?", "Name ");
 	document.getElementById("playerOne").innerHTML = name1 + " is the X\'s";
 	document.getElementById("playerTwo").innerHTML = name2 + " is the O\'s";
})
}
// make tiles clickable
// Need to prevent changing a tile that’s already set.
var tiles = document.querySelectorAll('.exo')
	for (i = 0; i < tiles.length; i++) {
		tiles[i].onclick = function() {
			if(this.innerHTML === ''){
				if (currentPlayer === 'X') {
					this.innerHTML = 'X'
				} else {
					this.innerHTML = 'O'
			  	}
				console.log(currentPlayer)
				takeTurns()
				console.log(currentPlayer)
			} else {
				console.log('already clicked')
			}
			
		}
	}

var tileWin = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], 
			  [1,4,7], [2,5,8], [0,4,8], [2,4,6]];



// check my x array, does the tileWin at the 
// position im checking have those three numbers?
// xarray.indexOf(tileWinThatWereOninLoop[0])
// xarray.indexOf(tileWinThatWereOninLoop[1])
// xarray.indexOf(tileWinThatWereOninLoop[2])

var currentPlayer = 'X';

//if innerhtml is not blank add
// if current player is 1, the tiles innerhtml = x
// 	currentPlayer =2
// else 
// 	innerhtml = o
// 	currentPlayer =1

var takeTurns = function() {
    if (currentPlayer == 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
      } 
}




function resetBoard() {
    location.reload(true);
}









// NOT IN USE /////////////////////////////////////////////////////////////////////////////////////////////

// var gameOn = function(tiles) {
// 	document.getElementById(tiles.id).innerHTML = currentPlayer;
// }

// var clicker = function () {
// 	var tiles = document.querySelectorAll(".exo");
// 	tiles.addEventListener('click')
// 	this.classList.add("red")
	
// 	console.log(event.target)

// }

// var playerx = "x"
// var playero = "o"

 // 	document.querySelector('#start-button').addEventListener('click', function() {
	// var name2 = prompt("Player 2! Welcome to Tic Tac Toe! Whats your name?", "Name");
 // 	document.getElementById("playerTwo").innerHTML = name;
// })

// 	var enter = prompt("Player One, please type your name");
	// 	var changeName = document.getElementById('#playerOne');
	// 	enter.appendChild(changeName);
	// })

//onclick html  
//clickpost(pos)

// get getElementById(pos).innerHTML = "x"
// getElementById

// if (currentPlayer == 1) {
	// 	this.innerHTML = "x";
	// 	tiles.push(this);
	// 	console.log(this)
		// currentPlayer == false

// CONSTRUCTOR FUNCTIONS TRIAL //
// var Tictac = {
// 	playerOne = "",
// 	playerTwo = "",
// 	x = "x",
// 	o = "o",
// 	threeConnect = false,
// 	winner = false,

// }


