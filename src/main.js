import data from './data/rickandmorty/rickandmorty.js';
import { originOptions as uniqueOrigins } from './nav.js'
import { filterCardsByName } from './data.js'

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#search-input").addEventListener("keyup", renderCardsFiltered)
})

function renderCardsFiltered(event) {
  const inputValue = event.target.value.toLowerCase()
  renderCards(filterCardsByName(inputValue, data.results))
}

export function getStatusIcon(character) {
  let statusIcon = "●"

  if (character.status === "Alive") {
    statusIcon = `<span style='color: green'>${statusIcon}</span>` // Atributo style  adiciona css a qualquer elemento 
  } else if (character.status === "Dead") {
    statusIcon = `<span style='color: red'>${statusIcon}</span>`
  } else {
    statusIcon = `<span style='color: gray'>${statusIcon}</span>`
  }

  return statusIcon
}

export function renderCards(arrayWithCharacterData) {
  document.querySelector("#cards").innerHTML = ""
  document.querySelector("#cards").innerHTML += arrayWithCharacterData
    .map(character => {
      return `
            <div class="card">
            <img src="${character.image}"
            class="character-image" />
            <div class="character-name">${character.name}</div>
            <div class="character-description">
            <div>${getStatusIcon(character)} ${(character)} - ${(character)} - ${(character)}</div>
            <div>Origem: ${(character)}</div>
            <div>Vive em: ${(character)}</div>
            <div class="show-episodes" data-character-id="${character.id}"> Episódios em que aparece</div>
            </div>
        </div>
        </div>
        `
    }).join('')
}

export function calculatePercentage(value, total) {
  return Math.round((value / total) * 100)
}

document.addEventListener("DOMContentLoaded", () => {
  renderCards(data.results)

  const charactersAlive = data.results.filter(character => character.status === "Alive").length
  const totalCharacters = data.results[data.results.length - 1].id
  const charactersWithOriginUnknown = data.results.filter(character => character.origin.name === "unknown").length

  document.querySelector("#extras").innerHTML = `
  <div>
    Número total de personagens: ${data.results[data.results.length - 1].id} (${calculatePercentage(charactersAlive, totalCharacters)}% dos personagens estão vivos)
  </div>
  <div>
  Número de lugares de origem: ${uniqueOrigins.length} (${calculatePercentage(charactersWithOriginUnknown, totalCharacters)}% dos personagens tem origem desconhecida)
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




