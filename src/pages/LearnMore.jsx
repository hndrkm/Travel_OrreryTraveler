import Boton from "../components/Boton"
import cat from '/img/cat.png'
import planeta from '/img/p_central.png'
import satelite from '/img/satelite.png'

function LearnMore() {
    return (
        <div className=" container">
            <h1 className='text-primary text-4xl pt-4 font-sans col-span-2 sm:col-span-1 row-span-1 text-center'>A traves del sistema solar.</h1>
            <div className='text-secondary2 text-2xl pb-10 font-serif 
            col-span-2 sm:col-span-1 row-span-1 text-center'>Aprende sobre nuestro Orrery.</div>
            
            <div className="absolute">

            <div className="relative">
                    <img src={planeta} alt="Nuestro Modelo" className="w-[70%] border-2"/>
                    <Boton ruta='learnmore/ourmodel'>Nuestro Modelo</Boton>
                </div>

                <div className="relative top-36 left-20">
                    <img src={satelite} alt="Modelo Mecanico" className="w-20 h-auto"/>
                    <Boton ruta='learnmore/mecanic'>Modelo Mecanico</Boton>
                </div>

                <div className="relative top-5 left-52">
                    <img src={cat} alt="Info" className="w-20 h-auto" />
                    <Boton ruta='learnmore/info'>Info</Boton>
                </div>
            </div>
        </div>
    )
}

export default LearnMore