const Logger = require('./Logger')

const logger = new Logger(); // Object1 - logs = [First File]

module.exports = function logFirstImplementation() {
    logger.printLogCount();
    logger.log('First log');
    logger.printLogCount();
}