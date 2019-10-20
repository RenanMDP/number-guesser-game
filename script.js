let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanNumber, computerNumber, secretNumber) => {
  if ((humanNumber === computerNumber) && (humanNumber === secretNumber)) {
    return true;
  } else if ((humanNumber === computerNumber) && (humanNumber !== secretNumber)) {
    return true;
  } else if (humanNumber === secretNumber) {
    return true;
  } else if ((humanNumber > secretNumber) && (humanNumber < computerNumber)) {
    return true;
  } else if ((humanNumber < secretNumber) && (humanNumber > computerNumber)) {
    return true;
  } else {
    return false;
  }
};

// const compareGuesses = (humanNumber, computerNumber, secretNumber) => {
//   if ((Math.abs(secretNumber - humanNumber)) <= (Math.abs(secretNumber - computerNumber))) {
//     return true;
//   } else {
//     return false;
//   }
// };

const updateScore = (winner) => {
  switch(winner) {
    case 'human':
      humanScore++;
      break;
    case 'computer':
      computerScore++;
      break;
    default:
      console.log("Error");
      break;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};