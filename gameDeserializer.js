import { Game } from './game.js';

export class GameDeserializer {

    constructor(jsonStr) {
        this.jsonStr = jsonStr;
    }

    deserialize() {
        const gameState = JSON.parse(this.jsonStr);
        const game = new Game(gameState.name1, gameState.name2);

        const columnIndices = [5, 5, 5, 5, 5, 5, 5];

        if (gameState.winnerNumber !== 0) return;

        while (columnIndices.some(index => index !== -1)) {
            for (let i = 0; i < columnIndices.length; i++) {
                let j = columnIndices[i];
                if (j < 0) {
                    continue;
                }
                let token = gameState.board[i][j];
                if (token === null) {
                    columnIndices[i]--;
                }
                if (token === game.counter) {
                    game.playInColumn(i);
                    columnIndices[i]--;
                }
            }

        }
        return game;
    }

}
