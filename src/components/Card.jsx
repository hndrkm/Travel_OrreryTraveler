import tierra from '/img/tierra.jpg'

const Card =({
    children, 
    title='Planeta Tierra',
    dataPrimary='Es un planeta del sistema solar que gira alrededor de su estrella —el Sol— en la tercera órbita más interna.',
    dataSecondary='a Tierra se formó hace aproximadamente 4550 millones de años y la vida surgió unos mil millones de años después. Es el hogar de millones de especies, incluidos los seres humanos y actualmente el único cuerpo astronómico donde se conoce la existencia de vida.',
    content='La atmósfera y otras condiciones abióticas han sido alteradas significativamente por la biosfera del planeta, favoreciendo la proliferación de organismos aerobios, así como la formación de una capa de ozono que junto con el campo magnético terrestre bloquean la radiación solar dañina, permitiendo así la vida en la Tierra. Las propiedades físicas de la Tierra, la historia geológica y su órbita han permitido que la vida siga existiendo. Se estima que el planeta seguirá siendo capaz de sustentar vida durante otros 500 millones de años,ya que según las previsiones actuales, pasado ese tiempo la creciente luminosidad del Sol terminará causando la extinción de la biosfera.',

}) => {
    return(
        <div className="container grid grid-cols-4 gap-4">
            <div className=" col md:col-span-2 col-span-4 border-2 border-secondary">
                <img className=' object-cover mx-auto h-full rounded-lg' src={tierra} alt="" />
            </div>
            <div className="col md:col-span-2 col-span-4 border-2 border-primary bg-blac2 px-3 py-2">
                <h1 className='text-3xl text-primary mt-2 underline'>{title}</h1>
                <h4 className='my-6 text-primary mb-2'>{dataPrimary}</h4>
                <p className='text-wrap text-secondary text-md sm:text-xl'>{dataSecondary}</p>
            </div>
            <div className="col col-span-4 border-2 border-primary bg-blac2 text-wrap text-secondary2 px-2 py-2">
                <p>{content}</p>
            </div>
        </div>
    );
}
export default Card;