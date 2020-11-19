import { useRecoilValue } from "recoil"
import { scoreState } from "../atoms/score.atom"

export const Ending = ({ total }) => {
  const score = useRecoilValue(scoreState)

  return (
    <div className="p-8 h-screen flex items-center justify-center">
      <div className="w-full h-56 rounded bg-green-500 flex items-center justify-center flex-col">
        <span className="text-base uppercase text-white opacity-50 tracking-wide">Ton score :</span>
        <div>
          <span className="text-5xl font-bold text-white">{score}</span>
          <span className="text-base text-white"> / {total}</span>
        </div>
      </div>
    </div>
  )
}
