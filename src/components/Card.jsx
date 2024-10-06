//import tierra from '/img/tierra.jpg'

import PlanetObject from "./glcomponents/PlanetObject";

const Card = ({ planet }) => {

    return (
        <div className="container grid grid-cols-4 gap-4">
            <div className=" col md:col-span-2 col-span-4 border-2 border-secondary">

                <PlanetObject
                    pos={planet.pos}
                    sim={planet.sim}
                    name={planet.name}
                    smA={planet.smA}
                    oE={planet.oE}
                    oI={planet.oI}
                    aP={planet.aP}
                    aN={planet.aN}
                    mAe={planet.mAe}
                    period={planet.period}
                    color={planet.color} />
            </div>
            <div className="col md:col-span-2 col-span-4 border-2 border-primary bg-blac2 px-3 py-2">
                <h1 className='text-3xl text-primary mt-2 underline'>{planet.name}</h1>
                <h4 className='my-6 text-primary text-2xl mb-2'>Orbital Elements</h4>
                <div className="text-primary  text-xl">
                        SemiAxisMajor:{planet.smA}
                        <br />
                        Excentricity: {planet.oE}
                        <br />
                        Inclination: {planet.oI}
                        <br />
                        argument of perihelion: {planet.aP}
                        <br />
                        longitude of ascending node: {planet.aN}
                        <br />
                        average anomaly: {planet.mAe}
                        <br />
                        Period: {planet.period}
                </div>

                <p className='text-wrap text-secondary text-md sm:text-xl'>Distance from Sun: {planet.distanceFromSun}</p>
            </div>
            <div className="col col-span-4 border-2 border-primary bg-blac2 text-wrap text-secondary2 px-2 py-2">
                <p>{planet.description}</p>
            </div>
        </div>
    );
}
export default Card;