import { calculatePercentage } from '../src/data';
// import { getStatusIcon } from '../src/main';

/*
describe('getStatusIcon', () => {
  test('should return green icon when status is alive', () => {
    const character = { status: 'Alive' };
    const result = getStatusIcon(character);
    expect(result).toBe('<span style=\'color: green\'>●</span>');
  });

  test('should return red icon when status is dead', () => {
    const character = { status: 'Dead' };
    const result = getStatusIcon(character);
    expect(result).toBe('<span style=\'color: red\'>●</span>');
  });

  test('should return gray icon when status is unknown', () => {
    const character = { status: 'unknown' };
    const result = getStatusIcon(character);
    expect(result).toBe('<span style=\'color: gray\'>●</span>');
  });
});
*/
describe("calculatePercentage", () => {
  test('should return the correct percentage', () => {
    expect(calculatePercentage(25, 100)).toEqual(25);
    expect(calculatePercentage(60, 120)).toEqual(50);
    expect(calculatePercentage(2, 7)).toEqual(29);
    expect(calculatePercentage(0, 10)).toEqual(0);
    expect(calculatePercentage(10, 0)).toEqual(Infinity);
  })
})