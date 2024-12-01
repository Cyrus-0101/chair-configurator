import { Canvas } from '@react-three/fiber'
import './App.css'
import Experience from './components/Experience'

function App() {

  return (
    <>
      <div className='app'>
        <Canvas>
          <color attach="background" args={["#213547"]} />
          <Experience />
        </Canvas>
      </div>
    </>
  )
}

export default App
