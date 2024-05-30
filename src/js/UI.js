import { Label, Vector, Font, FontUnit, ScreenElement } from "excalibur";
import { ScoreLabel } from "./scorelabel";

export class UI extends ScreenElement {
    onInitialize(engine) {
        this.scoreLabel = new ScoreLabel();
        this.addChild(this.scoreLabel);
        this.score = 0;

    }

    addPoint() {
        this.score++;
        this.scoreLabel.text = `Lap: ${this.score}`;
        if (this.score == 4) {
            console.log('hello')
        }
    }

}
