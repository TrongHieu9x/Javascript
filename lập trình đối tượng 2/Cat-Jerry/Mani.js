let Cat1 = new Cat("Rat", 10, 30)
let Mouse1 = new Mouse("Mickey1", 3, 35, true)
let Mouse2 = new Mouse("Mickey2", 3, 25, false)
let Mouse3 = new Mouse("Mickey3", 3, 25, true)
let Mouse4 = new Mouse("Mickey4", 3, 20, false)
let mouse = [Mouse1, Mouse2, Mouse3, Mouse4];
function catchMouse(mouse) {
    for (let i = 0; i < mouse.length; i++) {
        if (mouse[i].getStatus()){
            if (Cat1.getSpeed() >= mouse[i].getSpeed()){
                console.log("Đã thịt con "+mouse[i].getName())
                Cat1.weight += mouse[i].getWeight()
                mouse[i].status = !mouse[i].getStatus()
                Cat1.speed -= 5
                mouse.splice(i,1)
                i--;
            } else
                console.log("A tha :v")
        } else

            console.log("Con "+mouse[i].getName()+" Chết rồi không muốn thịt")
    }
}