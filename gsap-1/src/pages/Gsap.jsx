import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Gsap = () => {

  // Use a state to force re-render
  const [animationVars, setAnimationVars] = React.useState({
    x: 400,
    repeat: -1,
    yoyo: true,
    rotate: 360,
    duration: 3,
    ease: 'elastic' 

  });

  useGSAP(() => {
    // Kill any existing animations on this element to prevent conflicts
    gsap.killTweensOf('#blue-box');
    
    // Create the animation with current values
    gsap.to('#blue-box', animationVars);
  }, [animationVars]); // Re-run when animationVars changes

  return (
    <div>
      <p>Learn how to create stunning animations with GSAP.</p>
      <p>Gsap.to()</p>

      <div id="blue-box" className="w-32 h-32 bg-blue-500 mt-10 rounded-lg">
      </div>
    </div>
  )
}

export default Gsap