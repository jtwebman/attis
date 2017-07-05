'use strict';

const assert = require('chai').assert;

const attis = require('../src/attis');
const describe = attis.describe;
const it = attis.it;

module.exports = describe('attis', [

  it('returns an object with describe function', () => {
    assert.property(attis, 'describe');
  }),

  it('returns an object with it function', () => {
    assert.property(attis, 'it');
  }),

  it('returns an object with test function', () => {
    assert.property(attis, 'test');
  }),

  it('returns an object with skip function', () => {
    assert.property(attis, 'skip');
  }),

  it('test a test with a promise', () => {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 100);
    });
  }),

  it('test a test with a callback', (done) => {
    setTimeout(() => {
      done();
    }, 50);
  }),

  describe('test nesting', [
    it.skip('test a test that should timeout', (done) => {
      setTimeout(() => {
        done();
      }, 10000);
    }),

    it('handles a promise reject', (done) => {
      return new Promise(function(resolve, reject) {
          setTimeout(reject, 100);
      });
    }),

    describe('test nesting again', [
      it('handles done not wrapped callback', done => { // eslint-disable-line arrow-parens
        setTimeout(() => {
          done();
        }, 50);
      })
    ])
  ])
]);
