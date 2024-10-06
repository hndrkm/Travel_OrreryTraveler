import Boton from "./Boton";


const Hero = () => {
    return (
        <div className=" pb-20 h-svh">
            <h1 className='text-primary text-4xl pt-20 pb-10 font-serif text-center'>A traves del sistema solar.</h1>
            <div>
                <div className="text-4xl sm:text-6xl text-primary font-sans text-center">ORRERY TRAVEL</div>
                <div className="">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</div>
                <p className="text-secondary2 font-sans text-4xl sm:text-6xl text-center">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;TRAVELER</p>
                <div className="h-[80%]">1</div>
                <div className="pt-64 text-center">
                    <Boton ruta='\orrery'>Iniciar</Boton>
                </div>
            </div>
        </div>
    );
}
export default Hero;