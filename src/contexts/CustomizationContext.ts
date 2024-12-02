import { createContext } from 'react'
import { ChairColor, chairColors, CushionColor, cushionColors } from '../types/colors';

type CustomizationContextType = {
  material: string;
  setMaterial: (material: string) => void;
  legs: number;
  setLegs: (legs: number) => void;
  chairColor: ChairColor;
  setChairColor: (color: ChairColor) => void;
  cushionColor: CushionColor;
  setCushionColor: (color: CushionColor) => void;
  
};

export const CustomizationContext = createContext<CustomizationContextType>({
  material: 'leather',
  setMaterial: () => {},
  legs: 1,
  setLegs: () => {},
  chairColor: chairColors[1],
  setChairColor: () => {},
  cushionColor: cushionColors[1],
  setCushionColor: () => {}
});

