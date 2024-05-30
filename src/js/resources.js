import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import { Finish } from './finish'
import { Lightsaber } from './child'

const Resources = {
    Fish: new ImageSource('images/fish.png'),
    Diesel: new ImageSource('images/vindiesel.jpg'),
    Racer1: new ImageSource('images/green-car-bgless.png'),
    Racer2: new ImageSource('images/white-car-bgless.png'),
    background: new ImageSource('images/race-track-pixel-bigger.png'),
    Track: new ImageSource('images/race-track-cutout.png'),
    item1: new ImageSource('images/questionblock.png'),
    finish: new ImageSource('images/finish.png'),
    music: new Sound('./images/house-beat.mp3'),
    carEngine: new Sound('./images/car-engine.mp3'),
    skyline: new ImageSource('./images/skyline-bg.jpg'),
    Lightsaber: new ImageSource('./images/lightsaber.png')

}
const ResourceLoader = new Loader([
    Resources.Fish,
    Resources.Diesel,
    Resources.Racer1,
    Resources.Racer2,
    Resources.background,
    Resources.Track,
    Resources.item1,
    Resources.finish,
    Resources.music,
    Resources.carEngine,
    Resources.skyline,
    Resources.Lightsaber,
])

export { Resources, ResourceLoader }