const Logger = require('./Logger')

const logger = new Logger(); // Object2 - log - []

module.exports = function logSecondImplementation() {
    logger.printLogCount()
    logger.log('Second file')
    logger.printLogCount()
}