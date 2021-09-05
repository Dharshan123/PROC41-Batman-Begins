class Umbrella {
    constructor(x,y) {
        var options = {
            isStatic: true
        }
        this.image = loadImage("Walking Frame/walking_4.png");
        this.umbrella = Bodies.circle(x,y,212,options);
        this.radius = 212;
        World.add(world,this.umbrella);
    }
    display() {
        var position = this.umbrella.position
        imageMode(CENTER)
        image(this.image,position.x,position.y,422,540);
    }
}