import Hero from "../components/Contact/Hero";
import Hubungi from "../components/Contact/Hubungi";
import Footer from "../components/Footer";
import Mitra from "../components/Mitra";
import Navbar from "../components/Navbar";
import Promote from '../components/Promote'

function Contact() {
    return (
        <main className='flex flex-col'>
            <Navbar />
            <div className='w-full mx-auto'>
                <Hero />
                <Hubungi />
                <div className="hidden md:flex">
                <Mitra />
                </div>
                <div className="flex md:hidden">
                <Promote />
                </div>
            </div>
            <Footer />
        </main>)
}

export default Contact