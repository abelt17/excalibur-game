import '../css/style.css';
import { Actor, Engine, Vector, Keys, Color, clamp, BoundingBox, Sound, Loader } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Player } from './player.js';
import { Player2 } from './player2.js';
import { Background } from './background.js';
import { Pickup } from "./pickup.js";
import { UI } from './UI.js';
import { ColliderGroup } from './collider.js';
import { Finish } from './finish.js';
// import { Level } from './track.js';

export class Game extends Engine {

    constructor() {
        super({ width: 1510, height: 730 });
        this.start(ResourceLoader).then(() => this.startGame());
    }

    async startGame() {

        Resources.music.play();
        Resources.music.loop = true;

        const background1 = new Background(Resources.background.toSprite());
        this.add(background1);

        const collider = new ColliderGroup();
        this.add(collider);

        this.add(new Finish());

        this.player = new Player();
        this.add(this.player);

        this.player2 = new Player2();
        this.add(this.player2);

        // this.currentScene.camera.strategy.lockToActor(this.player);
        this.currentScene.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 1510, 730));

        this.ui = new UI();
        this.add(this.ui);

        // const pickup = new Pickup(1400, 350);
        this.add(new Pickup(1430, 350));
        this.add(new Pickup(1380, 350));


    }

    onPreUpdate(engine, delta) {
        super.onPreUpdate(engine, delta);
        
        const player1Pos = this.player.pos;
        const player2Pos = this.player2.pos;
        const midpoint = player1Pos.add(player2Pos).scale(0.5);

        this.currentScene.camera.pos = midpoint;

        const distance = player1Pos.distance(player2Pos);

        // Set zoom based on distance
        const minZoom = 3;
        const maxZoom = 1;
        const maxDistance = 1000; // The distance at which the camera is fully zoomed out

        // Calculate zoom level (linearly interpolate between minZoom and maxZoom based on distance)
        const zoom = minZoom + (maxZoom - minZoom) * Math.min(distance / maxDistance, 1);

        this.currentScene.camera.zoom = zoom;

    }


    addPoint() {
        this.ui.addPoint()
    }
}

// export class Game extends Engine {
//     constructor() {
//         super({ width: 1510, height: 730 });
//         this.start(ResourceLoader).then(() => this.startGame());
//     }
//     startGame() {
//         this.add('level', new Level())
//         // this.add('game-over', new GameOver())
//         this.goToScene('level')
//     }
// }


new Game();
