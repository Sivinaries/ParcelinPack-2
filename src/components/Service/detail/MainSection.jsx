import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import PropTypes from "prop-types";

export default function MainSection({ name, minOrder, price, desc, images }) {
  return (
    <div className="w-full h-full py-10 flex items-center justify-center px-4 md:px-0">
      <div className="flex flex-col md:flex-row w-full h-full gap-6 md:gap-8">
        <div className="w-full md:w-1/2">
          <Carousel images={images} />
        </div>

        <div className="w-full space-y-4 text-center md:text-left">
          <p className="text-lg md:text-xl">Min. {minOrder}</p>
          <h1 className="font-bold text-3xl md:text-4xl">{name}</h1>
          <p className="font-bold text-xl md:text-2xl text-[#AB6029]">{price}/pcs</p>
          <p className="text-gray-700">{desc}</p>

          <div>
            <Link>
              <button className="bg-orange-500 text-white py-2 px-4 rounded-full w-full md:w-auto">
                Hubungi untuk pemesanan
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

MainSection.propTypes = {
  name: PropTypes.string.isRequired,
  minOrder: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
