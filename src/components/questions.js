import React from "react"
import { useRecoilValue } from "recoil"
import { currentState } from "../atoms/current.atom"
import { scoreState } from "../atoms/score.atom"
import { Question } from "./question"

export const Questions = ({ questions }) => {
  const current = useRecoilValue(currentState)
  const score = useRecoilValue(scoreState)

  return (
    <div>
      <Question {...questions[current]} total={questions.length} />
    </div>
  )
}
