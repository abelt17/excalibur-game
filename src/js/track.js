import { Actor, Scene, Vector, Color, BoundingBox, Sound, Timer } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Player, Player2 } from './player.js';
import { Background } from './background.js';
import { Pickup } from "./pickup.js";
import { UI } from './UI.js';
import { ColliderGroup } from './collider.js';
import { Finish } from './finish.js';
import { Lightsaber } from './child.js';


export class Level extends Scene {


    onActivate(ctx) {

        Resources.music.play();
        Resources.music.loop = true;

        const background1 = new Background(Resources.background.toSprite(), 755, 370, 0.76, 0.66);
        this.add(background1);

        const collider = new ColliderGroup();
        this.add(collider);

        this.add(new Finish());

        this.add(new Lightsaber(100, 100, 0.05, 0.05));

        this.player = new Player();
        this.add(this.player);

        this.player2 = new Player2();
        this.add(this.player2);

        this.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 1510, 730));

        this.ui = new UI();
        this.add(this.ui);

        this.add(new Pickup(1430, 350));
        this.add(new Pickup(1380, 350));
    }

    onPreUpdate(engine, delta) {
        super.onPreUpdate(engine, delta);
        
        const player1Pos = this.player.pos;
        const player2Pos = this.player2.pos;
        const midpoint = player1Pos.add(player2Pos).scale(0.5);

        this.camera.pos = midpoint;

        const distance = player1Pos.distance(player2Pos);

        const minZoom = 1;
        const maxZoom = 3;
        const maxDistance = 1000;

        const zoom = maxZoom + (minZoom - maxZoom) * Math.min(distance / maxDistance, 1);

        this.camera.zoom = zoom;
    }

    addPoint() {
        this.ui.addPoint();
    }

}

