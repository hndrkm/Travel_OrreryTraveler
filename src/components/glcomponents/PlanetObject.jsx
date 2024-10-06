import { Canvas } from '@react-three/fiber'
import NearEarthObject from './NearEarthObject'
import Orbit from './Orbit';
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Stats, OrbitControls, Environment } from '@react-three/drei'


function PlanetObject({ name, smA, oE, oI, aP, aN, mAe, period,color , sim, pos=3}) {


    return (

        <div className='h-full w-full'>
            <Canvas camera={{ fov: 70, position: [0, 0, pos] }}>
                <color attach="background" args={['black']} />
                <mesh visible={true} >
                    <sphereGeometry args={[0.1, 16, 16]} />
                    <meshBasicMaterial color={[4, 2, 1]} toneMapped={false} />
                </mesh>
                <Orbit name={name} smA={smA} oE={oE} oI={oI} aP={aP} aN={aN} colorP={color} />
                <NearEarthObject sim={sim} pos={pos}
                    name={name} smA={smA} oE={oE} oI={oI} aP={aP} aN={aN} mAe={mAe} period={period}
                    colorP={color} />
                <OrbitControls />
                <EffectComposer>
                    <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
                </EffectComposer>
            </Canvas>
        </div>
    )
}

export default PlanetObject
