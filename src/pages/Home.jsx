import Hero from '../components/Home/Hero'
import Navbar from '../components/Navbar'
import Runningtext from '../components/Home/Runningtext'
import Cute from '../components/Home/Cute'
import Pelanggan from '../components/Home/Pelanggan'
import Layanan from '../components/Home/Layanan'
import Parcel from '../components/Home/Parcel'
import Exp from '../components/Home/Exp'
import Why from '../components/Home/Why'
import Portfolio from '../components/Home/Portfolio'
import Review from '../components/Home/Review'
import Faq from '../components/Home/Faq'
import Promote from '../components/Promote'
import Campaign from '../components/Home/Campaign'
import Footer from '../components/Footer'

function Home() {
    return (
        <main className='flex flex-col'>
            <Navbar />
            <div className='w-full mx-auto'>
                <Hero />
                <Runningtext />
                <Cute />
                <Pelanggan />
                <Layanan />
                <Parcel />
                <Exp />
                <Why />
                <Portfolio />
                <Campaign />
                <Review />
                <Faq />
                <Promote />
            </div>
            <Footer />
        </main>
    )
}

export default Home
