'use strict';

const describe = require('./describe');
const skip = require('./skip');
const test = require('./test');

const attis = {
  describe,
  it: test,
  skip,
  test
};

module.exports = attis;
