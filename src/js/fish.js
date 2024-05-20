import { Actor, Engine, Vector, Keys, Color } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'


export class Fish extends Actor {

    constructor() {
        super({width: Resources.Diesel.width, height: Resources.Diesel.height })
    }

    onInitialize(){
        const sprite = Resources.Diesel.toSprite()
        // sprite.tint = new Color(Math.random() * 255, Math.random() * 255, Math.random() * 255, Math.random() * 255)
        this.graphics.use(sprite)
        let size = Math.random() * (0.5 - 0.2) + 0.2
        this.scale = new Vector(size, size)
        this.pos = new Vector(Math.random() * 1280, -100)
        this.vel = new Vector(0, Math.random()*250)

        this.on("pointerup", ()=> this.kill())
    }


    onPreUpdate(){
        if(this.pos.y > 720) {
            this.pos.y = 0
        }
    }

    onPostKill(){
        console.log("killed")
        this.scene.engine.addPoint()
    }
}