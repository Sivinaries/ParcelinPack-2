import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero from "../components/Portfolio/Hero"
import Project from "../components/Portfolio/Project"


function Porto() {
  return (
    <main className='flex flex-col'>
      <Navbar />
      <div className='w-full mx-auto'>
        <Hero />
        <Project />
      </div>
      <Footer />
    </main>
  )
}

export default Porto