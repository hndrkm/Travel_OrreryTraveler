const Boton =({children, ruta='/'}) => {
    return(
        <div className="container sm:px-20">
            <a href={ruta} className="bg-primary text-black2 text-xl sm:text-2xl px-8 py-2 rounded-full hover:bg-secondary font-semibold" >
                {children}
            </a>
        </div>
    );
}
export default Boton;