import { Actor, Vector, Keys, clamp, CollisionType, Sound, Loader } from "excalibur";
import { Resources } from './resources.js';
import { UI } from './UI.js';
import { Pickup } from "./pickup.js";
import { Finish } from "./finish.js";




export class Player extends Actor {
    constructor(gamer) {
        super({ width: Resources.Racer1.width - 100, height: Resources.Racer1.height - 100 });
        this.body.collisionType = CollisionType.Active
        this.gamer = gamer;
        this.graphics.use(Resources.Racer1.toSprite());
        this.scale = new Vector(0.05, 0.05);
        this.pos = new Vector(100, 350);
        this.vel = new Vector(0, 0);
        this.acceleration = -2;
        this.friction = 0.02;
        this.brake = 0.04;
        this.speedMultiplier = 0.5;
    }

    onPreUpdate(engine) {
        let accelerationVector = new Vector(0, 0);


        this.pos.x = clamp(this.pos.x, 0, 1510)
        this.pos.y = clamp(this.pos.y, 0, 730)

        if (engine.input.keyboard.isHeld(Keys.Up)) {

            accelerationVector = new Vector(
                Math.cos(this.rotation) * this.acceleration,
                Math.sin(this.rotation) * this.acceleration
            );
        } else {
            // Resources.carEngine.stop();
            // Apply friction when the up key is not pressed
            this.vel.x *= (1 - this.friction);
            this.vel.y *= (1 - this.friction);
        }
        if (engine.input.keyboard.wasPressed(Keys.Up)) {
            Resources.carEngine.play(1);

        }

        // Update velocity based on acceleration
        this.vel.addEqual(accelerationVector);

        if (engine.input.keyboard.isHeld(Keys.Right)) {
            this.rotation += 0.04;
        }
        if (engine.input.keyboard.isHeld(Keys.Left)) {
            this.rotation -= 0.04;
        }
        if (engine.input.keyboard.isHeld(Keys.Down)) {
            this.vel.x *= (1 - this.brake);
            this.vel.y *= (1 - this.brake);
        }


    }

    onInitialize() {
        this.on('collisionstart', (event) => this.hitSomething(event));
    }


    hitSomething(event) {
        if (event.other instanceof Pickup) {
            event.other.kill();
            this.acceleration = -4;
            this.scene.engine.clock.schedule(() => (
                this.acceleration = -2
            ), 1000)
        }
        if (event.other instanceof Finish) {
            this.scene.engine.addPoint();
        }
    }
}
