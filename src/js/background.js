import { Actor, Engine, Vector, Keys, Color } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Background extends Actor {

    onInitialize(){
        this.graphics.use(Resources.background.toSprite())
        this.pos = new Vector(400, 300)
        // background.scale = new Vector(3, 4)
    }

}