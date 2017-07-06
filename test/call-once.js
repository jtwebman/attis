'use strict';

const assert = require('chai').assert;

const attis = require('../src/attis');
const describe = attis.describe;
const it = attis.it;

const callOnce = require('../src/call-once');

module.exports = describe('call once', [

  it('returns a function that only can be called once', () => {
    let called = 0;
    function testCallOnce() {
      return ++called;
    }
    const callOnceTest = callOnce(testCallOnce);
    assert.equal(0, called);
    callOnceTest(); // first call
    assert.equal(1, called);
    callOnceTest(); // second call
    assert.equal(1, called);
  })

]);
