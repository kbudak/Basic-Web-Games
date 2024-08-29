
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
    

    const playGame = () => {
        const rock = document.querySelector('.rock');
        const paper = document.querySelector('.paper');
        const scissors = document.querySelector('.scissors');
        const playerOptions = [rock, paper, scissors];
  
        playerOptions.forEach(option => {
            option.addEventListener('click', function () {
 
                const movesLeft = document.querySelector('.mvlft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10 - moves}`;
 
                let com = Math.random()*10;
            
                rps(this.innerText, com)
 
                if (moves == 10) {
                    gameOver(playerOptions, movesLeft);
                }
            })
        })
 
    }


    
function rps(cl,cm){

    const result = document.querySelector('.result');
    const playerScoreBoard = document.querySelector('.clp');
    const computerScoreBoard = document.querySelector('.cmp');
        

    if(cm >=0 && cm <3)
        cm = "Scissors";
    else if(cm >=3 && cm <6)
        cm = "Paper";
    else
        cm = "Rock"


    if(cl=="Scissors" && cm == "Paper"){
        result.textContent = 'Player Won'
        playerScore++;
        playerScoreBoard.textContent = playerScore;
        playerScoreBoard.style.fontSize = '2rem';
    }
    else if(cl=="Scissors" && cm == "Rock"){
        result.textContent = 'Computer Won';
        computerScore++;
        computerScoreBoard.textContent = computerScore;
        computerScoreBoard.style.fontSize = '2rem';
    }
        
    else if(cl=="Paper" && cm == "Scissors"){
        result.textContent = 'Computer Won';
        computerScore++;
        computerScoreBoard.textContent = computerScore;
        computerScoreBoard.style.fontSize = '2rem';
    }
        
    else if(cl=="Paper" && cm == "Rock"){
        result.textContent = 'Player Won'
        playerScore++;
        playerScoreBoard.textContent = playerScore;
        playerScoreBoard.style.fontSize = '2rem';
    }
        
    else if(cl=="Rock" && cm == "Scissors"){
        result.textContent = 'Player Won'
        playerScore++;
        playerScoreBoard.textContent = playerScore;
        playerScoreBoard.style.fontSize = '2rem';
    }
        
    else if(cl=="Rock" && cm == "Paper"){
        result.textContent = 'Computer Won';
        computerScore++;
        computerScoreBoard.textContent = computerScore;
        computerScoreBoard.style.fontSize = '2rem';
    }
        
    else if(cl==cm)
         result.textContent = 'Tie'


}

const gameOver = (playerOptions, movesLeft) => {
 
    const chooseMove = document.querySelector('.move');
    const result = document.querySelector('.result');
    const reloadBtn = document.querySelector('.reload');

    playerOptions.forEach(option => {
        option.style.display = 'none';
    })


    chooseMove.innerText = 'Game Over!!'
    movesLeft.style.display = 'none';

    if (playerScore > computerScore) {
        result.style.fontSize = '2rem';
        result.innerText = 'You Won The Game'
        result.style.color = '#308D46';
        
    }
    else if (playerScore < computerScore) {
        result.style.fontSize = '2rem';
        result.innerText = 'You Lost The Game';
        result.style.color = 'red';
    }
    else {
        result.style.fontSize = '2rem';
        result.innerText = 'Tie';
        result.style.color = 'grey'
    }
    reloadBtn.innerText = 'Restart';
    reloadBtn.style.display = 'flex'
    reloadBtn.addEventListener('click', () => {
        window.location.reload();
    })
}



playGame();

}


game();



