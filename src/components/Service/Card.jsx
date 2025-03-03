import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Card({ img, name, tags, slug, minOrder, price }) {
  return (
    <div className="flex flex-col h-full w-full border shadow-lg rounded-xl overflow-hidden p-2">
      <img
        className="w-full max-h-[200px] object-cover rounded-lg"
        src={img}
        alt={name}
      />
      <div className="flex flex-col p-4 gap-y-4">
        {minOrder && (<p>Min. {minOrder}</p>)}
        <h2 className="text-xl font-semibold">{name}</h2>
        {price && (<p>{price}/pcs</p>)}
        <div className="flex flex-wrap gap-2">
          {tags && tags.length > 0 && (
            tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gray-100 text-sm rounded-full"
              >
                {tag.tag}
              </span>
            ))
          )}
        </div>
        <Link
          to={slug}
          className="flex items-center justify-between px-4 py-2 mt-4 bg-white border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-all"
        >
          <p>Lihat Selengkapnya</p>
          <MdArrowOutward className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  slug: PropTypes.string.isRequired,
  minOrder: PropTypes.string,
  price: PropTypes.string,
};
