const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playbtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playbtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHands = document.querySelector('.player-hand');
        const computerHands = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                hand.style.animation = '';
            });
        });

        const computerOptions = ['Rock','Paper','Scissors'];

        options.forEach(option=>{
            option.addEventListener('click', () => {
                const computerChoice = computerOptions[Math.floor(Math.random() * 3)];
                setTimeout(()=>{
                    compareHands(option.textContent, computerChoice);
                    playerHands.src = '../images/' + option.textContent + '.png';
                    computerHands.src = '../images/' + computerChoice + '.png';
                }, 2000);
                
                playerHands.style.animation = "shakePlayer 2s ease";
                computerHands.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        if (playerChoice === computerChoice) {
            winner.textContent = 'Yawn it is a tie.';
            return;
        }

        if (playerChoice === 'Rock') {
            if (computerChoice === 'Paper') {
                winner.textContent = 'Aww you lost!';
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Yay you won!';
                pScore++;
                updateScore();
                return;
            }
        }

        if (playerChoice === 'Paper') {
            if (computerChoice === 'Scissors') {
                winner.textContent = 'Aww you lost!';
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Yay you won!';
                pScore++;
                updateScore();
                return;
            }
        }

        if (playerChoice === 'Scissors') {
            if (computerChoice === 'Rock') {
                winner.textContent = 'Aww you lost!';
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Yay you won!';
                pScore++;
                updateScore();
                return;
            }
        }
    };

    startGame();
    playMatch();
};

game();