import { Actor, Engine, Vector, Keys, Color } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'


export class Pickup extends Actor {

    constructor(x, y) {
        super({x, y, width: Resources.item1.width, height: Resources.item1.height })
        this.acceleration = -10;
    }

    onInitialize(){
        const sprite = Resources.item1.toSprite()
        this.graphics.use(sprite)
        this.scale = new Vector(1, 1)
    }

}