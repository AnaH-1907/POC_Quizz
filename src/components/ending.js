import { useRecoilValue } from "recoil"
import { scoreState } from "../atoms/score.atom"

export const Ending = ({ total }) => {
  const score = useRecoilValue(scoreState)

  return (
    <div className="p-8 h-screen flex items-center justify-center">
      <div className="w-full">
        <span className="text-3xl font-bold text-white">{score}</span>
        <span className="text-sm text-white"> / {total}</span>
      </div>
    </div>
  )
}
