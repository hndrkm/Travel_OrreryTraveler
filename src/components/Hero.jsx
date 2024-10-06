import Boton from "./Boton";
import logo from '/img/logo_home.png'


const Hero = () => {
    return (
        <div className=" pb-20 h-svh">
            <h1 className='text-primary text-4xl pt-0 pb-10 font-serif text-center'>A traves del sistema solar.</h1>
            <div>
                <div className="text-4xl sm:text-6xl text-primary font-sans text-center">ORRERY TRAVEL</div>

                <p className="text-secondary2 font-sans text-4xl sm:text-6xl text-center">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;TRAVELER</p>

                <div className="flex justify-center">
                    <img className="h-80 w-auto"  src={logo} alt="Logo" />
                </div>

                <div className="pt-5 text-center">
                    <Boton ruta='\orrery'>Iniciar</Boton>
                </div>
            </div>
        </div>
    );
}
export default Hero;