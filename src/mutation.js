const Logger = require('./modules/logger')
const runner = require('./modules/runner')

function mutation (endPoint, query, options) {
  const logger = new Logger(options)
  logger.log('Starting a new mutation')
  return runner.run(endPoint, query, options, 'mutation')
}

module.exports = mutation