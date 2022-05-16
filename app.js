//Grab opponent choice, player choice, and result from html using .getElementById()
const opponentChoiceText = document.getElementById('opponent-choice')
const myChoiceText = document.getElementById('my-choice')
const resultText = document.getElementById('result')
//Grab buttons from html using .querySelector()
const choices = document.querySelectorAll('button')

let myChoice
let opponentChoice

choices.forEach((choices) =>
  choices.addEventListener('click', (e) => {
    myChoice = e.target.id
    if(myChoice === 'fire') {myChoiceText.innerHTML = '&#128293'}
    if(myChoice === 'air') {myChoiceText.innerHTML = '&#128168'}
    if(myChoice === 'dirt') {myChoiceText.innerHTML = '&#129704'}
    if(myChoice === 'water') {myChoiceText.innerHTML = '&#127754'}
    
    createOpponentChoice()
    results()
  }),
)

function createOpponentChoice() {
  const num = Math.floor(Math.random() * 4)

  if (num === 0) {
    opponentChoice = 'fire' 
    opponentChoiceText.innerHTML = '&#128293'; 
  }
  if (num === 1) {
    opponentChoice = 'air'
    opponentChoiceText.innerHTML = '&#128168'
  }
  if (num === 2) {
    opponentChoice = 'dirt'
    opponentChoiceText.innerHTML = '&#129704'
  }
  if (num === 3) {
    opponentChoice = 'water'
    opponentChoiceText.innerHTML = '&#127754'
  }

  opponentChoiceText.style.transform = 'scaleX(-1)'
  
}

function results() {
  if (opponentChoice === myChoice) {
    resultText.innerHTML = 'STALEMATE'
  }
  if (opponentChoice === 'fire' && myChoice === 'water') {
    resultText.innerHTML = 'VICTORY'
  }
  if (opponentChoice === 'fire' && myChoice === 'dirt') {
    resultText.innerHTML = 'DEFEAT'
  }
  if (opponentChoice === 'fire' && myChoice === 'air') {
    resultText.innerHTML = 'STALEMATE'
  }
  if (opponentChoice === 'air' && myChoice === 'dirt') {
    resultText.innerHTML = 'VICTORY'
  }
  if (opponentChoice === 'air' && myChoice === 'water') {
    resultText.innerHTML = 'DEFEAT'
  }
  if (opponentChoice === 'air' && myChoice === 'fire') {
    resultText.innerHTML = 'STALEMATE'
  }
  if (opponentChoice === 'dirt' && myChoice === 'fire') {
    resultText.innerHTML = 'VICTORY'
  }
  if (opponentChoice === 'dirt' && myChoice === 'air') {
    resultText.innerHTML = 'DEFEAT'
  }
  if (opponentChoice === 'dirt' && myChoice === 'water') {
    resultText.innerHTML = 'STALEMATE'
  }
  if (opponentChoice === 'water' && myChoice === 'air') {
    resultText.innerHTML = 'VICTORY'
  }
  if (opponentChoice === 'water' && myChoice === 'fire') {
    resultText.innerHTML = 'DEFEAT'
  }
  if (opponentChoice === 'water' && myChoice === 'dirt') {
    resultText.innerHTML = 'STALEMATE'
  }

  if (resultText.innerHTML === 'STALEMATE') {
    resultText.style.color = 'grey'
  }
  
  else if (resultText.innerHTML === 'VICTORY') {
    resultText.style.color = 'green'
  }
  
  else if (resultText.innerHTML === 'DEFEAT') {
    resultText.style.color = 'red'
  }
}
