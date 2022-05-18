class Car {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.speed = 0;
        this.maxSpeed = 3;
        this.acceleration = .1;
        this.friction = .005;

        this.controls = new Controls();
    }

    update() {
        if(this.controls.forward){
            this.speed +=this.acceleration;
        }
        if(this.controls.reverse){
            this.speed -= this.acceleration;
        }
        // if(Math.abs(this.speed) < .01) {
        //     this.speed = 0;
        // }
        if(this.speed < -this.maxSpeed/2) {
            this.speed = -this.maxSpeed/2;
        }
        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
        if (this.speed > 0) {
            this.speed -= this.friction;
        }
        if (this.speed < 0) {
            this.speed += this.friction;
        }
        this.y -= this.speed;
        // console.log(this.speed)
    }

    draw(context) {
        context.beginPath();
        context.rect(
            this.x - this.width/2,
            this.y - this.height/2,
            this.width,
            this.height
        );
        context.fill();
    }
}