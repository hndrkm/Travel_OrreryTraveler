const Boton =({children, ruta='/', bg='bg-primary text-black2 rounded-full' }) => {
    return(
        <div className="container sm:px-20">
            <a href={ruta} className={`${bg} text-xl sm:text-2xl px-8 py-2 hover:bg-secondary font-semibold`} >
                {children}
            </a>
        </div>
    );
}
export default Boton;