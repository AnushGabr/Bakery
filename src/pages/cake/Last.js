/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Alex_Ker (https://sketchfab.com/Alex_Ker)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/cake-slice-ffd73e3de9754cc695dafd8a382cd01d
title: Cake Slice
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/last.gltf')
  return (
    <group ref={group} {...props} dispose={null} scale = {20}>
      <group rotation={[Math.PI / 2, 0, -Math.PI]}>
        <group rotation={[-Math.PI, 0, 0]} scale={0.01}>
          <group rotation={[0, 0, -Math.PI]} scale={[9.09, 9.09, 4.82]}>
            <mesh geometry={nodes.Slice_Slice_0.geometry} material={materials.Slice} material-color ={props.customCore.coreColor}/>
          </group>
           <group position={[5.95, -3.66, 4.02]} rotation={[0, 0, -Math.PI]} scale={1.4} >
            <mesh geometry={nodes.Cream_Cream_0.geometry} material={materials.Cream} />
          </group>
          <group position={[3.21, -4.54, 4.02]} rotation={[0, 0, -Math.PI]} scale={1.4}>
            <mesh geometry={nodes.Cream_2_Cream_0.geometry} material={materials.Cream}  />
          </group>
          <group position={[-5.95, -3.66, 4.02]} rotation={[0, 0, -Math.PI]} scale={1.4}>
            <mesh geometry={nodes.Cream_4_Cream_0.geometry} material={materials.Cream} />
          </group> 
          <group position={[-3.21, -4.54, 4.02]} rotation={[0, 0, -Math.PI]} scale={1.4}>
            <mesh geometry={nodes.Cream_3_Cream_0.geometry} material={materials.Cream} />
          </group> 
          <group position={[0, -4.89, 4.02]} rotation={[0, 0, -Math.PI]} scale={2}>
            <mesh geometry={nodes.Cream_5_Cream_0.geometry} material={materials.Cream} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/last.gltf')