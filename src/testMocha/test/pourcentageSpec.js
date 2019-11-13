
const assert = require('assert');
const Percentage = require('../lib/Percentage');

describe('percentage', () => {
  describe('#evolution', () => {
    before(() => {
      // Code to run before all my tests
    });

    after(() => {
      // Code to run after all my tests
    });

    beforeEach(() => {
      // Code to run before each test
    });

    afterEach(() => {
      // Code to run after each test
    });

    it('should give an evolution', () => {
      assert.equal(Percentage.evolution(100, 200), 100);
      assert.equal(Percentage.evolution(100, 150), 50);
      assert.equal(Percentage.evolution(100, 50), -50);
    });

    it('should handle 0 evolution', () => {
      assert.equal(Percentage.evolution(0, 100), Infinity);
    });

    it('should round values', () => {
      assert.equal(Percentage.evolution(30, 100), 233.33);
    });

    // Example pending test
    // egal au it.skip()
    it('should draw unicorns');
  });

  describe('#wait', () => {
    it('shoul exist', () => {
      assert.notEqual(Percentage.wait, undefined);
    });

    it('should wait', (done) => {
      Percentage.wait(50, (test) => {
        assert.equal(test, 18);
        done();
      });
    });
  });
});
