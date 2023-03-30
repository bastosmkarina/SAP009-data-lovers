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