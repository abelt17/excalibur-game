import { Actor, Engine, Vector, Keys, Color } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'


export class Finish extends Actor {

    constructor() {
        super({width: Resources.finish.width, height: Resources.finish.height })
    }

    onInitialize(){
        const sprite = Resources.finish.toSprite()
        this.graphics.use(sprite)
        this.scale = new Vector(0.75, 0.75)
        this.pos = new Vector(93, 300)
    }

}