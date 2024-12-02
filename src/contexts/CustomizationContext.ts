import { createContext } from "react";
// import { chairColors, cushionColors } from "../types/colors";

export type Material = "leather" | "fabric" | "padded" | "medieval";

export type Legs = 1 | 2;

export interface Color {
  name: string;
  color: string;
}

export interface CustomizationContextType {
  material: Material;
  setMaterial: (material: Material) => void;
  legs: number;
  setLegs: (legs: Legs) => void;
  chairColor: Color;
  setChairColor: (color: Color) => void;
  cushionColor: Color;
  setCushionColor: (color: Color) => void;
}

export const CustomizationContext = createContext<
  CustomizationContextType | undefined
>(undefined);
