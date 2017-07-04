'use strict';

const testFixture = require('./test-fixture');

function skip(message) {
  return testFixture({message}, 'skip', (done) => done());
}

module.exports = skip;
