import { orderByAZ, orderByZA } from '../src/data.js'

// orderByAZ
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

// orderByZA
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