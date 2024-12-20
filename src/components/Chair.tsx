/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/chair.gltf --types 
*/

import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useCustomization } from "../hooks/useCustomization";

type GLTFResult = GLTF & {
  nodes: {
    Chair: THREE.Mesh;
    Cushion: THREE.Mesh;
    Legs1: THREE.Mesh;
    Legs2: THREE.Mesh;
  };
  materials: {
    Chair: THREE.MeshStandardMaterial;
    Cushion: THREE.MeshStandardMaterial;
    Legs: THREE.MeshStandardMaterial;
  };
  // animations: GLTFAction[]
};

const Chair = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(" ./models/chair.gltf") as GLTFResult;

  const { material, legs, chairColor, cushionColor } = useCustomization();

  const leatherTextureProps = useTexture({
    map: "./textures/leather/Leather_008_Base Color.jpg",
    // displacementMap: './textures/leather/Leather_008_Height.png',
    normalMap: "./textures/leather/Leather_008_Normal.jpg",
    roughnessMap: "./textures/leather/Leather_008_Roughness.jpg",
    aoMap: "./textures/leather/Leather_008_Ambient Occlusion.jpg",
  });

  leatherTextureProps.map.repeat.set(2, 2);
  leatherTextureProps.normalMap.repeat.set(2, 2);
  leatherTextureProps.roughnessMap.repeat.set(2, 2);
  leatherTextureProps.aoMap.repeat.set(2, 2);

  leatherTextureProps.map.wrapS =
    leatherTextureProps.map.wrapT =
    leatherTextureProps.normalMap.wrapS =
    leatherTextureProps.normalMap.wrapT =
    leatherTextureProps.roughnessMap.wrapS =
    leatherTextureProps.roughnessMap.wrapT =
    leatherTextureProps.aoMap.wrapS =
    leatherTextureProps.aoMap.wrapT =
      THREE.RepeatWrapping;

  const fabricTextureProps = useTexture({
    map: "./textures/fabric/Fabric_Knitted_006_basecolor.jpg",
    normalMap: "./textures/fabric/Fabric_Knitted_006_normal.jpg",
    roughnessMap: "./textures/fabric/Fabric_Knitted_006_roughness.jpg",
    aoMap: "./textures/fabric/Fabric_Knitted_006_ambientOcclusion.jpg",
  });

  fabricTextureProps.map.repeat.set(2, 2);
  fabricTextureProps.normalMap.repeat.set(2, 2);
  fabricTextureProps.roughnessMap.repeat.set(2, 2);
  fabricTextureProps.aoMap.repeat.set(2, 2);

  fabricTextureProps.map.wrapS =
    fabricTextureProps.map.wrapT =
    fabricTextureProps.normalMap.wrapS =
    fabricTextureProps.normalMap.wrapT =
    fabricTextureProps.roughnessMap.wrapS =
    fabricTextureProps.roughnessMap.wrapT =
    fabricTextureProps.aoMap.wrapS =
    fabricTextureProps.aoMap.wrapT =
      THREE.RepeatWrapping;

  const paddedTextureProps = useTexture({
    map: "./textures/leather/padded/Leather_Padded_001_basecolor.jpg",
    // displacementMap: './textures/leather/Leather_008_Height.png',
    normalMap: "./textures/leather/padded/Leather_Padded_001_normal.jpg",
    roughnessMap: "./textures/leather/padded/Leather_Padded_001_roughness.jpg",
    aoMap: "./textures/leather/padded/Leather_Padded_001_ambientOcclusion.jpg",
  });

  paddedTextureProps.map.repeat.set(2, 2);
  paddedTextureProps.normalMap.repeat.set(2, 2);
  paddedTextureProps.roughnessMap.repeat.set(2, 2);
  paddedTextureProps.aoMap.repeat.set(2, 2);

  paddedTextureProps.map.wrapS =
    paddedTextureProps.map.wrapT =
    paddedTextureProps.normalMap.wrapS =
    paddedTextureProps.normalMap.wrapT =
    paddedTextureProps.roughnessMap.wrapS =
    paddedTextureProps.roughnessMap.wrapT =
    paddedTextureProps.aoMap.wrapS =
    paddedTextureProps.aoMap.wrapT =
      THREE.RepeatWrapping;

  const medievalTextureProps = useTexture({
    map: "./textures/leather/medieval/Leather_Armor_003_basecolor.png",
    // displacementMap: './textures/leather/Leather_008_Height.png',
    normalMap: "./textures/leather/medieval/Leather_Armor_003_normal.png",
    roughnessMap: "./textures/leather/medieval/Leather_Armor_003_roughness.png",
    aoMap: "./textures/leather/medieval/Leather_Armor_003_ambientOcclusion.png",
  });

  medievalTextureProps.map.repeat.set(2, 2);
  medievalTextureProps.normalMap.repeat.set(2, 2);
  medievalTextureProps.roughnessMap.repeat.set(2, 2);
  medievalTextureProps.aoMap.repeat.set(2, 2);

  medievalTextureProps.map.wrapS =
    medievalTextureProps.map.wrapT =
    medievalTextureProps.normalMap.wrapS =
    medievalTextureProps.normalMap.wrapT =
    medievalTextureProps.roughnessMap.wrapS =
    medievalTextureProps.roughnessMap.wrapT =
    medievalTextureProps.aoMap.wrapS =
    medievalTextureProps.aoMap.wrapT =
      THREE.RepeatWrapping;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Chair.geometry} castShadow>
        <meshStandardMaterial
          {...(material === "fabric"
            ? fabricTextureProps
            : material === "padded"
            ? paddedTextureProps
            : material === "medieval"
            ? medievalTextureProps
            : leatherTextureProps)}
          color={chairColor.color}
        />
      </mesh>
      <mesh geometry={nodes.Cushion.geometry} position={[0, 0.064, 0.045]}>
        <meshStandardMaterial
          {...fabricTextureProps}
          color={cushionColor.color}
        />
      </mesh>
      <mesh
        geometry={nodes.Legs1.geometry}
        material={materials.Legs}
        visible={legs === 1}
      />
      <mesh
        geometry={nodes.Legs2.geometry}
        material={materials.Legs}
        visible={legs === 2}
      />
    </group>
  );
};

useGLTF.preload("./models/chair.gltf");

export default Chair;
