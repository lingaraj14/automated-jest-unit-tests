const { describe, it } = require('node:test');
const assert = require('node:assert');
const { add, substract, multiply, divide } = require('./math');

describe('math.js test', () => {
  it('should test add ', () => {
    const actuial = add(2, 3);
    const expect = 5;
    assert.strictEqual(actuial, expect);
  });

  it('should test substract ', () => {
    const actuial = substract(6, 4);
    const expect = 2;
    assert.strictEqual(actuial, expect);
  });

  it('should test multiply ', () => {
    const actuial = multiply(6, 4);
    const expect = 24;
    assert.strictEqual(actuial, expect);
  });

  it('should test divide ', () => {
    const actuial = divide(6, 3);
    const expect = 2;
    assert.strictEqual(actuial, expect);
  });
});
