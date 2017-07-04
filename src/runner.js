'use strict';

const async = require('async');

const callOnce = require('./call-once');
const outputSingleLog = require('./output-single-log');
const searchDirector = require('./search-directory');

function callDone(test, options, error, done) {
  if (options.verbose) {
    outputSingleLog(test, error);
  }
  done(null, {
    messageTree: test.messageTree,
    passed: !error,
    error
  });
}

function runTest(test, options, done) {
  const finished = callOnce(callDone);
  try {
    setTimeout(() => { // Check for a timeout
      const timeoutError = new Error(`timeout at ${options.timeout || 2000}ms`);
      finished(test, options, timeoutError, done);
    }, options.timeout || 2000);

    test.run((error) => {
      finished(test, options, error, done);
    });
  } catch (error) {
    finished(test, options, error, done);
  }
}

function getAllTests(testFolder, options, done) {
  searchDirector(testFolder, options.pattern || /^.*$/, (err, files) => {
    if (err) return done(err);
    done(null, files.reduce((tests, file) => {
      return tests.concat(require(file));
    }, []));
  });
}

function runner(testFolder, options, done) {
  getAllTests(testFolder, options, (err, tests) => {
    if (err) return done(err);
    async.parallel(tests.map((test) => {
      return (testDone) => {
        runTest(test, options, testDone);
      };
    }), done);
  });
}

module.exports = runner;
