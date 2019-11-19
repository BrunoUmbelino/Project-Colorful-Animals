let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_argumentation_p = document.querySelector(".argumentation");
const result_veredict_p = document.querySelector(".veredict");
const choiceRock_div = document.getElementById("choice-rock");
const choicePaper_div = document.getElementById("choice-paper");
const choiceScissor_div = document.getElementById("choice-scissor");

function capitalizing(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    
    const userSmallWord = "user".fontsize(4).sup();
    const compSmallWord = "comp".fontsize(4).sup();
    const vsSmallWord = "vs".fontsize(6);
    const userChoice_img = document.getElementById("choice-" + userChoice);

    result_argumentation_p.innerHTML = userSmallWord + capitalizing(userChoice) +
        " " + vsSmallWord + " "
        + capitalizing(computerChoice) + compSmallWord;
    result_veredict_p.innerHTML = "You Win!";

    result_veredict_p.classList.add('green-color');
    userChoice_img.classList.add('green-border');
    setTimeout(function () { result_veredict_p.classList.remove('green-color'); }, 800);
    setTimeout(function () { userChoice_img.classList.remove('green-border'); }, 800);
}

function lose(userChoice, computerChoice) {
    compScore++;
    compScore_span.innerHTML = compScore;
    const userSmallWord = "user".fontsize(4).sup();
    const compSmallWord = "comp".fontsize(4).sup();
    const vsSmallWord = "vs".fontsize(6);
    const userChoice_img = document.getElementById("choice-" + userChoice);

    result_argumentation_p.innerHTML = userSmallWord + capitalizing(userChoice) +
        " " + vsSmallWord + " "
        + capitalizing(computerChoice) + compSmallWord;
    result_veredict_p.innerHTML = "You Lose.";

    result_veredict_p.classList.add('red-color');
    userChoice_img.classList.add('red-border');
    setTimeout(function () { result_veredict_p.classList.remove('red-color'); }, 1000);
    setTimeout(function () { userChoice_img.classList.remove('red-border'); }, 1000);
}

function draw(userChoice, computerChoice) {
    const userSmallWord = "user".fontsize(4).sup();
    const compSmallWord = "comp".fontsize(4).sup();
    const vsSmallWord = "vs".fontsize(6);
    const userChoice_img = document.getElementById("choice-" + userChoice);

    result_argumentation_p.innerHTML = userSmallWord + capitalizing(userChoice) +
        " " + vsSmallWord + " "
        + capitalizing(computerChoice) + compSmallWord;
    result_veredict_p.innerHTML = "Draw Game.";

    result_veredict_p.classList.add('gray-color');
    userChoice_img.classList.add('gray-border');
    setTimeout(function () { result_veredict_p.classList.remove('gray-color'); }, 800);
    setTimeout(function () { userChoice_img.classList.remove('gray-border'); }, 800);
}

function genCompChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomNumer = Math.floor(Math.random() * 3);
    return choices[randomNumer];
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
    choiceRock_div.addEventListener("click", () =>  game("rock"));
    choicePaper_div.addEventListener("click", () =>  game("paper"));
    choiceScissor_div.addEventListener("click", () => game("scissor"));
}

main();

