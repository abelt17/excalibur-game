import { ImageSource, Sound, Resource, Loader } from 'excalibur'

const Resources = {
    Fish: new ImageSource('images/fish.png'),
    Diesel: new ImageSource('images/vindiesel.jpg'),
    Racer1: new ImageSource('images/top-view-car-1.png'),
    background: new ImageSource('images/race-track.png'),
    item1: new ImageSource('images/questionblock.png')
}
const ResourceLoader = new Loader([
    Resources.Fish,
    Resources.Diesel,
    Resources.Racer1,
    Resources.background,
    Resources.item1

])

export { Resources, ResourceLoader }