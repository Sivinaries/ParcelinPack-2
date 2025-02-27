import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Service/Hero";
import Layanan from "../components/Service/Layanan";

function Service() {
    return (
        <main className='flex flex-col'>
            <Navbar />
            <div className='w-full mx-auto'>
                <Hero />
                <Layanan />
            </div>
            <Footer />
        </main>
    )
}

export default Service;
