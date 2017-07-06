'use strict';

function outputTotaleLog(output, results) {
  const totals = results.reduce((counts, result) => {
    counts[result.status] += 1;
    return counts;
  }, {passed: 0, skipped: 0, failed: 0});

  if (totals.failed > 0) {
    logger.info(`passed:  ${totals.passed}`);
    logger.error(`failed:  ${totals.failed}`);
    logger.warn(`skipped: ${totals.skipped}`);
    process.exit(-1);
  } else {
    logger.info(`passed:  ${results.length}`);
    logger.warn(`skipped: ${totals.skipped}`);
    process.exit(0);
  }
}

module.exports = outputTotaleLog;
