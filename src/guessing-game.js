class GuessingGame {
    constructor() {
        this.max;
        this.min;
        this.res;
    }

    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
        this.res = Math.ceil((this.max + this.min)/2);
        return this.res;
    }

    lower() {
        this.max = this.res;
    }

    greater() {
        this.min = this.res;
    }
}

module.exports = GuessingGame;
