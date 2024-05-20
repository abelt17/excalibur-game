import { Actor, Vector, Keys, clamp } from "excalibur";
import { Resources } from './resources.js';

export class Player extends Actor {
    constructor(diesel) {
        super({ width: Resources.Racer1.width - 100, height: Resources.Racer1.height - 100 });
        this.diesel = diesel;
        this.graphics.use(Resources.Racer1.toSprite());
        this.scale = new Vector(0.2, 0.2);
        this.pos = new Vector(250, 250);
        this.vel = new Vector(0, 0); 
    }

    onPreUpdate(engine) {
        let speed = 0
        if (engine.input.keyboard.isHeld(Keys.Up)) {
            speed = -200;
        }

        if (engine.input.keyboard.isHeld(Keys.Right)) {
            this.rotation += 0.05;
        }
        if (engine.input.keyboard.isHeld(Keys.Left)) {
            this.rotation -= 0.05;
        }

        let direction = new Vector(
            Math.cos(this.rotation) * speed,
            Math.sin(this.rotation) * speed
        );

        this.vel = direction;

    }   

    onInitialize() {
        this.on('collisionstart', (event) => this.hitSomething(event));
    }

    hitSomething(event) {
        console.log(`we hit something! ${event.other}`);
        event.other.kill();
    }

    shoot() {
        console.log("💥 Shoot!");
    }
}
