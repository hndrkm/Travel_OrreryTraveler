import img1 from '/img/meca/img1.png'
import img2 from '/img/meca/img2.png'
import img3 from '/img/meca/img3.png'
import img4 from '/img/meca/img4.png'
import img5 from '/img/meca/img5.png'
import img6 from '/img/meca/img6.png'


function MecanicModel() {
  return (
    <div className="grid grid-cols-3">
      <div className=" col-span-3 pt-5">
        <h1 className="text-6xl text-primary">Un reloj Astronómico</h1>
        <h3 className="text-4xl text-primary  mt-4">Nuestro protagonista siempre fue el sol</h3>
      </div>

      <div className="col-span-3 text-secondary2 mt-5 text-xl">
        <p>
          La pintura de Joseph Wright “Un filosofo da una leccion sobre el planetario de mesa” (ca. 1766), presentada en Derby Museum and Art Gallery, representa a un grupo de curiosos que escuchan las explicaciones de un filosofista natural, donde el Sol es el protagonista del mismo al ser fabricado en bronce, siendo la unica fuente de luz en la habitacion, formando parte de un planetario con apariencia similar a una esfera armillar.
        </p>
      </div>
      <div className="col-span-3 flex justify-center pt-4 pb-8">
        <img src={img1} alt="imagen1" className='border-2 border-blac2 shadow-xl' />
      </div>


      <div className="col-span-2 text-secondary2 mt-12">
        <h1 className='text-4xl text-primary'>Origen del Orrery</h1>
        <br />
        <p className='text-xl mt-8'>Basado en un modelo mecánico ilustrativo accionado mediante un conjunto de engranajes, mostrando las posiciones relativas y movimientos de los planetas y lunas, optando por un modelo heliocéntrico, a veces a una escala aproximada.</p>
        <br />
        <p className='text-xl'>
          [4to conde de Orrery, Charles Boyle]
        </p>
      </div>
      <div className="col-span-1 justify-center flex">
        <img src={img2} alt="imagen1" className='border-2 border-blac2 shadow-xl mt-12' />
      </div>

      <div className="col-span-3 mt-5">
        <p className=' text-xl text-secondary2'>

          A lo largo de la historia fueron accionados por mecanismos de relojería, siendo el primero en ser construido en 1704 en Inglaterra, presentado Charles Boyle, 4° Conde de Orrery, aunque hay evidencias arqueológicas de este tipo de mecanismo en la Grecia Clásica. Muchos de estos construidos con materiales preciosos como latón, bronce, oro y plata, estos objetos no solo eran instrumentos científicos sino también objetos de exhibición en las cortes reales y las mansiones de la aristocracia europea.
        </p>
      </div>

      <div className="col-span-3 pt-12">
        <h1 className='text-4xl text-primary'>Enigma Historico</h1>
      </div>

      <div className="col-span-1 justify-center flex pt-4">
        <img src={img3} alt="imagen3" />
      </div>

      <div className="col-span-2 border-2 border-primary bg-blac2">
        <p className='text-2xl text-primary mt-8 mx-4'>
          Como un antecesor tenemos al mecanismo de Anticitera, una computadora mecánica, al principio un enigma, considerada como uno de los primeros planetarios mecánicos el cual plasma los movimientos del sol y de la luna en un sistema geocéntrico, desarrollado en Grecia (100 a 150 aC).
        </p>
      </div>


      <div className="col-span-2 pt-16">
        <h1 className='text-4xl text-primary'>¿Como funcionan?</h1>
        <p className=' text-xl text-secondary2 mt-12'>
          En un principio se planteaba un universo geocéntrico para simplificar las trayectorias de los planetas como círculos simples, el movimiento rotacional era representado fácilmente con engranajes dentados montados en bases fijas.
        </p>
      </div>
      <div className="col-span-1 justify-center flex">
        <img src={img4} alt="imagen4" className=' shadow-xl mt-12 ' />
      </div>

      <div className="col-span-3 mt-7">
        <p className=' text-xl text-secondary2'>
          Instrumentos mejorados de Tycho Brahe hicieron observaciones precisas de los cielos (1576-1601), y a partir de estos datos Johannes Kepler(1621) dedujo que los planetas giraban al rededor del sol en trayectorias elípticas. En 1678 Isaac Newton explicó la causa del movimiento eliptico en su teoría de gravitación.
        </p>
      </div>

      <div className="col-span-3 pt-12">
        <h1 className='text-4xl text-primary'>Patrimonio mundial de la UNESCO</h1>
      </div>

      <div className="col-span-3 flex justify-center pt-8">
        <img src={img5} alt="imagen5" className='border-2 border-blac2 shadow-xl mx-20' />
        <img src={img6} alt="imagen6" className='border-2 border-blac2 shadow-xl mx-20' />
      </div>

      <div className="col-span-3 mt-7">
        <p className=' text-xl text-secondary2'>

          Algunos planetarios mecánicos ocupaban una habitación completa como es el caso del planetario de Eisinga (1774-1781) el cual aun permanece activo con reajustes manuales para compensar el efecto de los años bisiestos, construido a una escala de [1:1.000.000.000.000] o 1 milímetro: 1millon de kilómetros.
        </p>
      </div>


    </div>
  )
}

export default MecanicModel