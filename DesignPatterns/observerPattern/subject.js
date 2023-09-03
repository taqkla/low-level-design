module.exports = class Subject {
    constructor(name) {
        this.name = name;
        this.subscribers = [];
    }
    subscribe(observer) {
        this.subscribers.push(observer);
        console.log(`${observer.name} subscribed a youtube channel : ${this.name}`);
    }

    unSubscribe(observer) {
        this.subscribers.filter(subscriber => subscriber !== observer)
        console.log(`${observer.name} unSubscribed a youtube channel : ${this.name}`);
    }

    notify(message) {
        this.subscribers.forEach(subscriber => subscriber.notified(message))
    }
}