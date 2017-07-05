'use strict';

const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const CYAN = '\x1b[36m';
const RESET = '\x1b[0m';

const CHECKMARK = '\u2714';
const XMARK = '\u2718';
const OMARK = '\u25CF';
const ARROW = '\u2192';

function getMessage(messageTree) {
  if (messageTree.next) {
    return `${messageTree.message} ${ARROW} ${getMessage(messageTree.next)}`;
  }
  return messageTree.message;
}

function outputSingleLog(output, test, status, error) {
  switch (status) {
    case 'failed':
      output.log(`${RED}${XMARK} ${getMessage(test.messageTree)} - ${error.message}${RESET}`);
      break;
    case 'skipped':
      output.log(`${CYAN}${OMARK} ${getMessage(test.messageTree)} - skipped${RESET}`);
      break;
    case 'passed':
      output.log(`${GREEN}${CHECKMARK} ${getMessage(test.messageTree)}${RESET}`);
      break;
  }
}

module.exports = outputSingleLog;
