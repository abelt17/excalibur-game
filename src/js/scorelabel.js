import { Label, Vector, Font, FontUnit, ScreenElement, Color } from "excalibur";

export class ScoreLabel extends Label {
    constructor() {
        super({
            text: 'Lap: 0',
            font: new Font({
                family: 'impact',
                size: 36,
                unit: FontUnit.Px,
                color: Color.White
            })
        });
        this.pos = new Vector(0, 0)
    }
}
