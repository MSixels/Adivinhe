import styles from "./app.module.css"
import { WORDS, type Challenge } from "./utils/words"
import { useEffect, useState } from "react"

import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Input } from "./components/Input"
import { Button } from "./components/Button"
import { LettersUsed, type LettersUsedProps } from "./components/LettersUsed"

export default function App() {
  const [attempts, setAttempts] = useState(0)
  const [letter, setLetter] = useState("")
  const [lettersUsed, setLettersUsed] = useState<LettersUsedProps[]>([])
  const [challenge, setChallenge] = useState<Challenge | null>(null)
  function handleRestartGame() {
    alert("Reiniciar jogo!")
  }

  function startGame(){
    const index = Math.floor(Math.random() * WORDS.length)
    const randomWord = WORDS[index]
    setChallenge(randomWord)

    setAttempts(0)
    setLetter("")
  }

  function handleConfirm() {
    if (!challenge) {
      return
    }

    if (!letter.trim()) {
      return alert("Digite uma letra!")
    }

    const value = letter.toUpperCase()
    const exist = lettersUsed.find((used => used.value.toUpperCase() === value))

    if (exist) {
      return alert("Você já utilizou a letra " + value)
    }

    setLettersUsed((prevState) => [...prevState, {value, correct: false }])
    setLetter("")
  }

  useEffect(() => {
    startGame()
  }, [])

  if (!challenge) {
    return
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={attempts} max={10} onRestart={handleRestartGame}/>
        <Tip tip="Uma das linguagens de programação mais utilizadas"/>
        
        <div className={styles.word}>
          {
            challenge.word.split("").map(() => (
              <Letter value="" />  
            ))
          }
        </div>
        <h4>Palpite</h4>
        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder="?" value={letter} onChange={(e) => setLetter(e.target.value)}/>
          <Button title="Confirmar" onClick={handleConfirm}/>
        </div>

        <LettersUsed data={lettersUsed}/>
      </main>
    </div>
  )
}