import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa6";
import wa from '/images/wa.png'

function Whatsapp() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="z-50 fixed bottom-8 left-6 opacity-85 shadow-amber-500 hover:opacity-100">
        <button onClick={scrollToTop}>
          <div className="bg-amber-600 opacity-85 shadow-amber-600 xl:p-2 rounded-3xl px-2 py-6  hover:opacity-100">
            <FaArrowUp className="text-white xl:w-6 xl:h-20 w-4 h-8" />
          </div>
        </button>
      </div>
      <div className="z-40 fixed bottom-10 right-6 opacity-85 shadow-emerald-200 hover:opacity-100">
        <Link 
        target="blank"
        to="https://warotator.parcelinpack.id/organik-website-5">
          <img src={wa} alt="WhatsApp Logo" className="w-16 h-16 xl:w-20 xl:h-20" />
          </Link>
      </div>
    </>
  );
}

export default Whatsapp;
