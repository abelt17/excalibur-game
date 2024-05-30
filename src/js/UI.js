import { Label, Vector, Font, FontUnit, ScreenElement } from "excalibur";
import { ScoreLabel } from "./scorelabel";
import { gameState } from "./gamestate";

export class UI extends ScreenElement {

    onInitialize(engine) {
        this.scoreLabel = new ScoreLabel();
        this.addChild(this.scoreLabel);
        this.score = 0;

        if(this.score > 0) {
            this.score = 0;
        }
    }
    
    addPoint(engine) {
        this.score++;
        this.scoreLabel.text = `Lap: ${this.score}`;
        gameState.score = this.score;
        if (this.score == 4) {
            this.resetScore();
        }
    }

    resetScore() {
        this.score = 0;
        this.scoreLabel.text = `Lap: ${this.score}`;
    }

}
