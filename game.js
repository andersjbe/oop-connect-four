import { Column } from './column.js';
import { ColumnWin } from "./columnWin.js";
import { RowWin } from "./rowWin.js";



export class Game {

    constructor(name1, name2) {
        this.name1 = name1;
        this.name2 = name2;
        this.counter = 1;
        this.columns = [new Column(), new Column(), new Column(), new Column(), new Column(), new Column(), new Column()];
        this.winnerNumber = 0;
    }

    getName() {
        if (this.winnerNumber === 3) {
            return `${this.name1} ties with ${this.name2}`;
        } else if (this.winnerNumber === 1) {
            return `${this.name1} wins!`;
        } else if (this.winnerNumber === 2) {
            return `${this.name2} wins!`
        }
        return `${this.name1} vs. ${this.name2}`;
    }

    playInColumn(i) {
        if (this.winnerNumber !== 0) {
            return;
        }
        const column = this.columns[i];
        column.add(this.counter);

        this.checkForTie();
        this.checkForColumnWin();
        this.checkForRowWin();

        if (this.counter === 1) {
            this.counter = 2;
        } else {
            this.counter = 1;
        }

    }

    getTokenAt(columnIndex, rowIndex) {
        let column = this.columns[columnIndex];
        return column.getTokenAt(rowIndex);
    }

    isColumnFull(i) {
        let column = this.columns[i];
        if (this.winnerNumber === 1 || this.winnerNumber === 2) {
            return true;
        }
        return column.isFull();
    }

    checkForTie() {
        for (let i = 0; i < this.columns.length; i++) {
            if (!this.isColumnFull(i)) {
                return;
            }
        }
        this.winnerNumber = 3;
    }

    checkForColumnWin() {
        if (this.winnerNumber !== 0) {
            return;
        }

        for (let i = 0; i < this.columns.length; i++) {
            const columnWin = new ColumnWin(this.columns[i]);
            let win = columnWin.inspect();
            if (win === 1 || win === 2) {
                this.winnerNumber = win;
                break;
            }
        }
    }

    checkForRowWin() {
        if (this.winnerNumber !== 0) {
            return;
        }

        let columnGroups = [this.columns.slice(0, 4), this.columns.slice(1, 5), this.columns.slice(2, 6), this.columns.slice(3, 7)];

        for (let i = 0; i < columnGroups.length; i++) {
            let rowWin = new RowWin(columnGroups[i]);
            let win = rowWin.inspect();
            if (win > 0) {
                this.winnerNumber = win;
                break;
            }
        }




    }

}
