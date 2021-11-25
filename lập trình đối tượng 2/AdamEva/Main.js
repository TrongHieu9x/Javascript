let adam = new Human('Adam', 'Male', 75);
let eva = new Human('Eva', 'Female', 50);
let apple = new Apple(10);

function run() {
    while (apple.isEmpty()) {
        adam.eat(apple);
        eva.eat(apple);
    }
}