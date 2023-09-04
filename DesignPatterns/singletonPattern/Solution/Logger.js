class Logger {
    constructor() {
        if (Logger.instance == null) {
            this.logs = []
            Logger.instance = this
        }
        return Logger.instance
    }

    log(message) {
        this.logs.push(message);
        console.log(`Logger: ${message}`);
    }

    printLogCount() {
        console.log(`Logger: ${this.logs.length}`);
    }
}

const logger = new Logger();
Object.freeze(logger);
module.exports = logger;
