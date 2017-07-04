'use strict';

const describe = require('./describe');
const test = require('./test');

const testie = {
  describe,
  it: test,
  test
};

module.exports = testie;
