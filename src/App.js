import React from "react"
import { startedState } from "./atoms/started.atom"
import { currentState } from "./atoms/current.atom"
import { Questions } from "./components/questions"
import { Ending } from "./components/ending"
import { Start } from "./components/start"
import { useRecoilValue } from "recoil"
import { QuizData } from "./data"

export default function App() {
  const started = useRecoilValue(startedState)
  const current = useRecoilValue(currentState)
  const { title, createdAt, questions } = QuizData
  const total = questions.length

  return (
    <div className="app">
      {!started ? (
        <Start title={title} createdAt={createdAt} total={total} />
      ) : current < questions.length ? (
        <Questions {...QuizData} />
      ) : (
        <Ending total={total} />
      )}
    </div>
  )
}
