let userscore = 0;
let compscore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const drawgame = () => {
    msg.innerText = 'game was draw ,play again';

}
const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = "you win";
    }
    else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = "computer win";

    }

}
const playgame = (userchoice) => {
    const compchoice = gencompchoice();
    if (userchoice === compchoice) {
        drawgame();
    }
    else {
        let userwin = true;

        if (userchoice = "rock") {
            userwin = compchoice === 'paper' ? false : true;
        }
        else if (userchoice = "paper") {
            userwin = compchoice === 'scissor' ? false : true;
        }
        else {
            userwin = compchoice === 'rock' ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);
    }

};
const gencompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randmid = Math.floor(Math.random() * 3);
    return options[randmid];
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });

});