import { Column } from "./column.js";

export class RowWin {

    constructor(columns) {
        this.columns = columns;
    }

    inspect() {
        let rows = [];
        for (let i = 0; i < 6; i++) {
            let row = [];
            this.columns.forEach(column => {
                // console.log(column)
                row.push(column.tokens[i]);
                // console.log(row);
            });
            rows.push(row);
        }
        console.log(rows);

        let chain = {
            token: "",
            count: 0,
        };

        for (let i = 0; i < rows.length; i++) {
            for (let j = rows[i].length - 1; j >= 0; j--) {
                if (chain.token === "") {
                    chain.token = rows[i][j];
                    chain.count++;
                } else if (chain.token === rows[i][j]) {
                    chain.count++;
                } else if (chain.token !== rows[i][j]) {
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