import { Route, Routes } from 'react-router-dom'
import Gsap from './pages/Gsap'

const App = () => {
  return (
    <div>
      <h1>GSAP Animation</h1>
      <Routes>
        <Route path="/" element={<Gsap />} />
      </Routes>
    </div>
  )
}

export default App