import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Main() {
    return (
        <main className='flex flex-col'>
            <Navbar />
            <div className='w-full'>
                <Outlet />
            </div>
            <Footer />
        </main>
    )
}

export default Main;
