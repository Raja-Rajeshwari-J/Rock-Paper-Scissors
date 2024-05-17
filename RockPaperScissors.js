let score = {
    wins: 0,
    losses: 0,
    ties: 0
};
const savedScore = JSON.parse(localStorage.getItem('score'));
if(savedScore){
    score = savedScore;
}
updateScore();

function playGame(playerMove) {
    const computerMove = pickCompMove();
    const resultElement = document.querySelector('.result');
    if(playerMove === computerMove){
        resultElement.innerHTML = `Tie.`;
        score.ties += 1;
    } else if(
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'paper' && computerMove === 'rock') ||
        (playerMove === 'scissors' && computerMove === 'paper')
    ){
        resultElement.innerHTML = `You win.`;
        score.wins += 1;
    } else{
        resultElement.innerHTML = `You Lose.`;
        score.losses += 1;
    }
    const movesElement = document.querySelector('.moves');
    movesElement.innerHTML = `You 
        <img src="images/${playerMove}-emoji.png" class="moveIcon"> 
        <img src="images/${computerMove}-emoji.png" class="moveIcon"> Computer`;
    updateScore();
    localStorage.setItem('score',JSON.stringify(score));
}

function pickCompMove(){
    const randonNum = Math.random();
    let computerMove;
    if(randonNum<(1/3)){
        computerMove = 'rock';
    } else if(randonNum<(2/3)){
        computerMove = 'paper';
    } else{
        computerMove = 'scissors';
    }
    return computerMove;
}

function resetScore(){
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
    updateScore();
    localStorage.removeItem('score');
}

function updateScore(){
    document.querySelector('.score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}