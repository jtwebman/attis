'use strict';

const describe = require('./describe');
const test = require('./test');

const attis = {
  describe,
  it: test,
  test
};

module.exports = attis;
