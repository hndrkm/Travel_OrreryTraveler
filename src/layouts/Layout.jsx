import { Outlet } from "react-router-dom";


const Layout = ({
    orrery = "ORRERY TRAVELER!",
    traveler = "TRAVELER" }) => {
    return (
        <>
            <div className="fixed top-5 left-5 h-14 w-[96%] border-primary bg-black border-2 py-4 ">
                <h1 className="-mt-1 ms-20 ps-10 text-primary font-medium sm:text-3xl text-2xl ">{orrery}</h1>
            </div>
            <div className="fixed top-5 left-5 border-secondary2  border-2 py-4 h-[96%] w-14">
                <h1 className=" absolute bottom-20 -left-12 text-primary font-medium text-3xl rotate-180 ">
                    <div className=" rotate-90">{traveler}</div>
                </h1>
            </div>
            <div className="fixed top-6 left-6 border-secondary2 bg-blac2 border-2 rounded-full h-12 w-12"> </div>
            <div className="relative container ms-24 w-[70%] sm:w-[80%] lg:w-[85%] h-[80vh] px-[8%] mt-24 overflow-auto scrollbar scrollbar-thumb-rounded-full scrollbar-thumb-primary scrollbar-track-transparent scroll-smooth">
                
                <Outlet />
            </div>
        </>
    );
}
export default Layout;