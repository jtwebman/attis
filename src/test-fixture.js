'use strict';

function testFixture(messageTree, action, runFunction) {
  return {
    messageTree,
    action,
    run: runFunction
  };
}

module.exports = testFixture;
