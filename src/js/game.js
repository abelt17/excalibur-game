import '../css/style.css';
import { Actor, Engine, Vector, Keys, Color, clamp, BoundingBox } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Fish } from "./fish.js";
import { Player } from './player.js';
import { Background } from './background.js';
import { Pickup } from "./pickup.js";
import { ScoreLabel } from "./scorelabel.js"; 

export class Game extends Engine {
    constructor() {
        super({ width: 1280, height: 720 });
        this.start(ResourceLoader).then(() => this.startGame());
    }

    startGame() {
        this.score = 0;
        console.log("start de game!");

        const background = new Background();
        this.add(background);

        this.player = new Player();
        this.add(this.player);
        this.currentScene.camera.strategy.lockToActor(this.player);
        this.currentScene.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 1280, 800));
        // Adjust the zoom level of the camera
        this.currentScene.camera.zoom = 1.5; // Adjust this value as needed, >1 to zoom in, <1 to zoom out

        this.scoreLabel = new ScoreLabel(this.player);  // Create ScoreLabel instance
        this.add(this.scoreLabel);

        for (let i = 0; i < 10; i++) {
            let fish = new Fish();
            this.add(fish);
        }

        const pickup = new Pickup();
        this.add(pickup);
    }

    addPoint() {
        this.score++;
        this.scoreLabel.addPoint();
    }
}

new Game();
