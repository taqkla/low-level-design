module.exports = class Logger {
    constructor() {
        this.logs = [];
    }

    log(message) {
        this.logs.push(message);
        console.log(`Logger: ${message}`);
    }

    printLogCount() {
        console.log(`Logger: ${this.logs.length}`);
    }
}
