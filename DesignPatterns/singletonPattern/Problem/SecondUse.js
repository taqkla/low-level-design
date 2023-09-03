const Logger = require('./Logger')

const logger = new Logger();

module.exports = function logSecondImplementation() {
    logger.printLogCount()
    logger.log('Second file')
    logger.printLogCount()
}