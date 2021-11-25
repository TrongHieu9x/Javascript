
/**
 * Created by nhatnk on 4/26/17.
 */

class Hero {
    image
    top
    left
    size
    up
    right
    down

    constructor(image, top, left, size, speed) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;

    }

    getHeroElement() {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }


    moveRight() {
        this.left += 20;
        console.log('ok: ' + this.left);
    }

    moveDown() {
        this.top += 20;
        console.log('ok: ' + this.top);
    }

    moveLeft() {
        this.left -= 20;
        console.log('ok: ' + this.left);
    }

    moveUp() {
        this.top -= 20;
        console.log('ok: ' + this.top);
    }
}

let speed = +prompt("nhập tốc độ")
let hero = new Hero('pikachu.png', 0, 0, 200, speed);

function start() {
    if (hero.left < (window.innerWidth - hero.size) && hero.top === 0) {
        hero.moveRight();
    } else if (hero.top < (window.innerHeight - hero.size) && hero.left > 0) {
        hero.moveDown();
    } else if (hero.left > 0) {
        hero.moveLeft();
    } else if (hero.top > 0) {
        hero.moveUp();
    }

    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 10)
}

start();
















