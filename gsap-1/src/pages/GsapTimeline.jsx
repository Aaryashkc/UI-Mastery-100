import React, { useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const GsapTimeline = () => {

  const timeline = gsap.timeline({
    repeat: -1, repeatDelay: 1, yoyo: true,
  })

  useGSAP(()=>{
    timeline.to('#yellow-box', {
      x: 250,
      rotation: 360,
      borderRadius: '100%',
      duration: 3,
      ease: 'back.inOut'
    })

    timeline.to('#yellow-box', {
      y:100,
      rotation: 360,
      borderRadius: '100%',
      duration: 3,
      ease: 'back.inOut',
      scale: 2,
    })

    timeline.to('#yellow-box', {
      x:500,
      rotation: 360,
      borderRadius: '8px',
      scale: 1,
      duration: 3,
      ease: 'back.inOut'
    })

  }, [])

  return (
    <div>
      <p>Learn how to create stunning animations with GSAP.</p>
      <p>Gsap.timeline()</p>

      {/* timeline.pause and play to control the animation. */}
      <div className='border-1 w-33 flex items-center justify-center bg-amber-300 text-black font-bold'>
        <button onClick={()=>{
          if(timeline.paused()) {
            timeline.play()
          } else {
            timeline.pause()
          }
        }}>Play/ Pause</button>  
      </div>

      <div id="yellow-box" className="w-32 h-32 bg-yellow-500 mt-10 rounded-lg flex items-center justify-center">
        Muheheheh
      </div>
    </div>
  )
}

export default GsapTimeline