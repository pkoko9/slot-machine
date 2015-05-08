

var response = prompt ("Do you want to play slots?");

while (response ==="Yes"||response==="yes"||response==="Y"||response==="y") {

	var x = Math.ceil(Math.random()*3);
	var y = Math.ceil(Math.random()*3);
	var z = Math.ceil(Math.random()*3);

	console.log(x,y,z);

	if (x === y && x === z) {
		console.log ("Winner, Winner, Chicken Dinner - You win with three in a row!");
	}

	else if ((x===1 && y===2 && z===3) || (x===3 && y===2 && z===1)) {
		console.log ("Winner, Winner, Chicken Dinner - You won with a sequence of "+x+" "+y+" "+z+"!");
	}	


	else {
		console.log ("Loser - reload your browser to try again?");
	}

	response = prompt("Would you like to play again?");
}

