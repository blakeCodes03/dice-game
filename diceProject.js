function diceRoll() {
    var ranNumbOne= Math.floor((Math.random()*6)+1); //random number between 1-6/
    var ranNumbTwo= Math.floor((Math.random()*6)+1);
   
    if (ranNumbOne==1) {
        document.getElementById("diceImageOne").src="images/dice1.png";
                
    }
    if (ranNumbOne==2) {
        document.getElementById("diceImageOne").src="images/dice2.png";        
    }
    if (ranNumbOne==3) {
        document.getElementById("diceImageOne").src="images/dice3.png";        
    }
    if (ranNumbOne==4) {
        document.getElementById("diceImageOne").src="images/dice4.png ";        
    }
    if (ranNumbOne==5) {
        document.getElementById("diceImageOne").src="images/dice5.png ";        
    }
    if (ranNumbOne==6) {
        document.getElementById("diceImageOne").src="images/dice6.png ";        
    }
    if (ranNumbTwo==1) {
        document.getElementById("diceImageTwo").src="images/dice1.png ";        
    }
    if (ranNumbTwo==2) {
        document.getElementById("diceImageTwo").src="images/dice2.png ";        
    }
    if (ranNumbTwo==3) {
        document.getElementById("diceImageTwo").src="images/dice3.png ";        
    }
    if (ranNumbTwo==4) {
        document.getElementById("diceImageTwo").src="images/dice4.png ";        
    }
    if (ranNumbTwo==5) {
        document.getElementById("diceImageTwo").src="images/dice5.png ";        
    }
    if (ranNumbTwo==6) {
        document.getElementById("diceImageTwo").src="images/dice6.png ";        
    } 
    if (ranNumbTwo < ranNumbOne) {
        document.getElementById("status-header").innerHTML="Player One Wins!!"; //if player 1 wins
        
    }else if (ranNumbOne < ranNumbTwo) {
        document.getElementById("status-header").innerHTML="Player Two Wins!!"; //if player 2 wins
        
        
    } else  {
        document.getElementById("status-header").innerHTML="Tie"; //if it is a tie
        
    }
    
}

