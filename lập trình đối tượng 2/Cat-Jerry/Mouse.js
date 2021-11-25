class Mouse {
    name;
    weight;
    speed;
    status;
    constructor(name, weight, speed, status) {
        this.name = name;
        this.speed = speed;
        this.weight = weight;
        this.status = status
    }
    getStatus(){
        return this.status;
    }
    setSpeed(speed){
        this.speed = speed;
    }
    setWeight(weight){
        this.weight = weight;
    }
    setName(name){
        this.name = name;
    }
    getSpeed(){
        return this.speed;
    }
    getWeight(){
        return this.weight;
    }
    getName(){
        return this.name;
    }
}