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
          <div className="chair-container">
            <Canvas className='canvas'>
              <color attach="background" args={["#213547"]} />
              <Experience />
            </Canvas>
          </div>
          <Configurator />
        </div>
      </CustomizationProvider>
    </>
  )
}

export default App
