const Logger = require('./Logger')

const logger = new Logger()

module.exports = function logFirstImplementation() {
    logger.printLogCount()
    logger.log('First log')
    logger.printLogCount()
}