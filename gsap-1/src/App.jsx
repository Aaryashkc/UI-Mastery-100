import { Route, Routes } from 'react-router-dom'
import Gsap from './pages/Gsap'
import GsapFrom from './pages/GsapFrom'


const App = () => {
  return (
    <div>
      <h1>GSAP Animation</h1>
      <Routes>
        <Route path="/" element={<Gsap />} />
        <Route path="/gsap-from" element={<GsapFrom />} />
      </Routes>
    </div>
  )
}

export default App