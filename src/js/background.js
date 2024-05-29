import { Actor, Engine, Vector, Keys, Color } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Background extends Actor {
    constructor(sprite) {
        super({
            pos: new Vector(755, 370),
            scale: new Vector(0.76, 0.66)
        });
        this.graphics.use(sprite);
    }
}
