export const InitializationComponent = {
    initializeActor() {
        this.on('collisionstart', (event) => this.hitSomething(event));
    }
};
