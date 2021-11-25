class Lamp {
    status
    battery

    constructor(battery) {
        this.battery = battery
        this.status = false
    }

    setBattery(battery) {
        this.battery = battery
    }

    getBatteryInfo() {
        return this.battery.getEnergy()
    }

    turnOnOff() {
        this.status = !this.status
    }

    light() {
        if (this.status && this.getBatteryInfo() > 0) {
            this.battery.decreaseEnergy()
            console.log("Lightning")
        } else {
            console.log("Not Lightning")
        }
    }
}