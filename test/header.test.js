import { filterCardsByName } from '../src/data.js'

describe("filterCardsByName", () => {
  const data = [{ name: "Rick Sanchez" }, { name: "Morty Smith" }, { name: "Summer Smith" }, { name: "Beth Smith" },]

  test("should filter data correctly", () => {
    const event = { target: { value: "rick" } }
    const expectedDataFiltered = [{ name: "Rick Sanchez" }]

    const dataFiltered = filterCardsByName(event, data)

    expect(dataFiltered).toEqual(expectedDataFiltered)
  })

  test("should return all data when input value is empty", () => {
    const event = { target: { value: "" } }

    const dataFiltered = filterCardsByName(event, data)

    expect(dataFiltered).toEqual(data)
  })

  test("should return empty array when input value does not match any name", () => {
    const event = { target: { value: "ricky" } }

    const dataFiltered = filterCardsByName(event, data)

    expect(dataFiltered).toEqual([])
  })
})