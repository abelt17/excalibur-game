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
        console.log("point");
        this.scoreLabel.text = `Score: ${this.score}`;

    }
}
