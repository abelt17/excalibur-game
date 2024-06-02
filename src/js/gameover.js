import { Scene, Actor, Color, Label, Keys, Font, Vector } from 'excalibur';
import { Background } from './background';
import { Resources } from './resources';
import { gameState } from './gamestate';

class gameOverScene extends Scene {
    onInitialize(engine) {
        super.onInitialize(engine);

        const background1 = new Background(Resources.skyline.toSprite(), 750, 370, 1.1, 1);
        this.add(background1);

        const welcomeLabel = new Label({
            text: 'Game Over',
            pos: new Vector(550, 250),
            font: new Font({
                size: 70,
                family: 'sans-serif',
                color: Color.White,
                bold: true
            })
        });

        const subLabel = new Label({
            text: 'Press Enter to go to the menu',
            pos: new Vector(480, 400),
            font: new Font({
                size: 40,
                family: 'sans-serif',
                color: Color.White,
                bold: true
            })
        });
        
        const subSubLabel = new Label({
            text: `the best time was ${gameState.time} seconds`,
            pos: new Vector(480, 500),
            font: new Font({
                size: 40,
                family: 'sans-serif',
                color: Color.White,
                bold: true
            })
        });


        this.add(welcomeLabel);
        this.add(subLabel);
        this.add(subSubLabel);
    }

    update(engine, delta) {
        super.update(engine, delta);

        if (engine.input.keyboard.wasPressed(Keys.Enter)) {
            engine.goToScene('mainmenu');
            gameState.score = 0;

        }
    }
}

export { gameOverScene };
