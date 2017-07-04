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
    const totals = results.reduce((counts, result) => {
      counts[result.status] += 1;
      return counts;
    }, {passed: 0, skipped: 0, failed: 0});

    if (totals.failed > 0) {
      console.log(`passed:  ${totals.passed}`);
      console.error(`failed:  ${totals.failed}`);
      console.error(`skipped: ${totals.skipped}`);
      process.exit(-1);
    } else {
      console.log(`passed:  ${results.length}`);
      console.error(`skipped: ${totals.skipped}`);
      process.exit(0);
    }
  }
});
