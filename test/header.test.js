import { filterCardsByName } from '../src/data.js'

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