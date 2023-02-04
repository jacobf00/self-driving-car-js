const canvas = document.getElementById("myCanvas");
// canvas.width = window.innerWidth - 2*100;
canvas.width = 400;

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width/2,canvas.width*.9);
const car = new Car(road.getLaneCenter(0),100,30,50);
// car.draw(ctx);

animate();

function animate() {
    car.update();
    canvas.height = window.innerHeight;

    ctx.save();
    ctx.translate(0,-car.y+canvas.height*0.5)

    road.draw(ctx);
    car.draw(ctx);

    ctx.restore();
    requestAnimationFrame(animate);
}
