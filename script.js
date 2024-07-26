const choices = ['rock', 'paper', 'scissors'];
const score = { user: 0, comp: 0 };

document.getElementById('rock').addEventListener('click', () => game('rock'));
document.getElementById('paper').addEventListener('click', () => game('paper'));
document.getElementById('scissors').addEventListener('click', () => game('scissors'));
document.getElementById('reset').addEventListener('click', resetGame);

function game(userChoice) {
    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    const resultMessage = getResult(userChoice, compChoice);
    updateScore(resultMessage);
    displayResult(resultMessage, userChoice, compChoice);
}

function getResult(user, comp) {
    if (user === comp) return 'draw';
    if ((user === 'rock' && comp === 'scissors') || (user === 'paper' && comp === 'rock') || (user === 'scissors' && comp === 'paper')) {
        return 'win';
    }
    return 'lose';
}

function updateScore(result) {
    if (result === 'win') score.user++;
    if (result === 'lose') score.comp++;
    document.getElementById('score').textContent = `${score.user}:${score.comp}`;
}

function displayResult(result, user, comp) {
    const resultMessage = document.getElementById('result-message');
    const userChoice = document.getElementById(user);
    const compChoice = document.getElementById(comp);

    userChoice.classList.add(result === 'win' ? 'win' : 'lose');
    compChoice.classList.add(result === 'lose' ? 'win' : 'lose');

    setTimeout(() => {
        userChoice.classList.remove('win', 'lose');
        compChoice.classList.remove('win', 'lose');
    }, 500);

    if (result === 'win') {
        resultMessage.textContent = `You Win! ${capitalize(user)} beats ${comp}.`;
    } else if (result === 'lose') {
        resultMessage.textContent = `You Lose! ${capitalize(comp)} beats ${user}.`;
    } else {
        resultMessage.textContent = `It's a Draw! You both chose ${user}.`;
    }
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function resetGame() {
    score.user = 0;
    score.comp = 0;
    document.getElementById('score').textContent = '0:0';
    document.getElementById('result-message').textContent = 'Make your move!';
}
