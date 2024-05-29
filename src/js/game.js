import '../css/style.css';
import { Actor, Engine, Vector, Keys, Color, clamp, BoundingBox, Sound, Loader } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Player } from './player.js';
import { Player2 } from './player2.js';
import { Background } from './background.js';
import { Pickup } from "./pickup.js";
import { UI } from './UI.js';
import { Track } from './track.js';
import { ColliderGroup } from './collider.js';
import { Finish } from './finish.js';

export class Game extends Engine {

    constructor() {
        super({width: 1510, height: 730});
        this.start(ResourceLoader).then(() => this.startGame());
    }

    async startGame() {

        Resources.music.play();
        Resources.music.loop = true;
        

        const background1 = new Background(Resources.background.toSprite());
        this.add(background1);

        const road = new Track();
        this.add(road);

        const collider = new ColliderGroup();
        this.add(collider);

        this.add(new Finish());

        this.player = new Player();
        this.add(this.player);

        this.player2 = new Player2();
        this.add(this.player2);

        // this.currentScene.camera.strategy.lockToActor(this.player);
        // this.currentScene.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 1510, 730));
        // this.currentScene.camera.zoom = 3;

        this.ui = new UI();
        this.add(this.ui);

        // const pickup = new Pickup(1400, 350);
        this.add(new Pickup(1430, 350));
        this.add(new Pickup(1380, 350));

        
    }

    addPoint() {
        this.ui.addPoint()
    }
}

new Game();
