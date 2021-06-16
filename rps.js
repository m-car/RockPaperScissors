// 2 users 1 human 1 bot 
 var Pchoice; 
 var Rchoice;
 var wins= 0;
 var ties = 0;
 var losses = 0;
 var choices=['p','r','s'];

//Welcome message
alert("welcome to Rock Paper Scissors")

function playGame(){
    //Player choice
    Pchoice = prompt("make a choice")
    // math for random choice
    function getRandomInt(){
        return Math.floor(Math.random() * 3);
    }
    // Computer Choice
    Rchoice = choices[getRandomInt()];
    alert("Computer chooses "+ Rchoice)

    // GAME LOGIC
    if (Pchoice == Rchoice){
        alert("Its a tie!"); 
        ties++
    }else if((Pchoice == 'p' && Rchoice == 'r')||(Pchoice == 'r' && Rchoice == 's')||(Pchoice == 's' && Rchoice == 'p')){
        alert("you win") ; 
        wins++
    }else{
        alert("you lose");
        losses++
    }
    //score board
    alert("Win: "+ wins + "\nLosses: " + losses + "\nTies: " + ties)

    if(confirm("Would you like to play again")){

        playGame() 
        alert("closing frame")
    }else{
        alert("have a nice day")
    }
}

playGame();