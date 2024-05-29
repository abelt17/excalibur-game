import { Actor, Engine, Vector, Keys, Color, CompositeCollider, Shape, CollisionType } from "excalibur"

export class ColliderGroup extends Actor {
    onInitialize(engine) {
        let landscape = new CompositeCollider([
            Shape.Edge(new Vector(0, 0), new Vector(0, 375)),
            Shape.Edge(new Vector(0, 375), new Vector(25, 380)),
            Shape.Edge(new Vector(25, 380), new Vector(25, 445)),
            Shape.Edge(new Vector(25, 445), new Vector(120, 445)),
            Shape.Edge(new Vector(120, 445), new Vector(300, 290)),
            Shape.Edge(new Vector(300, 290), new Vector(550, 290)),
            Shape.Edge(new Vector(550, 290), new Vector(560, 500)),
            Shape.Edge(new Vector(560, 500), new Vector(680, 500)),
            Shape.Edge(new Vector(680, 500), new Vector(790, 440)),
            Shape.Edge(new Vector(790, 440), new Vector(900, 440)),
            Shape.Edge(new Vector(900, 440), new Vector(950, 490)),
            Shape.Edge(new Vector(950, 490), new Vector(1150, 490)),
            Shape.Edge(new Vector(1150, 490), new Vector(1200, 440)),
            Shape.Edge(new Vector(1200, 440), new Vector(1200, 190)),
            Shape.Edge(new Vector(1200, 190), new Vector(1000, 190)),
            Shape.Edge(new Vector(1000, 190), new Vector(1000, 0)),
            Shape.Edge(new Vector(1000, 0), new Vector(1160, 0)),
            Shape.Edge(new Vector(1160, 0), new Vector(1160, -75)),
            Shape.Edge(new Vector(1160, -75), new Vector(835, -75)),
            Shape.Edge(new Vector(835, -75), new Vector(835, 130)),
            Shape.Edge(new Vector(835, 130), new Vector(100, 130)),
            Shape.Edge(new Vector(100, 130), new Vector(100, 0)),
            Shape.Edge(new Vector(100, 0), new Vector(0, 0)),

            Shape.Edge(new Vector(-90, -100), new Vector(-90, 510)),
            Shape.Edge(new Vector(-90, -100), new Vector(175, -100)),
            Shape.Edge(new Vector(175, -100), new Vector(175, 50)),
            Shape.Edge(new Vector(175, 50), new Vector(730, 50)),
            Shape.Edge(new Vector(730, 50), new Vector(730, -200)),

            Shape.Edge(new Vector(1320, -200), new Vector(1320, 75)),
            Shape.Edge(new Vector(1150, 75), new Vector(1320, 75)),
            Shape.Edge(new Vector(1150, 75), new Vector(1150, 120)),
            Shape.Edge(new Vector(1150, 120), new Vector(1320, 120)),
            Shape.Edge(new Vector(1320, 120), new Vector(1320, 565)),
            Shape.Edge(new Vector(1320, 565), new Vector(860, 565)),
            Shape.Edge(new Vector(860, 565), new Vector(860, 515)),
            Shape.Edge(new Vector(860, 515), new Vector(740, 565)),
            Shape.Edge(new Vector(740, 565), new Vector(470, 565)),
            Shape.Edge(new Vector(470, 565), new Vector(470, 390)),
            Shape.Edge(new Vector(470, 390), new Vector(400, 350)),
            Shape.Edge(new Vector(400, 350), new Vector(300, 390)),
            Shape.Edge(new Vector(300, 390), new Vector(300, 510)),
            Shape.Edge(new Vector(300, 510), new Vector(-90, 510)),
        ])
        this.body.collisionType = CollisionType.Fixed
        this.collider.set(landscape)
        this.pos= new Vector(140, 140)
    }
}