class Battery {
    energy

    constructor(energy) {
        this.energy = energy
    }

    getEnergy() {
        return this.energy
    }

    setEnergy(energy) {
        this.energy = energy
    }

    decreaseEnergy() {
        if (this.energy > 0) {
            this.energy--
        } else {
            this.energy = 0
        }
    }
}