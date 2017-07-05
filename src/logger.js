'use strict';

const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const CYAN = '\x1b[36m';
const RESET = '\x1b[0m';

function getWriteFunction(stream, color) {
  if (color) {
    return (message) => stream.write(`${color}${message}${RESET}\n`);
  } else {
    return (message) => stream.write(`${message}\n`);
  }
}

function logger(stream, options) {
  return {
    error: getWriteFunction(stream, RED),
    warn: getWriteFunction(stream, CYAN),
    info: getWriteFunction(stream, GREEN),
    verbose: getWriteFunction(stream, GREEN),
    debug: getWriteFunction(stream)
  };
}

module.exports = logger;
