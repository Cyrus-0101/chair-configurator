import { useContext } from 'react'
import { CustomizationContext } from '../contexts/CustomizationContext'

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  
  if (context === undefined) {
    throw new Error('useCustomization must be used within a CustomizationProvider')
  }
  
  return context;
}
