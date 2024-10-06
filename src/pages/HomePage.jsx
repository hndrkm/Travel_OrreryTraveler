import Hero from "../components/Hero";
import Boton from "../components/Boton";
import Card from "../components/Card";

const HomePage = () => {
    return (
        <>

                <Hero></Hero>

                <div className="pt-10 border-2 border-secondary2 bg-blac2">
                    <div className="text-center text-secondary2 text-4xl font-serif pb-10">Qué es un orrery?</div>
                    <p className="text-secondary2 text-md sm:text-3xl text-wrap mx-6 mb-6" >Un orrery es un modelo mecánico del Sistema Solar que muestra las posiciones relativas y los movimientos de los planetas y las lunas según el modelo heliocéntrico (centrado en el Sol). Los planetas de este orrery, que están hechos de marfil, están montados sobre armaduras de latón que se extienden desde un eje central y giran de forma independiente mediante un mecanismo de ruedas dentadas contenido en la base. El mecanismo se acciona girando una pequeña manivela que se extiende desde un lado de la base. El efecto general es imitar los períodos relativos de rotación de los planetas alrededor del Sol.
                    </p>
                </div>

                <div className="pt-10 mt-20 ">
                    <h1 className="text-primary text-2xl sm:text-5xl text-center font-semibold mb-20">Quienes somos?</h1>
                    <div className="text-center mb-20">
                        <Boton ruta="/aboutus">Sobre nosotros</Boton>
                    </div>
                </div>

        </>
    );
}
export default HomePage;