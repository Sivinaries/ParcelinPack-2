import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import useCategories from "../../hooks/useCategories";

export default function Layanan() {
  const { categories, loading, error } = useCategories()
  
  if (loading) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  if (!categories || categories.length === 0) {
    return (
      <p className="text-center text-gray-500">Tidak ada layanan tersedia.</p>
    );
  }

  return (
    <div className="grid grid-cols-1 h-fit bg-white">
      <div className="my-8 md:my-20 space-y-3 md:space-y-6">
        <div className="mx-4 md:mx-16">
          <h1 className="text-4xl md:text-5xl font-light">Layanan Kami</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0.5 md:gap-2">
          {categories.map((category, index) => (
            <Link to={category.id.toString()} key={index} className="relative group">
              <div className="relative w-full h-[380px]">
                <img
                  className="w-full h-60 md:h-full object-cover inset-0 rounded-3xl"
                  src={`https://admin.parcelinpack.id/storage/${category.img}`}
                  alt=""
                />

                <div className="absolute bottom-3 md:bottom-3 left-5 w-5/6 md:w-4/5">
                  <div className="flex justify-between items-center gap-x-2">
                    <div className="shadow-xl p-1 bg-gray-700 bg-opacity-50 rounded-xl my-auto px-4">
                      <h1 className="text-white text-xl md:text-lg font-sans">
                        {category.kategori}
                      </h1>
                    </div>

                    <div className="p-1 bg-gray-700 rounded-full shadow-xl bg-opacity-50 opacity-0 translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <MdArrowOutward className="text-white w-8 h-8" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}