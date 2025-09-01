import React, { useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const GsapFrom = () => {

  // Use a state to force re-render
  const [animationVars, setAnimationVars] = useState({
    x: 400,
    repeat: 1,
    yoyo: true,
    rotate: 360,
    duration: 3,
    ease: 'power1.inOut'

  });

  useGSAP(() => {
    // Kill any existing animations on this element to prevent conflicts
    gsap.killTweensOf('#green-box');
    
    // Create the animation with current values
    gsap.from('#green-box', animationVars);
  }, [animationVars]); // Re-run when animationVars changes

  return (
    <div>
      <p>Learn how to create stunning animations with GSAP.</p>
      <p>Gsap.from()</p>

      <div id="green-box" className="w-32 h-32 bg-green-800 mt-10 rounded-lg">
      </div>
    </div>
  )
}

export default GsapFrom