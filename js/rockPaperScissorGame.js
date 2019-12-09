let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const combat_p = document.getElementById("combat-p");
const result_p = document.getElementById("result-p");
const choiceRock_div = document.getElementById("choice-rock");
const choicePaper_div = document.getElementById("choice-paper");
const choiceScissor_div = document.getElementById("choice-scissor");

function capitalizing(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function genCompChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomNumer = Math.floor(Math.random() * 3);
    return choices[randomNumer];
}

function getCombatString(userChoice, computerChoice) {
    const userWord = " user choice ".fontsize(4).sup();
    const compWord = " comp choice ".fontsize(4).sup();
    const vsWord = "vs".fontsize(6);

    combat_p.innerHTML =
        userWord + capitalizing(userChoice) +
        " " + vsWord + " "
        + capitalizing(computerChoice) + compWord;
}

function getResultStyle(result, userChoice_img) {
    result_p.classList.add(result + '-color');
    userChoice_img.classList.add(result + '-border');

    setTimeout(function () {
        result_p.classList.remove(result + '-color');
    }, 800);
    setTimeout(function () {
        userChoice_img.classList.remove(result + '-border');
    }, 800);
}


function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    const userChoice_img = document.getElementById("choice-" + userChoice);

    getCombatString(userChoice, computerChoice);
    result_p.innerHTML = "You Win!";
    getResultStyle("win", userChoice_img);
}

function lose(userChoice, computerChoice) {
    compScore++;
    compScore_span.innerHTML = compScore;
    const userChoice_img = document.getElementById("choice-" + userChoice);

    getCombatString(userChoice, computerChoice);
    result_p.innerHTML = "You Lose.";
    getResultStyle("lose", userChoice_img);
}

function draw(userChoice, computerChoice) {
    const userChoice_img = document.getElementById("choice-" + userChoice);

    getCombatString(userChoice, computerChoice);
    result_p.innerHTML = "Draw Game.";
    getResultStyle("draw", userChoice_img);
}

function game(userChoice) {
    const computerChoice = genCompChoice();
    switch (userChoice + "-" + computerChoice) {
        case "rock-scissor":
        case "paper-rock":
        case "scissor-paper":
            win(userChoice, computerChoice);
            break;
        case "rock-paper":
        case "paper-scissor":
        case "scissor-rock":
            lose(userChoice, computerChoice);
            break;
        case "rock-rock":
        case "paper-paper":
        case "scissor-scissor":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    choiceRock_div.addEventListener("click", () => game("rock"));
    choicePaper_div.addEventListener("click", () => game("paper"));
    choiceScissor_div.addEventListener("click", () => game("scissor"));
}

main();

