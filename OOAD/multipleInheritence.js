// Mixin for a flyable behavior
const flyableMixin = {
    fly() {
        console.log("I'm flying!");
    }
};

// Mixin for a swimable behavior
const swimableMixin = {
    swim() {
        console.log("I'm swimming!");
    }
};

class Bird {
    constructor(name) {
        this.name = name;
    }
}

// Combine mixins with class
class FlyingFish extends Bird { }
Object.assign(FlyingFish.prototype, flyableMixin, swimableMixin);

const nemo = new FlyingFish("Nemo");
nemo.fly(); // Output: I'm flying!
nemo.swim(); // Output: I'm swimming!
