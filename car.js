class Car {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.speed = 0;
        this.maxSpeed = 4;
        this.acceleration = .05;
        // this.friction = .01;

        this.angle = 0;

        this.controls = new Controls();

        this.friction = this.controls.friction;
    }

    update() {
        // update friction
        this.friction = this.controls.friction;

        //move car
        this.#move()
    }

    #move() {
        // move method
        if (this.controls.forward) {
            this.speed += this.acceleration;
        }
        if (this.controls.reverse) {
            this.speed -= this.acceleration;
        }
        // if(Math.abs(this.speed) < .01) {
        //     this.speed = 0;
        // }
        if (this.speed < -this.maxSpeed / 2) {
            this.speed = -this.maxSpeed / 2;
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
        if (Math.abs(this.speed) < this.friction) {
            this.speed = 0;
        }

        // left and right controls
        if (this.speed != 0) {
            const flip = this.speed > 0 ? 1 : -1;

            if (this.controls.left) {
                this.angle += .03 * flip;
            }
            if (this.controls.right) {
                this.angle -= .03 * flip;
            }
        }

        this.x -= this.speed * Math.sin(this.angle);
        this.y -= this.speed * Math.cos(this.angle);
        // console.log(this.speed)
    }

    draw(context) {
        context.save();
        context.translate(this.x,this.y);
        context.rotate(-this.angle);

        context.beginPath();
        context.rect(
            -this.width/2,
            -this.height/2,
            this.width,
            this.height
        );
        context.fill();

        context.restore();
    }
}