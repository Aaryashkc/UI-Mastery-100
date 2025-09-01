import React, { useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const GsapFromTo = () => {

  // Use a state to force re-render
  const [animationVars, setAnimationVars] = useState({
    x: 0,
    rotate: 0,
    borderRadius: '0%'

  });
  const [animationVarsOne, setAnimationVarsOne] = useState({
    x: 400,
    repeat: -1,
    borderRadius: '100%',
    yoyo: true,
    rotate: 360,
    duration: 3,
    ease: 'bounce.out'

  });

  useGSAP(() => {
    // Kill any existing animations on this element to prevent conflicts
    gsap.killTweensOf('#red-box');
    
    // Create the animation with current values
    gsap.fromTo('#red-box', animationVars, animationVarsOne);
  }, [animationVars]); // Re-run when animationVars changes

  return (
    <div>
      <p>Learn how to create stunning animations with GSAP.</p>
      <p>Gsap.fromTO()</p>

      <div id="red-box" className="w-32 h-32 bg-red-700 mt-10 rounded-lg flex items-center justify-center">
        hello world
      </div>
    </div>
  )
}

export default GsapFromTo