import { Canvas } from '@react-three/fiber'
import NearEarthObject from '../components/glcomponents/NearEarthObject'
import Orbit from '../components/glcomponents/Orbit';
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Stats, OrbitControls, Environment } from '@react-three/drei'
import NearObject from '../assets/csvjson'
import { useEffect, useState } from 'react';

function SceneOrrery() {
  const [filterA, setFilterA] = useState([]);

  function filterPHA() {
    const filterA = NearObject.filter(({ neo }) => neo == 'Y');
    setFilterA(filterA);
  }
  function filterNEO() {
    const filterA = NearObject.filter(({ neo }) => neo == '');
    setFilterA(filterA);
  }
  function filterP() {
    const filterA = NearObject.filter(({ neo }) => neo == 'N');
    setFilterA(filterA);
  }


  let num_i = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26
  ]

  return (
    <>
      <div className='h-screen w-screen'>

        <Canvas camera={{ fov: 70, position: [0, 0, 3] }}>
          <color attach="background" args={['black']} />
          <mesh visible={true} >
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshBasicMaterial color={[4, 2, 1]} toneMapped={false} />
          </mesh>

          <Orbit name={"Mercurio"} smA={0.38709927} oE={0.20563593} oI={7.00497902} aP={77.45779628} aN={48.33076593} colorP={[0.6, 0.596, 0.592]} />
          <NearEarthObject
            name={"Mercurio"} smA={0.38709927} oE={0.20563593} oI={7.00497902} aP={77.45779628} aN={48.33076593} mAe={0} period={0.2408467}
            colorP={[0.6, 0.596, 0.592]} />

          <Orbit name={"Venus"} smA={0.72333566} oE={0.00677672} oI={3.39467605} aP={131.60246718} aN={76.67984255} colorP={[0.769, 0.643, 0.267]} />
          <NearEarthObject
            name={"Venus"} smA={0.72333566} oE={0.00677672} oI={3.39467605} aP={131.60246718} aN={76.67984255} mAe={0} period={0.61519726}
            colorP={[0.769, 0.643, 0.267]} />

          <Orbit name={"Earth"} smA={1.00000261} oE={0.01671123} oI={-0.00001531} aP={102.93768193} aN={0.0} colorP={[0.506, 0.714, 0.831]} />
          <NearEarthObject
            name={"Earth"} smA={1.00000261} oE={0.01671123} oI={-0.00001531} aP={102.93768193} aN={0.0} mAe={0} period={1.0000174}
            colorP={[0.506, 0.714, 0.831]} />

          <Orbit name={"Marte"} smA={1.52371034} oE={0.09339410} oI={1.84969142} aP={-23.94362959} aN={49.55953891} colorP={[0.831, 0.306, 0.306]} />
          <NearEarthObject
            name={"Marte"} smA={1.52371034} oE={0.09339410} oI={1.84969142} aP={-23.94362959} aN={49.55953891} mAe={0} period={1.8808476}
            colorP={[0.831, 0.306, 0.306]} />



          <Orbit name={"Jupiter"} smA={5.20288700} oE={0.04838624} oI={1.30439695} aP={14.72847983} aN={100.47390909} colorP={[0.922, 0.741, 0.133]} />
          <NearEarthObject
            name={"Jupiter"} smA={5.20288700} oE={0.04838624} oI={1.30439695} aP={14.72847983} aN={100.47390909} mAe={0} period={1.8808476}
            colorP={[0.831, 0.306, 0.306]} />

          <Orbit name={"Saturn"} smA={9.53667594} oE={0.05386179} oI={2.48599187} aP={92.59887831} aN={113.66242448} colorP={[0.627, 0.604, 0.788]} />
          <NearEarthObject
            name={"Saturn"} smA={9.53667594} oE={0.05386179} oI={2.48599187} aP={92.59887831} aN={113.66242448} mAe={0} period={1.8808476}
            colorP={[0.831, 0.306, 0.306]} />

          <Orbit name={"Urano"} smA={19.18916464} oE={0.04725744} oI={0.77263783} aP={170.95427630} aN={74.01692503} colorP={[0.345, 0.678, 0.78]} />
          <NearEarthObject
            name={"Urano"} smA={19.18916464} oE={0.04725744} oI={0.77263783} aP={170.95427630} aN={74.01692503} mAe={0} period={1.8808476}
            colorP={[0.831, 0.306, 0.306]} />

          <Orbit name={"Neptuno"} smA={30.06992276} oE={0.00859048} oI={1.77004347} aP={44.96476227} aN={131.78422574} colorP={[0.345, 0.376, 0.78]} />
          <NearEarthObject
            name={"Neptuno"} smA={30.06992276} oE={0.00859048} oI={1.77004347} aP={44.96476227} aN={131.78422574} mAe={0} period={1.8808476}
            colorP={[0.831, 0.306, 0.306]} />
          {/*
          num_i.map((i) =>
          (
            <Orbit
              name={"Neptuno"}
              smA={NearObject[i].a}
              oE={NearObject[i].e}
              oI={NearObject[i].i}
              aP={NearObject[i].w}
              aN={NearObject[i].om}
              colorP={[0.56, 0.85, 0.85]} />
          )
          )
        }
        {
          num_i.map((i) =>
          (
            <NearEarthObject
              name={"Neptuno"}
              smA={NearObject[i].a}
              oE={NearObject[i].e}
              oI={NearObject[i].i}
              aP={NearObject[i].w}
              aN={NearObject[i].om}
              mAe={NearObject[i].ma}
              period={NearObject[i].per_y}
              colorP={[0.922, 0.741, 0.133]} />
          ))
        */}

          {NearObject && filterA.map(({ a, e, i, w, om, }) => (

            (<Orbit name={"Neptuno"} smA={a} oE={e} oI={i} aP={w} aN={om} colorP={[0.56, 0.85, 0.85]} />)
          )
          )}
          {NearObject && filterA.map(({ full_name, a, e, i, w, om, ma, per_y }) => (

            (<NearEarthObject name={full_name} smA={a} oE={e} oI={i} aP={w} aN={om} mAe={ma} period={per_y} colorP={[0.922, 0.741, 0.133]} />)
          )
          )}

          <NearEarthObject name={"Tierra"}>

          </NearEarthObject>

          <OrbitControls />
          <Stats showPanel={0} />
          {/*
        <Environment 
        files='./HDR_subdued_blue_nebulae.hdr' 
        background 
        backgroundBlurriness={0}
        /> */
          }


          <EffectComposer>
            <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
          </EffectComposer>
        </Canvas>


      </div>
      <div className='flex-no-wrap fixed bottom-0 flex w-full p-5'>
        <div className="flex pb-10  h-16 w-full border-secondary2 bg-blac2 border-4 ">
          <h1 className="mx-2 pt-3 text-primary font-medium ms:text-3xl text-xl ">Controles</h1>
         
          <button className='flex p-2 h-14 active:bg-secondary text-primary font-extrabold border-2 border-primary text-2xl' onClick={filterP}>
            Planets
          </button>
          <button className='flex p-2 h-14 active:bg-secondary text-primary font-extrabold border-2 border-primary text-2xl' onClick={filterPHA}>
            PHA
          </button>
          <button className='flex p-2 h-14 active:bg-secondary text-primary font-extrabold border-2 border-primary text-2xl' onClick={filterNEO}>
            NEO
          </button>
        </div>
      </div>
    </>
  )
}

export default SceneOrrery
