import Boton from "../components/Boton"

function LearnMore() {
    return (
        <div className=" container">
            <h1 className='text-primary text-4xl pt-4 font-sans col-span-2 sm:col-span-1 row-span-1 text-center'>A traves del sistema solar.</h1>
            <div className='text-secondary2 text-2xl pb-20 font-serif 
            col-span-2 sm:col-span-1 row-span-1 text-center'>Aprende sobre Orrery.</div>
            <div className="grid">
                <div className="pt-20 text-center">
                    <Boton ruta='learnmore/info'>Info</Boton>
                </div>
                <div className="pt-20 text-center">
                    <Boton ruta='learnmore/ourmodel'>Nuestro Modelo</Boton>
                </div>
                <div className="pt-20 text-center">
                    <Boton ruta='learnmore/mecanic'>Modelo Mecanico</Boton>
                </div>
            </div>
        </div>
    )
}

export default LearnMore