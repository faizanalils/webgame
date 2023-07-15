// Function to generate a random choice for the computer
function getRandomChoice() {
    var choices = ['rock', 'paper', 'scissors'];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  // Function to determine the winner based on the choices
  function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return 'It\'s a tie!';
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
  }
  
  // Function to play the game
  function playGame(playerChoice) {
    // Get the computer's choice
    var computerChoice = getRandomChoice();
  
    // Determine the winner
    var result = getWinner(playerChoice, computerChoice);
  
    // Display the result
    var resultDiv = document.getElementById('result');
    resultDiv.textContent = `You chose ${playerChoice}. The computer chose ${computerChoice}. ${result}`;
  }
  