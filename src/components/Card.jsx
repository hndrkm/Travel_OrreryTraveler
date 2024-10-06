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
                <h4 className='my-6 text-primary mb-2'>{planet.description}</h4>
                <p className='text-wrap text-secondary text-md sm:text-xl'>{planet.distanceFromSun}</p>
            </div>
            <div className="col col-span-4 border-2 border-primary bg-blac2 text-wrap text-secondary2 px-2 py-2">
                <p>{planet.description}</p>
            </div>
        </div>
    );
}
export default Card;