import React, {useRef, useState, useEffect} from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

export default function Player ({audioFiles}) {
  const [file, setFile] = useState(null)
  const player = useRef(null)

  useEffect(() => {
  }, [])
  return <div>
    <AudioPlayer
      onPlay={(e) => {
        trackCustomEvent({
          category: 'player',
          action: 'play',
          value: file
        })
      }}
      ref={player}
      src={`https://cdn.mousymagazine.org/${file}.mp3`}
      footer={
        <ul className="alt">
          {audioFiles.map((f) => <li key={`af-${f}`}>
            <button className="button special" onClick={() => setFile(f)}>File {file}</button>
          </li>)}
        </ul>
      }
    />
  </div>
}
