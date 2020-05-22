import { Game } from "./game.js";

export class GameSerializer {

    constructor(game) {
        this.game = game;
    }

    serialize() {
        const gameState = {
            name1: this.game.name1,
            name2: this.game.name2,
            counter: this.game.counter,
            winnerNumber: this.game.winnerNumber,
            board: [],
        };

        for (let i = 0; i < 7; i++) {
            let column = [];
            for (let j = 0; j < 6; j++) {
                column.push(this.game.getTokenAt(i, j));
            }
            gameState.board.push(column);
        }

        return JSON.stringify(gameState);
    }

}