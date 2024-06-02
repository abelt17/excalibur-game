import { Label, Vector, Font, FontUnit, ScreenElement, Timer, Color } from "excalibur";
import { ScoreLabel } from "./scorelabel";
import { gameState } from "./gamestate";

export class UI extends ScreenElement {
    onInitialize(engine) {

        this.scoreLabel = new ScoreLabel();
        this.addChild(this.scoreLabel);
        this.score = 0;

        this.timerLabel = new Label({
            text: 'Time: 0',
            pos: new Vector(10, 50),
            font: new Font({
                family: 'impact',
                size: 36,
                unit: FontUnit.Px,
                color: Color.White
            })
        });
        this.addChild(this.timerLabel);

        this.elapsedTime = 0;
        this.timer = new Timer({
            interval: 1000,
            repeats: true,
            fcn: () => this.updateTimer()
        });
        engine.add(this.timer);
        this.timer.start();

        if (this.score > 0) {
            this.score = 0;
        }
    }
    
    addPoint(engine) {
        this.score += 0.5;
        this.scoreLabel.text = `Lap: ${this.score}`;
        gameState.score = this.score;
        if (this.score == 3.5) {
            this.resetScore();
            this.timer.stop();
            gameState.time = this.elapsedTime;
        }
    }

    resetScore() {
        this.score = 0;
        this.scoreLabel.text = `Lap: ${this.score}`;
    }

    updateTimer() {
        this.elapsedTime++;
        this.timerLabel.text = `Time: ${this.elapsedTime}`;
    }
}
