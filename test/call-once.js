'use strict';

const assert = require('chai').assert;

const attis = require('../src/attis');
const describe = attis.describe;
const it = attis.it;

const callOnce = require('../src/call-once');

module.exports = describe('call once function', [

  it('returns a function that only can be called once', () => {
    let called = 0;
    function testCallOnce() {
      return ++called;
    }
    const done = callOnce(testCallOnce);
    assert.equal(0, called);
    done();
    assert.equal(1, called);
    done();
    assert.equal(1, called);
  })

]);
