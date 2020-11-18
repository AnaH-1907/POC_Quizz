import React, { useEffect } from "react"
import { startedState } from "../atoms/started.atom"
import * as moment from "moment"
import { useRecoilState } from "recoil"

export const Start = ({ title, createdAt, total }) => {
  const [started, setStarted] = useRecoilState(startedState)

  useEffect(() => {
    moment.locale("fr")
  }, [])

  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex h-64">
        <img
          alt=""
          className="w-full h-full object-cover"
          src="https://ubuntu-mate.community/uploads/default/7df0dea9e072a5bb43c99142b3dc34f1ab1ad4cd"
        />
      </div>
      <div className="content p-8 text-white flex-grow">
        <div className="text-2xl font-bold mb-2">{title}</div>
        <div className="text-sm opacity-50">
          <span className="mr-4">{moment(createdAt).fromNow()}</span>
          <span>{total} questions</span>
        </div>
      </div>
      <div className="mb-8 mx-auto">
        <button className="h-10 rounded-full px-4 bg-indigo-500 text-white font-medium uppercase text-xs tracking-wider" onClick={() => setStarted(true)}>
          Démarrer
        </button>
      </div>
    </div>
  )
}
