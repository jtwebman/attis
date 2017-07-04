'use strict';

function testFixture(messageTree, runFunction) {
  return {
    messageTree,
    run: runFunction
  };
}

module.exports = testFixture;
