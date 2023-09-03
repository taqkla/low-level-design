const logger = require('./Logger');

module.exports = function logSecondImplementation() {
    logger.printLogCount()
    logger.log('Second file')
    logger.printLogCount()
}