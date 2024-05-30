import { Actor, Engine, Vector, Keys, Color } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Background extends Actor {
    constructor(sprite, x, y, xg, yg) {
        super({
            // pos: new Vector(755, 370),
            // scale: new Vector(0.76, 0.66)
            pos: new Vector(x, y),
            scale: new Vector(xg, yg)
        });
        this.graphics.use(sprite);
    }
}
