import { Actor, Engine, Vector, Keys, Color } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'


export class Pickup extends Actor {

    constructor() {
        super({width: Resources.item1.width, height: Resources.item1.height })
    }

    onInitialize(){
        const sprite = Resources.item1.toSprite()
        // sprite.tint = new Color(Math.random() * 255, Math.random() * 255, Math.random() * 255, Math.random() * 255)
        this.graphics.use(sprite)
        // let size = Math.random() * (0.5 - 0.2) + 0.2
        this.scale = new Vector(2, 2)
        this.pos = new Vector(Math.random() * 1280, Math.random() * 720)

    }



    onPostKill(){
        console.log("picked up")
    }
}