import { ReactNode, useState } from 'react'
import { Color, CustomizationContext, Legs, Material } from '../contexts/CustomizationContext'
import { chairColors, cushionColors } from '../types/colors'

type Props = {
  children: ReactNode
}

export const CustomizationProvider = ({ children }: Props) => {
  const [material, setMaterial] = useState<Material>('leather');
  const [legs, setLegs] = useState<Legs>(1);
  const [chairColor, setChairColor] = useState<Color>(chairColors[0]);
  const [cushionColor, setCushionColor] = useState<Color>(cushionColors[0]);
  
  
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

