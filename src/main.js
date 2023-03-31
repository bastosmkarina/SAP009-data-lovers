import data from './data/rickandmorty/rickandmorty.js';
import { originOptions as uniqueOrigins } from './nav.js'
import { filterCardsByName, calculatePercentage } from './data.js'

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#search-input").addEventListener("keyup", renderCardsFiltered)
})

function renderCardsFiltered(event) {
  const inputValue = event.target.value.toLowerCase()
  renderCards(filterCardsByName(inputValue, data.results))
}

function getStatusIcon(character) {
  let statusIcon = "●"

  if (character.status === "Alive") {
    statusIcon = `<span style='color: green'>${statusIcon}</span>`
  } else if (character.status === "Dead") {
    statusIcon = `<span style='color: red'>${statusIcon}</span>`
  } else {
    statusIcon = `<span style='color: gray'>${statusIcon}</span>`
  }

  return statusIcon
}

export function renderCards(characters) {
  document.querySelector("#cards").innerHTML = ""
  document.querySelector("#cards").innerHTML += characters
    .map(character => {
      return `
            <div class="card">
            <img src="${character.image}"
            class="character-image" />
            <div class="character-name">${character.name}</div>
            <div class="character-description">
            <div>${getStatusIcon(character)} ${character.status} - ${character.species} - ${character.gender}</div>
            <div>Origin: ${character.origin.name}</div>
            <div>Location: ${character.location.name}</div>
            <div class="show-episodes" data-character-id="${character.id}">Character's episodes</div>
            </div>
        </div>
        </div>
        `
    }).join('')
}

document.addEventListener("DOMContentLoaded", () => {
  
  renderCards(data.results)

  const totalCharacters = data.results[data.results.length - 1].id
  const charactersAlive = data.results.filter(character => character.status === "Alive").length
  const charactersWithOriginUnknown = data.results.filter(character => character.origin.name === "unknown").length

  document.querySelector("#extras").innerHTML = `
  <div>
  The total number of characters is: ${data.results[data.results.length - 1].id} (${calculatePercentage(charactersAlive, totalCharacters)}% of those characters are alive)
  </div>
  <div>
  Also the total number of characters who has an origin place is: ${uniqueOrigins.length} (${calculatePercentage(charactersWithOriginUnknown, totalCharacters)}% of those characters have an unknown origin)
  </div>
  
  `
  const modal = document.querySelector("#modal");
  const showEpisodesDivs = document.querySelectorAll(".show-episodes");

  showEpisodesDivs.forEach(el => {
    el.addEventListener('click', (event) => {
      modal.style.display = "block";

      const cardCharacterId = event.target.getAttribute("data-character-id")

      const modalText = data
        .results
        .find(character => character.id === Number(cardCharacterId))
        .episode
        .join('<br>')

      modal.innerHTML =
        `<div class="modal-content">
        <span id="modal-close">&times;</span>
        <p>${modalText}</p>
      </div>`

      const closeButton = document.querySelector("#modal-close");

      closeButton.addEventListener('click', () => {
        modal.style.display = "none";
      })
    })
  })

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
})

