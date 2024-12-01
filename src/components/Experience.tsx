import { PresentationControls } from "@react-three/drei"

const Experience = () => {
  return (
        <PresentationControls speed={1.5} global zoom={0.7} polar={[-0.1, Math.PI / 4]}>
            <mesh>

                <boxGeometry />
                <meshNormalMaterial /> 

            </mesh>       
        </PresentationControls>

  )
}

export default Experience