import React from 'react';
import { useCustomization } from "../hooks/useCustomization"
import { chairColors, cushionColors } from "../types/colors";
import ConfigItem from './ConfigItem';
import ConfigSection from './ConfigSection';

const Configurator: React.FC = () => {
  const { material, setMaterial, legs, setLegs, chairColor, setChairColor, cushionColor, setCushionColor } = useCustomization();

  return (
    <div className="configurator">
      <ConfigSection title="Chair Material">
        <ConfigItem isActive={material === "leather"} onClick={() => setMaterial('leather')} label="Leather" />
        <ConfigItem isActive={material === "fabric"} onClick={() => setMaterial('fabric')} label="Fabric" />
        <ConfigItem isActive={material === "padded"} onClick={() => setMaterial('padded')} label="Padded" />
        <ConfigItem isActive={material === "medieval"} onClick={() => setMaterial('medieval')} label="Medieval" />
      </ConfigSection>

      <ConfigSection title="Legs">
        <ConfigItem isActive={legs === 1} onClick={() => setLegs(1)} label="Design" />
        <ConfigItem isActive={legs === 2} onClick={() => setLegs(2)} label="Classic" />
      </ConfigSection>

      <ConfigSection title="Chair Color">
        {chairColors.map((item, index) => (
          <ConfigItem
            key={index}
            isActive={item.color === chairColor.color}
            onClick={() => setChairColor(item)}
            label={item.name}
            color={item.color}
          />
        ))}
      </ConfigSection>

      <ConfigSection title="Cushion Color">
        {cushionColors.map((item, index) => (
          <ConfigItem
            key={index}
            isActive={item.color === cushionColor.color}
            onClick={() => setCushionColor(item)}
            label={item.name}
            color={item.color}
          />
        ))}
      </ConfigSection>
    </div>
  )
}



export default Configurator