class Cat {
    name;
    weight;
    speed;
    constructor(name, weight, speed) {
        this.name = name;
        this.speed = speed;
        this.weight = weight;
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
    sound(){
        console.log("Mèo Mèo")
    }

}