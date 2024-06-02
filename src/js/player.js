import { Actor, Vector, Keys, clamp, CollisionType } from "excalibur";
import { Resources } from './resources.js';
import { Pickup } from "./pickup.js";
import { Finish } from "./finish.js";
import { gameState } from "./gamestate.js";
import { InitializationComponent } from './initializationComponent';
import { Lightsaber } from './child.js'

class PlayerControls extends Actor {
    constructor(resource, startPosition) {
        super({ 
            width: resource.width - 100, 
            height: resource.height - 100, 
            rotation: Math.PI / 2 
        });
        this.body.collisionType = CollisionType.Active;
        this.graphics.use(resource.toSprite());
        this.scale = new Vector(0.05, 0.05);
        this.startPosition = startPosition;
        this.pos = new Vector(startPosition.x, startPosition.y);
        this.vel = new Vector(0, 0);
        this.acceleration = -2;
        this.friction = 0.02;
        this.brake = 0.04;
        this.speedMultiplier = 0.5;

        Object.assign(this, InitializationComponent);

    }

    onPreUpdate(engine, keys) {
        let accelerationVector = new Vector(0, 0);

        this.pos.x = clamp(this.pos.x, 0, 1510);
        this.pos.y = clamp(this.pos.y, 0, 730);

        if (engine.input.keyboard.isHeld(keys.up)) {
            accelerationVector = new Vector(
                Math.cos(this.rotation) * this.acceleration,
                Math.sin(this.rotation) * this.acceleration
            );
        } else {
            this.vel.x *= (1 - this.friction);
            this.vel.y *= (1 - this.friction);
        }

        if (engine.input.keyboard.wasPressed(keys.up)) {
            Resources.carEngine.play(1);
        }

        this.vel.addEqual(accelerationVector);

        if (engine.input.keyboard.isHeld(keys.right)) {
            this.rotation += 0.04;
        }
        if (engine.input.keyboard.isHeld(keys.left)) {
            this.rotation -= 0.04;
        }
        if (engine.input.keyboard.isHeld(keys.down)) {
            this.vel.x *= (1 - this.brake);
            this.vel.y *= (1 - this.brake);
        }
    }

    onInitialize() {
        this.initializeActor();
    }

    hitSomething(event) {
        if (event.other instanceof Pickup) {
            event.other.kill();
            this.acceleration = -4;
            this.scene.engine.clock.schedule(() => (
                this.acceleration = -2
            ), 2000);
        }
        if (event.other instanceof Finish) {
            this.scene.addPoint();
            if (gameState.score == 3.5) {
                this.scene.engine.goToScene('gameover');
                this.pos = new Vector(this.startPosition.x, this.startPosition.y);
                this.vel = new Vector(0, 0);
                this.rotation = Math.PI / 2;
            }
        }
        if (event.other instanceof Lightsaber) {
            event.other.kill();
            this.lightsaber = new Lightsaber(0, 0, 0.7, 0.7);
            this.addChild(this.lightsaber);
            this.lightsaber.body.collisionType = CollisionType.PreventCollision;

        }
    }
}

export class Player extends PlayerControls {
    constructor() {
        super(Resources.Racer1, new Vector(100, 350));
    }

    onPreUpdate(engine) {
        super.onPreUpdate(engine, {
            up: Keys.Up,
            down: Keys.Down,
            left: Keys.Left,
            right: Keys.Right
        });
    }
}

export class Player2 extends PlayerControls {
    constructor() {
        super(Resources.Racer2, new Vector(70, 350));
    }

    onPreUpdate(engine) {
        super.onPreUpdate(engine, {
            up: Keys.W,
            down: Keys.S,
            left: Keys.A,
            right: Keys.D
        });
    }
}
