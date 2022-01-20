let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof(guess));
    // When There is No Input
    if(!guess) {
        // document.querySelector('.message').textContent = "⛔ No Number";
        displayMessage("⛔ No Number");
    }
    // When Player Wins
    else if(guess === secretNumber) {
        // document.querySelector('.message').textContent = "Correct Answer!";
        displayMessage("Correct Number!");
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem'

        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }

    else if (guess !== secretNumber){
        if(score > 1) {
            displayMessage(guess < secretNumber ?"Too Low!" : "Too High!");
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage("💥You Lost The Game !");
            document.querySelector('.score').textContent = 0;
        }
    }
})

 // Try Again Button 

 document.querySelector('.again').addEventListener('click', () => {
     score = 20;
     secretNumber = Math.trunc(Math.random() * 20) + 1;
     displayMessage("Start guessing...");
     document.querySelector('.score').textContent = score;
     document.querySelector('.number').textContent = '?';
     document.querySelector('.guess').value = '';

     document.querySelector('body').style.backgroundColor = '#222';
     document.querySelector('.number').style.width = '15rem'
        
})