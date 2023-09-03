module.exports = class Observer {
    constructor(name) {
        this.name = name;
    }
    notified(message) {
        console.log(`Hello ${this.name} :: ${message}`);

    }
}