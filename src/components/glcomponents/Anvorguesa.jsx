import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Plane, useAspect, useTexture } from "@react-three/drei"
import gesaUrl from '/Asset_10.png'
import './layerMaterial.js'
import LabelObject from './LabelObject.jsx'
import LabelText from './LabelText.jsx'


function Anvorguesa({ radius = 20, speed = 1.3, ...props }) {
    //const colorMap = useLoader(TextureLoader, '/Asset_10.png')
    const scaleW = useAspect(1000, 1000, 0.4)
    const textures = useTexture([gesaUrl])
    const group = useRef()


    const layer = { texture: textures[0], z: 0, factor: 0.005, scale: scaleW }
    useFrame((state) => {
        const t = state.clock.getElapsedTime() * speed
        group.current.position.set(Math.cos(t) * radius, Math.sin(t) * radius , 0)
      })
    return (
        <group ref={group}>
            <Plane scale={layer.scale} args={[1, 1, 10, 10 ]} position={[0, -50, 0]} >
                <meshBasicMaterial transparent map={layer.texture}  />
            </Plane>
            <LabelText position={[0,-300,0]} children={"Nuestro Modelo"}/>
        </group>

    )
}

export default Anvorguesa