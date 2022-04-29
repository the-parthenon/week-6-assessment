const { shuffleArray } = require('./utils');

let testData = [1, 2, 3, 4];
// console.log(shuffleArray(testData));

describe('shuffleArray should', () => {
  test('return an array of equal length', () => {
    let shuffledArr = shuffleArray(testData);
    expect(testData.length).toEqual(shuffledArr.length);
  });
  test('return an array', () => {
    let shuffledArr = shuffleArray(testData);
    expect(shuffledArr).toEqual(expect.arrayContaining(testData));
  });
});
