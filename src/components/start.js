import React, { useEffect } from "react"
import { startedState } from "../atoms/started.atom"
import * as moment from "moment"
import "moment/locale/fr"
import { useSetRecoilState } from "recoil"

export const Start = ({ title, createdAt, total }) => {
  const setStarted = useSetRecoilState(startedState)

  useEffect(() => {
    moment.locale("fr")
  }, [])

  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex" style={{ height: "60vh" }}>
        <img
          alt=""
          className="w-full h-full object-cover"
          src="https://c4.wallpaperflare.com/wallpaper/902/770/576/linux-tux-simple-minimalism-hd-wallpaper-preview.jpg"
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
        <button
          className="h-10 rounded-full px-6 bg-indigo-500 text-white font-medium uppercase text-xs tracking-wider"
          onClick={() => setStarted(true)}
        >
          Démarrer
        </button>
      </div>
    </div>
  )
}
