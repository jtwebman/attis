'use strict';

const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const CYAN = '\x1b[36m';
const RESET = '\x1b[0m';

function getWriteFunction(stream, options, color) {
  if (options.color && color) {
    return (message) => stream.write(`${color}${message}${RESET}\n`);
  } else {
    return (message) => stream.write(`${message}\n`);
  }
}

function logger(stream, options) {
  return {
    error: getWriteFunction(stream, options, RED),
    warn: getWriteFunction(stream, options, CYAN),
    info: getWriteFunction(stream, options, GREEN)
  };
}

module.exports = logger;
