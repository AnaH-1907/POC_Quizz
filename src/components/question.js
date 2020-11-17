import React, { useState, useEffect } from "react"
import { currentState } from "../atoms/current.atom"
import { QuizData } from "../data"
import { scoreState } from "../atoms/score.atom"
import { useRecoilState } from "recoil"

export const Question = ({ questionText, answerOptions, anecdote, total }) => {
  const timer = 20

  const [time, setTime] = useState(timer)
  const [stop, setStop] = useState(false)
  const [width, setWidth] = useState(100)
  const [selected, setSelected] = useState(-1)

  const [score, setScore] = useRecoilState(scoreState)
  const [current, setCurrent] = useRecoilState(currentState)
  console.log(score)
  const onSelect = index => {
    setSelected(index)
    setStop(true)
    if (answerOptions[index].isCorrect) {
      setScore(score++)
    }
  }

  useEffect(() => {
    setWidth(0)
  }, [])

  useEffect(() => {
    if (time > 0)
      setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    else setStop(true)
  }, [time])

  return (
    <div className="p-8 h-screen flex flex-col justify-between">
      <div className="relative h-8 top bg-gray-800 rounded flex items-center overflow-hidden">
        <div className="z-10 absolute w-full flex items-center justify-between px-2 text-white text-sm">
          <span className="flex-grow">
            Question {current} / {total}
          </span>
          <span>Temps restants : {time}</span>
          <img alt="" className="ml-2 w-4" src="https://www.materialui.co/materialIcons/image/timer_white_192x192.png" />
        </div>

        <div className="absolute inset-0 h-full bg-blue-500" style={{ width: width + "%", transition: timer + "s linear" }} />
      </div>

      <div className="flex-grow text-white mt-8 text-2xl leading-normal">{questionText}</div>

      {stop && (
        <div className="text-white mb-8">
          <span
            className="inline-block uppercase bg-blue-500
                px-2 py-1 mb-4 text-xs tracking-wider rounded-sm w-auto"
          >
            Anecdote
          </span>
          <div className="opacity-50 text-sm">{anecdote}</div>
        </div>
      )}
      {answerOptions.map((option, i) => (
        <div
          key={i}
          className={
            "px-4 h-10 flex items-center justify-between text-white rounded mb-2 " +
            (stop
              ? selected === i
                ? option.isCorrect
                  ? "bg-green-500 "
                  : "bg-red-500 "
                : "border border-solid border-gray-700 "
              : "border border-solid border-blue-500 ")
          }
          onClick={() => !stop && onSelect(i)}
        >
          <span className="flex-grow">{option.answerText}</span>
          {stop && option.isCorrect && (
            <img alt="" className="w-5 h-5" src="https://www.materialui.co/materialIcons/action/check_circle_white_24x24.png" />
          )}
        </div>
      ))}

      <div className="mx-auto mt-8">
        {stop && (
          <button className="btn btn-primary" onClick={() => setCurrent(current + 1)}>
            Suivant
          </button>
        )}
      </div>
    </div>
  )
}
