'use strict';

/**
 * Wraps a function that can only be called one time.
 * @param  {Function} fn function to wrap
 * @return {Function}    returns a function ignores calls after the first time
 */
function callOnce(fn) {
  let called = false;

  function caller() {
    const args = [].slice.call(arguments);
    if (!called) {
      called = true;
      fn.apply(null, args);
    }
  }

  return caller;
}

module.exports = callOnce;
