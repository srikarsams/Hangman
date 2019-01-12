import Hangman from "./hangman"
import getPuzzleFunction from "./requests"

let me
const puzzleEl = document.querySelector("#puzzle")
const guessesLeftEl = document.querySelector("#guessesLeft")


const render = () => {
    puzzleEl.innerHTML = ""
    const getPuzzle = me.puzzle
    getPuzzle.split("").forEach((letter) => puzzleEl.innerHTML += `<span>${letter}</span`)
    guessesLeftEl.textContent = me.statusMessage
}

const startGame = async () => {
    let puzzle = await getPuzzleFunction(2)
    me = new Hangman(puzzle, 5)
    render()
}
startGame()


window.addEventListener("keypress", (e)=> {
    const guess = e.key
    me.makeGuess(guess)
    render()
})

document.querySelector("button").addEventListener("click", startGame)
