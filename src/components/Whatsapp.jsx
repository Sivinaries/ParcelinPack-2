import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";

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
      <div className="z-50 fixed bottom-10 right-6 opacity-85 shadow-emerald-200 hover:opacity-100">
        <Link to="">
          <FaWhatsapp className="w-12 h-12 xl:w-16 xl:h-16 text-green-600" />
        </Link>
      </div>
    </>
  );
}

export default Whatsapp;
