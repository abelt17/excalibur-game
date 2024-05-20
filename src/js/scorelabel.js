import { Label, Vector, Font, FontUnit } from "excalibur";

export class ScoreLabel extends Label {
    constructor(player) {
        super({
            text: 'Score: 0',
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        });
        this.player = player;
        this.score = 0;
    }

    onPreUpdate(engine) {
        // Update position to follow the player
        this.pos = this.player.pos.add(new Vector(-200, -200)); // Adjust offset as needed
        this.text = `Score: ${this.score}`;
    }

    addPoint() {
        this.score++;
    }
}
