import { Canvas } from '@react-three/fiber'
import './App.css'
import Experience from './components/Experience'
import Configurator from './components/Configurator'
import { CustomizationProvider } from './providers/CustomizationProvider'

function App() {

  return (
    <>
      <CustomizationProvider>
        <div className='app'>
          <Canvas>
            <color attach="background" args={["#213547"]} />
            <Experience />
          </Canvas>
          <Configurator />
        </div>
      </CustomizationProvider>
    </>
  )
}

export default App
