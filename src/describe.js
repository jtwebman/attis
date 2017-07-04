'use strict';

const testFixture = require('./test-fixture');

/**
 * Describe block for nesting tests.
 * @param  {string} message   The test group message
 * @param  {function[]} tests The test or describe functions
 * @return {object[]}         Returns array of test runners
 */
function describe(message, tests) {
  return tests.reduce((testFixtures, test) => {
    if (Array.isArray(test)) {
      test.forEach((innerTest) => {
        testFixtures.push(testFixture({message, next: innerTest.messageTree}, innerTest.run));
      });
    } else {
      testFixtures.push(testFixture({message, next: test.messageTree}, test.run));
    }
    return testFixtures;
  }, []);
}

module.exports = describe;
