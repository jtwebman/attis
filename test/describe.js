'use strict';

const assert = require('chai').assert;

const attis = require('../src/attis');
const describe = attis.describe;
const it = attis.it;

const testDescribe = require('../src/describe');

const noopRun = (done) => done();

module.exports = describe('describe', [

  it('returns a list of test fixtures with message added to message tree', () => {
    const tests = [
      {messageTree: {message: 'test'}, action: 'run', run: noopRun},
      {messageTree: {message: 'test'}, action: 'run', run: noopRun},
      {messageTree: {message: 'test'}, action: 'run', run: noopRun}
    ];

    const fixtures = testDescribe('my tests', tests);

    fixtures.forEach((fixture) => {
      assert.deepEqual({message: 'my tests', next: {message: 'test'}},
      fixture.messageTree);
    });
  }),

  it('returns a fattened list of test fixtures for handling nested describe calls', () => {
    const tests = [
      [
        {messageTree: {message: 'nested', next: {message: 'test'}}, action: 'run', run: noopRun},
        {messageTree: {message: 'nested', next: {message: 'test'}}, action: 'run', run: noopRun}
      ]
    ];

    const fixtures = testDescribe('my tests', tests);

    fixtures.forEach((fixture) => {
      assert.deepEqual({
        message: 'my tests',
        next: {
          message: 'nested',
          next: {message: 'test'}
        }
      }, fixture.messageTree);
    });
  })

]);
