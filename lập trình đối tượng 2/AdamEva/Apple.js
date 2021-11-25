class Apple {
    weight

    constructor(weight) {
        this.weight = weight;
    }

    getWeight() {
        return this.weight;
    }

    decrease() {
        if (this.isEmpty()) {
            this.weight--;
        }
    }

    isEmpty() {
        return this.weight === 0 ? false : true;
    }
}