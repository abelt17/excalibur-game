import { Actor, Engine, Vector, Keys, Color } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Player } from "./player.js";

export class Track extends Actor {
    constructor() {
        super({
            pos: new Vector(755, 370),
            scale: new Vector(0.76, 0.66)
            
        });
        this.graphics.use(Resources.Track.toSprite());
    }

    onInitialize() {
        this.on('collisionstart', (event) => this.hitSomething(event));
        this.on('collisionend', (event) => this.unHitSomething(event));

    }

    hitSomething() {
        if(event.other instanceof Player) {
            console.log("car is on the road")
       }

    }

    unHitSomething() {
        if(event.other instanceof Player) {
            console.log("car is NOT the road")
       }

    }

    
    
}
