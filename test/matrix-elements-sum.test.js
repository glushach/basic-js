const { assert } = require('chai');
const { testOptional } = require('../extensions/index.js');
const { getMatrixElementsSum } = require('../src/matrix-elements-sum.js');

it.optional = testOptional;

Object.freeze(assert);

describe('Matrix elements sum', () => {
  it.optional('should return the sum of the matrix elements that are not below 0', () => {
    assert.strictEqual(getMatrixElementsSum([
      [0, 1, 1, 2],  // 1, 1, 2
      [0, 5, 0, 0],  // 5 если число находится под нулем его не использовать
      [2, 0, 3, 3],
    ]), 9); // 1,

    assert.strictEqual(getMatrixElementsSum([
      [1, 2, 3, 4], // 10
      [0, 5, 0, 0], // 5 // если число находится под нулем его не использовать
      [2, 0, 3, 3],
    ]), 15);

    assert.strictEqual(getMatrixElementsSum([
      [1, 1, 1], // 3
      [2, 2, 2], // 6
      [3, 3, 3], // 9
    ]), 18);

    assert.strictEqual(getMatrixElementsSum([
      [0],
    ]), 0);

    assert.strictEqual(getMatrixElementsSum([
      [1], // 1
      [5], // 5
      [0],
      [2],
    ]), 6);
  });
});
