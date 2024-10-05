import Hero from "../components/Hero";
import Boton from "../components/Boton";
import Card from "../components/Card";

const HomePage = () => {
    return (
        <>

                <Hero></Hero>

                <div className="pt-10 border-2 border-secondary2 bg-blac2">
                    <div className="text-center text-secondary2 text-4xl font-serif pb-10">What is an Orrery?</div>
                    <p className="text-secondary2 text-md sm:text-3xl text-wrap mx-6 mb-6" >An orrery is a mechanical model of the Solar System that shows the relative positions and motions of the planets and moons according to the heliocentric (Sun-centred) model. The planets in this orrery, which are made of ivory, are mounted on brass armatures which extend from a central shaft and are rotated independently by a geared wheelwork mechanism contained in the base. The mechanism is operated by turning a small handle extending from one side of the base. The overall effect is to imitate the relative periods of rotation of the planets about the Sun.
                    </p>
                </div>

                <div className="pt-10 mt-20 ">
                    <h1 className="text-primary text-2xl sm:text-5xl text-center font-semibold mb-20">Who are we?</h1>
                    <div className="text-center mb-20">
                        <Boton ruta="/aboutus">About Us</Boton>
                    </div>
                </div>

                <div className="pt-10 mt-20">
                    <Card></Card>
                </div>

        </>
    );
}
export default HomePage;