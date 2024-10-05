import Boton from "./Boton";


const Hero = ({
    orrery = "ORRERY TRAVELER!",
    traveler = "TRAVELER" }) => {
    return (
        <div className=" pb-20">
            <h1 className='text-primary text-4xl pt-4 pb-20 font-serif text-center'>A traves del sistema solar.</h1>
            <div>
                <div className="text-4xl sm:text-6xl text-primary font-sans text-center">ORRERY TRAVEL</div>
                <p className="text-secondary text-right font-sans text-4xl sm:text-6xl">TRAVELER</p>
                <div className="pt-20 text-center">
                    <Boton ruta='\'>Iniciar</Boton>
                </div>
            </div>
        </div>
    );
}
export default Hero;