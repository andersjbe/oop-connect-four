import { Game } from './game.js';

let game = undefined;

const updateUi = () => {
    if (game === undefined) {   //if the game hasn't started, hide the board
        document.getElementById('board-holder').classList.add('is-invisible');
    } else {
        document.getElementById('board-holder').classList.remove('is-invisible');
        document.getElementById('game-name').innerHTML = game.getName();
        // show the current players color checker in the top row
        let currentPlayer = game.counter;
        if (currentPlayer === 1) {
            event.target.classList.add('black');
            event.target.classList.remove('red');
        } else {
            event.target.classList.add('red');
            event.target.classList.remove('black');
        }
        // render the checkers on the board
        for (let i = 0; i <= 5; i++) {
            for (let j = 6; j >= 0; j--) {
                const square = document.getElementById(`square-${i}-${j}`);
                square.innerHTML = '';
                let token = game.getTokenAt(j, i);
                if (token === 1) {
                    const div = document.createElement('div');
                    div.classList.add('token', 'black');
                    square.appendChild(div);
                } else if (token === 2) {
                    const div = document.createElement('div');
                    div.classList.add('token', 'red');
                    square.appendChild(div);
                }
            }

        }
        //check to see if any column is full and disable the top row
        for (let i = 0; i <= 6; i++) {
            const column = document.getElementById(`column-${i}`);
            console.log(column.classList.add);
            const isFull = game.isColumnFull(i);
            if (isFull === true) {
                column.classList.add('full');
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', e => {

    const player1Name = document.getElementById('player-1-name');
    const player2Name = document.getElementById('player-2-name');
    const playerNames = [player1Name, player2Name];
    const button = document.getElementById('new-game');


    playerNames.forEach(playerName => {
        playerName.addEventListener('keyup', event => {
            if (player1Name.value.length > 0 && player2Name.value.length > 0) {
                button.disabled = false;
            } else {
                button.disabled = true;
            }
        });
    });

    button.addEventListener('click', e => {
        game = new Game(player1Name.value, player2Name.value);
        player1Name.value = "";
        player2Name.value = "";
        button.disabled = true;
        updateUi();
    });

    document.getElementById('click-targets').addEventListener('click', ev => {
        let column = Number.parseInt(ev.target.id.slice(ev.target.id.length - 1));
        if (column.classList.includes('full')) {
            return;
        }
        game.playInColumn(column);
        updateUi();
    });

});
