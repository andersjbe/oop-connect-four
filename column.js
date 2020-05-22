export class Column {

    constructor() {
        this.tokens = [null, null, null, null, null, null];
    }
    add(playerNum) {
        // if (this.tokens.length === 6) {
        //     return;
        // }
        // this.tokens.unshift(playerNum);
        for (let i = this.tokens.length - 1; i >= 0; i--) {
            let token = this.tokens[i];
            if (token === null) {
                this.tokens[i] = playerNum;
                break;
            }
        }
    }
    // i represents a row
    getTokenAt(i) {
        if (i < 0 && i > 5) {
            return null;
        }
        let token = this.tokens[i];
        if (token === undefined) {
            return null;
        } else {
            return token;
        }
    }

    isFull() {
        for (let i = this.tokens.length - 1; i >= 0; i--) {
            let token = this.tokens[i];
            if (token === null) {
                return false;
            }
        }
        return true;
    }
}
