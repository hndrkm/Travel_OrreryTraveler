import Boton from "../components/Boton"

import img1 from '/img/aboutUs/img1.png'
import img2 from '/img/aboutUs/img2.png'

const AboutUs = () => {
  return (
    <>
        <div className="grid grid-cols-3 gap-1 mt-10">
          <div className="col-span-2 text-primary text-4xl">
            <h1>VAMOS A HABLAR ACERCA</h1>
            <h1>DE NOSOTROS. SOMOS UNIVERSITARIOS</h1>
            <h1>ENTUSIASTAS Y OTRAS COSAS</h1>
          </div>
          <div className="col-span-1 pt-10">
            <Boton ruta='https://discord.gg/SXRqWqkXnt' >Contactanos ●</Boton>
          </div>

            <div className="col-start-1 border-2 border-secondary">
              <img src={img1} alt="imagen1" />
            </div>
            <div className="col-start-2 border-2 border-secondary">
            <img src={img2} alt="imagen2" />
            </div>
            <div className="grid col-start-3 text-black">
              <div className=" rounded-full bg-secondary row-start-2 text-center font-bold ">
                <br />
                <br />
                #8C4E2A
              </div>
              <div className="rounded-full bg-primary row-start-2 text-center font-bold">
                <br />
                <br />
                #D98236
              </div>
              <div className="col-auto  row-start-2">

              </div>
            </div>

            <div className="border-2 border-primary text-primary text-2xl grid-rows-3">
            <div className="text-primary">12312</div>
              <div className="text-primary">Integrantes del Team</div>
              <div className="text-primary">123</div>
            </div>
            <div className="border-2 border-primary grid-rows-3">
              <div className="text-primary text-6xl ms-2 mt-2">01</div>
              <div className="text-primary text-center">123</div>
              <div className="text-primary ms-2 text-4xl">DAMARIS D.
                <br />
                S.A.
              </div>
            </div>
            <div className="border-2 border-primary grid-rows-3">
              <div className="text-primary text-6xl ms-2 mt-2">02</div>
              <div className="text-primary text-center">123</div>
              <div className="text-primary ms-2 text-4xl">DAMARIS D.
                <br />
                S.A.
              </div>
            </div>
            <div className="border-2 border-primary grid-rows-3">
              <div className="text-primary text-6xl ms-2 mt-2">03</div>
              <div className="text-primary text-center">123</div>
              <div className="text-primary ms-2 text-4xl">DAMARIS D.
                <br />
                S.A.
              </div>
            </div>
            <div className="border-2 border-primary grid-rows-3">
              <div className="text-primary text-6xl ms-2 mt-2">04</div>
              <div className="text-primary text-center">123</div>
              <div className="text-primary ms-2 text-4xl">DAMARIS D.
                <br />
                S.A.
              </div>
            </div>
            <div className="border-2 border-primary"></div>

        </div>
    </>
  )
}

export default AboutUs
