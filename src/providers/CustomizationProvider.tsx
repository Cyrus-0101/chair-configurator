import { ReactNode, useState } from 'react'
import { CustomizationContext } from '../contexts/CustomizationContext'
import { chairColors, cushionColors } from '../types/colors'

type Props = {
  children: ReactNode
}

export const CustomizationProvider = ({ children }: Props) => {
  const [material, setMaterial] = useState('leather');
  const [legs, setLegs] = useState(1);
  const [chairColor, setChairColor] = useState(chairColors[0]);
  const [cushionColor, setCushionColor] = useState(cushionColors[0]);
  
  
  return (
    <CustomizationContext.Provider value={{
      material,
      setMaterial,
      legs,
      setLegs,
      chairColor,
      setChairColor,
      cushionColor,
      setCushionColor
    }}>
      {children}
    </CustomizationContext.Provider>
  )
}

