import data from './data/rickandmorty/rickandmorty.js';
import { renderCards } from './main.js'
import { filterCardsByName } from './data.js'

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#search-input").addEventListener("keyup", renderCardsFiltered)
})

function renderCardsFiltered(event) {
  const inputValue = event.target.value.toLowerCase()
  renderCards(filterCardsByName(inputValue, data.results))
}