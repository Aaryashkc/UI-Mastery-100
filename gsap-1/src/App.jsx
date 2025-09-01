import { Route, Routes } from 'react-router-dom'
import Gsap from './pages/Gsap'
import GsapFrom from './pages/GsapFrom'
import GsapFromTo from './pages/GsapFromTo'
import GsapTimeline from './pages/GsapTimeline'


const App = () => {
  return (
    <div>
      <h1>GSAP Animation</h1>
      <Routes>
        <Route path="/" element={<Gsap />} />
        <Route path="/gsap-from" element={<GsapFrom />} />
        <Route path="/gsap-from-to" element={<GsapFromTo />} />
        <Route path="/gsap-timeline" element={<GsapTimeline />} />
      </Routes>
    </div>
  )
}

export default App