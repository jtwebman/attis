#!/usr/bin/env node
'use strict';

const path = require('path');

const runner = require('../src/runner.js');
const outputTotaleLog = require('../src/output-total-log.js');

const testFolder = path.join(process.cwd(), 'test');
const args = process.argv.slice(2);

const options = {
  verbose: args.indexOf('-s') < 0,
  color: args.indexOf('--no-color') < 0
};

const logger = require('../src/logger.js')(process.stdout, options);

options.output = logger;

runner(testFolder, options, (err, results) => {
  if (err) {
    logger.error(err);
    process.exit(-1);
  } else {
    outputTotaleLog(logger, results);
  }
});
