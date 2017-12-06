		var i = 0;
		var wins = 0;
		var losses = 0;
		var guessleft = 9;
		var guessessofar = [];
		var ComputerOptions = ['a', 'b', 'c', 'd' ,'e' ,'f' , 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x','y','z'];
		document.getElementById("wins").innerHTML="Wins: " + wins;
		document.getElementById("losses").innerHTML="Losses: " + losses;
		document.getElementById("guessleft").innerHTML="Guesses Left: " + guessleft;
		document.getElementById("guessessofar").innerHTML="Your Guesses So Far: " + guessessofar;
		//computer select randomsly a letter from the available options
		document.onkeyup = function(event) {
		var ComputerPick = ComputerOptions[Math.floor(Math.random() * ComputerOptions.length)];
		var InputGuess = String.fromCharCode(event.keyCode).toLowerCase();
		guessessofar.push(InputGuess);
		document.getElementById("guessessofar").innerHTML="Your Guesses So Far: " + guessessofar;
		i++
		if (guessleft > 0) {
			if (InputGuess == ComputerPick){
			wins++;
			document.getElementById("wins").innerHTML = "Wins: " + wins;
			alert("You right, you right");
			}	
			else //if (guessleft == 0)// 
				{
				guessleft--;
				if (guessleft == 0){
					alert("Your were wrong 9 times");
					losses++;
					document.getElementById("losses").innerHTML="Losses: " + losses;
					guessleft=9;
					document.getElementById("guessleft").innerHTML="Guesses Left: " + guessleft;
					guessessofar=[];
				}else {
				document.getElementById("guessleft").innerHTML="Guesses Left: " + guessleft;
				alert("You wrong, you wrong");
					}
			}
		}
	};
