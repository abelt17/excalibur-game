import '../css/style.css';
import { Actor, Engine, Vector, Keys, Color, clamp, BoundingBox, Sound, Loader } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Level } from './track.js';
import { MainMenuScene } from './mainMenu.js';
import { gameOverScene } from './gameover.js';


class Game extends Engine {
    constructor() {
        super({ width: 1510, height: 730 });
        this.start(ResourceLoader).then(() => this.startGame());
    }

    async startGame() {

        this.add('mainmenu', new MainMenuScene());
        this.add('level', new Level());
        this.add('gameover', new gameOverScene());

        this.goToScene('mainmenu');
    }
}


new Game();
