'use strict';

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
      output.error(`${XMARK} ${getMessage(test.messageTree)} - ${error.message}`);
      break;
    case 'skipped':
      output.warn(`${OMARK} ${getMessage(test.messageTree)} - skipped`);
      break;
    case 'passed':
      output.info(`${CHECKMARK} ${getMessage(test.messageTree)}`);
      break;
  }
}

module.exports = outputSingleLog;
