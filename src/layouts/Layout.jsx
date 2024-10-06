import { Outlet } from "react-router-dom";
import Boton from "../components/Boton";
import miniLogo from '/img/Asset_3.png'

const Layout = () => {
    return (
        <>
            <div className="fixed top-5 left-5 h-14 w-[96%] border-primary bg-black border-2 grid grid-cols-2">
                <a href="/" className="-mt-1 ms-20 ps-10 pt-3 text-primary font-medium ms:text-xl text-3xl ">ORRERY TRAVELER!</a>
                <div className="text-right pt-2.5">
                        <Boton ruta="/learnmore" bg="bg-primary text-black border-2 border-primary hover:bg-balc2">Learn more</Boton>
                    </div>
            </div>
            <div className="fixed top-5 left-5 border-secondary2  border-2 py-4 h-[96%] w-14">
                <h1 className=" absolute bottom-20 -left-12 text-primary font-medium text-3xl rotate-180 ">
                    <div className=" rotate-90">TRAVELER</div>
                </h1>
            </div>
            <div className="fixed top-6 left-6 border-secondary2 bg-primary border-2 rounded-full h-12 w-12">
                <a href="/">
                    <img src={miniLogo} alt="logo" className="mt-3"/>
                </a>
            </div>
            <div className="relative container ms-24 w-[70%] sm:w-[80%] lg:w-[85%] h-[80vh] px-[8%] mt-24 overflow-auto scrollbar scrollbar-thumb-rounded-full scrollbar-thumb-primary scrollbar-track-transparent scroll-smooth">
                
                <Outlet />
            </div>
        </>
    );
}
export default Layout;