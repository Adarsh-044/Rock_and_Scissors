let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score')

const scoreBoard_div = document.getElementById('score-board');
const result_p = document.querySelector('.result > p');

const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');
const reset_btn = document.getElementById('btn'); 



function getComputerChoice() {
    choices = ['r', 'p', 's'];
    let idx = Math.floor(Math.random() * 3)
    return choices[idx];
}

function toword(letter){
    if (letter == "r")  return "Rock";
    else if (letter == "p") return "Paper";
    return "Scissor"
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = " comp".fontsize(3).sub(); 
    result_p.innerHTML = `${toword(user)}${smallUserWord}  beats ${toword(computer)}${smallCompWord}. You Won!`;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function(){
        document.getElementById(user).classList.remove('green-glow')
    }, 200);
}

function lose(user, computer) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub(); 
    result_p.innerHTML = `${toword(user)}${smallUserWord}  loses to  ${toword(computer)}${smallCompWord}. You Lost!`;
    document.getElementById(user).classList.add('red-glow'); 
    setTimeout(function(){
        document.getElementById(user).classList.remove('red-glow')
    }, 200);
}

function draw(user, computer) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${toword(user)}${smallUserWord}  equals to ${toword(computer)}${smallCompWord}. It's Draw!`;
}

function game(userChoice) {
    let computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "ps":
        case "rp":
            lose(userChoice, computerChoice);
            break;
        case "ss":
        case "rr":
        case "pp":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p")
    })

    scissor_div.addEventListener('click', function () {
        game("s");
    })
}
main(); 

function reseting(){
    userScore = 0; 
    computerScore = 0; 
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}