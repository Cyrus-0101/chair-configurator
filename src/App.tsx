import { Canvas } from '@react-three/fiber'
import './App.css'
import Experience from './components/Experience'
import Configurator from './components/Configurator'
import { CustomizationProvider } from './providers/CustomizationProvider'

function App() {

  return (
    <div className='app'>
      <CustomizationProvider>
        <div className='chair-container'>
          <Canvas>
            <color attach="background" args={["#213547"]} />
            <Experience />
          </Canvas>
          <Configurator />
        </div>

      </CustomizationProvider>
    </div>
  )
}

export default App
