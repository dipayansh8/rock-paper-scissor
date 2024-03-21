let userscore = 0;
let compscore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const drawgame = () => {
    msg.innerText = "Game was draw . play again";
    msg.style.backgroundColor = "yellow";
}
const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randmid = Math.floor(Math.random() * 3);
    return options[randmid];

}
const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = 'you win';
    }
    else {
        compscore++;
        userscorepara.innerText = compscore;
        msg.innerText = 'comp win';

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
            userwin = compchoice === paper ? false : true;
        }
        else if (userchoice = "paper") {
            userwin = compchoice === scissor ? false : true;
        }
        else {
            userwin = compchoice === rock ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);

    }
};

choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});