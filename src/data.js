export function filterCardsByName(inputValue, data) {
   
  const dataFiltered = data.filter(character => {
    const characterName = character.name.toLowerCase()
    return characterName.includes(inputValue)
  })
  return dataFiltered
}