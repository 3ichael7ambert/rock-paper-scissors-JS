    const rockBtn = document.querySelector('#rock');
      const paperBtn = document.querySelector('#paper');
      const scissorsBtn = document.querySelector('#scissors');
      const resultContainer = document.querySelector('.result-container');
      const resultText = document.querySelector('#result');
      const restartBtn = document.querySelector('#restart');

      const options = ["rock", "paper", "scissors"];

      function computerPlay() {
        const randomIndex = Math.floor(Math.random() * options.length);
        return options[randomIndex];
      }

      function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
          return "It's a tie!";
        } else if (
          (playerSelection === "rock" && computerSelection === "scissors") ||
          (playerSelection === "paper" && computerSelection === "rock") ||
          (playerSelection === "scissors" && computerSelection === "paper")
        ) {
          return `You win! ${playerSelection} beats ${computerSelection}.`;
        } else {
          return `You lose! ${computerSelection} beats ${playerSelection}.`;
        }
      }

      function game(playerSelection) {
        const computerSelection = computerPlay();
        const roundResult = playRound(playerSelection, computerSelection);
        resultText.textContent = roundResult;
        resultContainer.style.display = 'flex';
        rockBtn.style.display = 'none';
        paperBtn.style.display = 'none';
        scissorsBtn.style.display = 'none';
        restartBtn.style.display = 'flex';
      }

      rockBtn.addEventListener('click', () => game('rock'));
      paperBtn.addEventListener('click', () => game('paper'));
      scissorsBtn.addEventListener('click', () => game('scissors'));
      
      restartBtn.addEventListener('click', () => {
        rockBtn.style.display = 'inline';
        paperBtn.style.display = 'inline';
        scissorsBtn.style.display = 'inline';
        resultContainer.style.display = 'none';
        restartBtn.style.display = 'none';
      });