export class DiagonalWin {

    constructor(columns) {
        this.columns = columns;
    }

    inspect() {
        const diagonals = [];
        for (let i = 0; i < 6; i++) {
            const diagonal = [];
            if (i < 3) {
                for (let j = 0; j < this.columns.length; j++) {
                    let token = this.columns[j].getTokenAt(i + j);
                    diagonal.push(token);
                }
            } else {
                for (let j = 0; j < this.columns.length; j++) {
                    let token = this.columns[j].getTokenAt(i - j);
                    diagonal.push(token);
                }
            }
            diagonals.push(diagonal);
        }

        let chain = {
            token: "",
            count: 0,
        };

        for (let i = 0; i < diagonals.length; i++) {
            for (let j = diagonals[i].length - 1; j >= 0; j--) {
                if (chain.token === "") {
                    chain.token = diagonals[i][j];
                    chain.count++;
                } else if (chain.token === diagonals[i][j]) {
                    chain.count++;
                } else if (chain.token !== diagonals[i][j]) {
                    chain.token = "";
                    chain.count = 0;
                    break;
                }
                if (chain.count === 4 && chain.token !== null) {
                    return chain.token;
                }
            }
        }
        return 0;
    }

}
