console.log("Welcome to Tic Tac Toe")
let turn = "X";
let isWon = false;
let gameover = false;
let cnt = 0;
// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}
// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext'); 
    let boxes = document.getElementsByClassName('box');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if (!isWon) {
            if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
                document.querySelector(".info").innerText = boxtext[e[0]].innerText + "Won";
                boxes[e[0]].style.backgroundColor = "rgb(225, 167, 225)";
                boxes[e[1]].style.backgroundColor = "rgb(225, 167, 225)";
                boxes[e[2]].style.backgroundColor = "rgb(225, 167, 243)";
                gameover = true;
                isWon = true;
            }
        }
    })
}
// Game Logic 
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    if (!isWon) {
        element.addEventListener('click', () => {
            if (boxtext.innerText === '') {
                boxtext.innerText = turn;
                cnt++;
                turn = changeTurn();
                checkWin();
                if (!gameover && !isWon) {
                    document.getElementsByClassName('info')[0].innerText = "Turn for" + turn;
                }
                if (!isWon && cnt == 9) {
                    document.getElementsByClassName('info')[0].innerText = "Draw";
                }
            }
        });
    }
});

function resetColor(boxes) {
    Array.from(boxes).forEach(box => {
        box.style.backgroundColor = "white"; // Reset background to white
    });
}

//add on click listner to reset button
reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    });
    resetColor(boxes);
    turn = "X";
    gameover = false;
    isWon = false;
    cnt = 0;
    document.getElementsByClassName('info')[0].innerText = "Turn for" + turn;
})   