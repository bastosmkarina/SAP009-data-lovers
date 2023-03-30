import { filterCardsByName, orderByAZ, orderByZA, calculatePercentage } from '../src/data.js'

describe("filterCardsByName", () => {
  const data = [{ name: "Rick Sanchez" }, { name: "Morty Smith" }, { name: "Summer Smith" }, { name: "Beth Smith" },]

  test("should filter data correctly", () => {
    const inputValue = "rick" 
    const expectedDataFiltered = [{ name: "Rick Sanchez" }]

    const dataFiltered = filterCardsByName(inputValue, data)

    expect(dataFiltered).toEqual(expectedDataFiltered)
  })

  test("should return all data when input value is empty", () => {
    const inputValue = ""

    const dataFiltered = filterCardsByName(inputValue, data)

    expect(dataFiltered).toEqual(data)
  })

  test("should return empty array when input value does not match any name", () => {
    const inputValue = "ricky"

    const dataFiltered = filterCardsByName(inputValue, data)

    expect(dataFiltered).toEqual([])
  })
})

describe('orderByAZ', () => {
  test('should return -1 when character1 name comes before character2 name in alphabetical order', () => {
    expect(orderByAZ({ name: 'Morty' }, { name: 'Rick' })).toBe(-1)
  })

  test('should return 1 when character1 name comes after character2 name in alphabetical order', () => {
    expect(orderByAZ({ name: 'Summer' }, { name: 'Jerry' })).toBe(1)
  })

  test('should return 0 when character1 name is equal to character2 name', () => {
    expect(orderByAZ({ name: 'Rick' }, { name: 'Rick' })).toBe(0)
  })
})

describe('orderByZA', () => {
  test('should return 1 when character1 name comes before character2 name in reverse alphabetical order', () => {
    expect(orderByZA({ name: 'Morty' }, { name: 'Rick' })).toBe(1)
  })

  test('should return -1 when character1 name comes after character2 name in reverse alphabetical order', () => {
    expect(orderByZA({ name: 'Summer' }, { name: 'Jerry' })).toBe(-1)
  })

  test('should return 0 when character1 name is equal to character2 name', () => {
    expect(orderByZA({ name: 'Rick' }, { name: 'Rick' })).toBe(0)
  })
})

describe("calculatePercentage", () => {
  test('should return the correct percentage', () => {
    expect(calculatePercentage(25, 100)).toEqual(25);
    expect(calculatePercentage(60, 120)).toEqual(50);
    expect(calculatePercentage(2, 7)).toEqual(29);
    expect(calculatePercentage(0, 10)).toEqual(0);
    expect(calculatePercentage(10, 0)).toEqual(Infinity);
  })
})