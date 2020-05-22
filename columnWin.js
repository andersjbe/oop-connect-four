import { Column } from "./column.js";

export class ColumnWin {

    constructor(column) {
        this.column = column;
    }

    inspect() {
        let chain = {
            token: "",
            count: 0,
        };
        for (let i = this.column.tokens.length - 1; i >= 0; i--) {
            if (this.column.tokens[i] === null) {
                break;
            }
            if (chain.token === "") {
                chain.token = this.column.tokens[i];
                chain.count++;
            } else if (chain.token === this.column.tokens[i]) {
                chain.count++;
            } else if (chain.token !== this.column.tokens[i]) {
                chain.token = this.column.tokens[i];
                chain.count = 1;
            }
            if (chain.count === 4) {
                return chain.token;
            }
        }
        return 0;
    }

}

