const logger = require('./Logger')

module.exports = function logFirstImplementation() {
    logger.printLogCount()
    logger.log('First log')
    logger.printLogCount()
}