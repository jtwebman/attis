#!/usr/bin/env node
'use strict';

const path = require('path');

const runner = require('../src/runner.js');

const testFolder = path.join(process.cwd(), 'test');
const args = process.argv.slice(2);

runner(testFolder, {
  verbose: !args.includes('-s')
}, (err, results) => {
  if (err) {
    console.error(err);
    process.exit(-1);
  } else {
    const errors = results.filter((result) => !result.passed);
    if (errors.length > 0) {
      console.log(`passed: ${results.length - errors.length}`);
      console.error(`failed: ${errors.length}`);
      process.exit(-1);
    } else {
      console.log(`passed: ${results.length}`);
      process.exit(0);
    }
  }
});
