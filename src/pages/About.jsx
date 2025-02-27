import Navbar from "../components/Navbar";
import Pelanggan from "../components/Home/Pelanggan";
import Exp from "../components/Home/Exp";
import Why from "../components/Home/Why";
import Promote from "../components/Promote";
import Hero from "../components/About/Hero";
import Story from "../components/About/Story";
import Team from "../components/About/Team";
import QuoteSection from "../components/About/Quote";
import Footer from "../components/Footer";
import Campaign from "../components/Home/Campaign";

function About() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="w-full mx-auto">
        <Hero />
        <Story />
        <QuoteSection />
        <Exp />
        <div className="md:hidden">
          <Campaign />
        </div>
        <Team />
        <Why />
        <Pelanggan />
        <Promote />
      </div>
      <Footer />
    </main>
  );
}

export default About;
