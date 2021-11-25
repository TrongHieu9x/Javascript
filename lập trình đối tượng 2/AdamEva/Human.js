class Human {
    name
    gender
    weight

    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    isMale() {
        return this.gender === 'Male' ? true : false;
    }

    setGender(gender) {
        this.gender = gender;
    }

    checkApple(Apple) {
        return Apple.isEmpty() ? true : false;
    }

    eat(Apple) {
        if (this.checkApple(Apple)) {
            if (Apple.getWeight() < 2) {
                this.say('Miếng cuối cùng, mình cùng chia đôi nhé. Thôi em ăn nốt nha !')
            } else {
                this.say('Ăn nữa đi !!');
            }
        } else {
            this.say('Táo hết rồi, anh còn 3 quả trong quần đó em ăn không ...');
        }
        Apple.decrease();
        this.weight++;
    }

    say(string) {
        console.log(`${this.name} say: ${string}`);
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getWeight() {
        return this.weight;
    }

    setWeight(weight) {
        this.weight = weight;
    }
}