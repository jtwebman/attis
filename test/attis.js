'use strict';

const {assert} = require('chai');

const {describe, it, skip} = require('../src/attis');

const testie = require('../src/attis');

module.exports = describe('testie', [

  it('returns an object with describe', () => {
    assert.property(testie, 'describe');
  }),

  skip('returns an object with assert', () => {
    assert.property(testie, 'assert');
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
