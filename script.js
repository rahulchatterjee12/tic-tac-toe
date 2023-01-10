let gridlist = document.getElementsByClassName('grid-item');

let turn = "X";

// gridlist[0].style.setProperty('background-color', '#00ff00');

function hoverStyle(element){
    if (!element.classList.contains('clicked-class') ){
        element.innerHTML = turn
    }
}
function hoverOff(element){
    if (!element.classList.contains('clicked-class') ){
        element.innerHTML = ''
    }
}
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
gameEnd = false
document.getElementById('result').style.display = "none"

function tie() {
    for (let grid of gridlist) {
        if (grid.innerText === '') {
            return
        }
    }
    document.getElementById('result').style.display = "block"
    document.getElementById('result').innerHTML = "The game is ended and it's Tie"
}

function checkEnd() {
    if (gameEnd === true) {
        document.getElementById('result').style.display = "block"
        if (turn === "X") {
            winner = "The game is ended and the winner is X"
        }
        else {
            winner = "The game is ended and the winner is O"
        }
        document.getElementById('result').innerHTML = winner
    }
}

function clicked(element) {
    isGameEnd()
    if (!gameEnd) {
        if (!element.classList.contains('clicked-class')) {
            if (turn === 'O') {
                turn = 'X';
                element.innerHTML = "O"
            }
            else {
                turn = 'O';
                element.innerHTML = "X"
            }
        }
    }
    element.classList.add('clicked-class');
    isGameEnd()

}



function isGameEnd() {
    tie()
    for (let i = 0; i <= 7; i++) {
        const winCondition = winConditions[i];
        let a = gridlist[winCondition[0]].innerHTML
        let b = gridlist[winCondition[1]].innerHTML
        let c = gridlist[winCondition[2]].innerHTML
        if ((a === '') || (b === '') || (c === '')) {
            continue
        }
        if ((a === b) && (b === c)) {
            gameEnd = true;
            checkEnd()
        }
    }
    checkEnd()
    return false;
}


function resetGame(){
    for(grid of gridlist){
        grid.innerHTML = '';
        grid.classList.remove('clicked-class');
    }
    gameEnd = false
    document.getElementById('result').style.display = "none"
}