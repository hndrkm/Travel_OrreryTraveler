import planets from '../planets.json';

import Card from "../components/Card";

function Info() {
    //console.log(planets);
    return (
        <div>
            <h1 className="text-4xl text-secondary2 text-center underline">About Our solar system</h1>
            { planets.map((planet)=>(
                <div key={planet.id} className="pt-10 mt-20">
                <Card planet={planet}/>
            </div>
            ))  }
            
        </div>
    );
}

export default Info;