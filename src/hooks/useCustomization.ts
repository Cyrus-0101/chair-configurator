import { useContext } from "react";
import {
  CustomizationContext,
  CustomizationContextType,
} from "../contexts/CustomizationContext";

export const useCustomization = (): CustomizationContextType => {
  const context = useContext(CustomizationContext);

  if (context === undefined) {
    throw new Error(
      "useCustomization must be used within a CustomizationProvider"
    );
  }

  return context;
};
