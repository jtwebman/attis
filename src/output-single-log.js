'use strict';

const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const RESET = '\x1b[0m';

const CHECKMARK = '\u2714';
const XMARK = '\u2718';
const ARROW = '\u2192';

function getMessage(messageTree) {
  if (messageTree.next) {
    return `${messageTree.message} ${ARROW} ${getMessage(messageTree.next)}`;
  }
  return messageTree.message;
}

function outputSingleLog(test, error) {
  if (error) {
    console.log(`${RED}${XMARK} ${getMessage(test.messageTree)} - ${error.message}${RESET}`);
  } else {
    console.log(`${GREEN}${CHECKMARK} ${getMessage(test.messageTree)}${RESET}`);
  }
}

module.exports = outputSingleLog;
