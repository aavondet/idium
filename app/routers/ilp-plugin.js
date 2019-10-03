const path = require('path')
const log = require('ilp-logger')('ilp-plugin')
const crypto = require('crypto')
const URL = require('url').URL


/**
 * opts is an object of form:
 *  {
 *    'user': username,
 *    'secret': secret_value,
 *    'endpoint': endpoint
 *  }
 */
function pluginFromOptions (opts) {
  const name = opts.name;
  const secret = opts.secret;
  const endpoint = opts.endpoint;
  return { server: `btp+ws://${name}:${secret}@${endpoint}` }
}

module.exports = pluginFromOptions
