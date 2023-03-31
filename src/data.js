export function filterCardsByName(inputValue, data) {
   
  const dataFiltered = data.filter(character => {
    const characterName = character.name.toLowerCase()
    return characterName.includes(inputValue)
  })
  return dataFiltered
}

export function orderByAZ(character1, character2) {
  if (character1.name > character2.name) return 1;
  if (character1.name < character2.name) return -1;
  return 0;
}

export function orderByZA(character1, character2) {
  if (character1.name < character2.name) return 1;
  if (character1.name > character2.name) return -1;
  return 0;
}

export function calculatePercentage(value, total) {
  return Math.round((value / total) * 100)
}

export function filterStatus (data, value) {
  return data.results.filter(character => character.status === value)
}

export function filterSpecies (data,value) {
  return data.results.filter(character => character.species === value)
}

export function filterGender (data, value) {
  return data.results.filter(character => character.gender === value)
}

export function filterOrigin (data, value) {
  return data.results.filter(character => character.origin.name === value)
}

export function filterLocation (data, value) {
  return data.results.filter (character => character.location.name === value)
}