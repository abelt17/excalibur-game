import { Actor, Color, Vector } from 'excalibur';
import { Resources, ResourceLoader } from './resources.js'


class Lightsaber extends Actor {
    constructor(x, y, xg ,yg) {
        super({width: Resources.Lightsaber.width - 300, height: Resources.Lightsaber.height - 300,
            pos: new Vector(x, y),
            scale: new Vector(xg, yg)
        });
    }
    onInitialize(){
        const sprite = Resources.Lightsaber.toSprite()
        this.graphics.use(sprite)
    }

}

export {Lightsaber}
