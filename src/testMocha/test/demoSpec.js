
const assert = require('assert');

describe('hello world of test', () => {
  it('should do something', () => {
    const a = 3;
    assert.equal(a * 2, 6, 'La multiplication est incorrecte');
  });
});
