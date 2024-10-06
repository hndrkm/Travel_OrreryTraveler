import React, { useLayoutEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { DoubleSide } from "three";
import { Plane, useAspect, useTexture } from "@react-three/drei"
import { useFrame } from '@react-three/fiber'
import gesaUrl from '/Asset_3.png'
import './layerMaterial.js'
import LabelText from './LabelText.jsx';


function CubeSat({ radius = 50, speed = 1.5, ...props }) {
    //const colorMap = useLoader(TextureLoader, '/Asset_10.png')
    const scaleW = useAspect(100, 100, 0.1)
    const textures = useTexture([gesaUrl])
    const group = useRef()


    const layer = { texture: textures[0], z: 1, factor: 0.005, scale: scaleW }
    useFrame((state) => {
        const t = state.clock.getElapsedTime() * speed
        group.current.position.set(Math.sin(t) * radius, (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25, 0)
      })
    return (
        <group ref={group}>
            <Plane scale={layer.scale} args={[1, 1, 10 , 10 ]} position={[-450, -100, 0]} >
                <meshBasicMaterial transparent map={layer.texture}  />
            </Plane>
            <LabelText position={[-400,-150,0]} children={"Modelo Mecanico"}/>
        </group>

    )
}

export default CubeSat