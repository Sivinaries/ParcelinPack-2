import model from "../../assets/images/portofolio/model.png";
import hampers from "../../assets/images/portofolio/hampers.jpg";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div className="grid grid-cols-1 h-full w-full">
      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-5 h-auto md:h-[539px]">
          <div className="flex items-center bg-black text-white font-bold col-span-1 md:col-span-2">
            <div className="space-y-2 md:space-y-6 mx-4 md:mx-20 py-4 md:py-0">
              <h1 className="text-4xl md:text-5xl md:tracking-tighter md:leading-normal">
                Kami Membuat Packaging yang Menceritakan Kisah yang Layak Dibagikan
              </h1>
              <div className="border-2 rounded-full bg-orange-400 p-3 w-fit">
                <Link
                  to="portfolio"
                  className="">
                  <h1>
                    Lihat Portofolio
                  </h1>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-2">
            <div
              className="h-64 md:h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${model})` }}
            >
              <div className="absolute bottom-0 font-semibold text-white text-xl p-4">
                PR Packaging for Scarlett
              </div>
            </div>
            <div
              className="h-64 md:h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${hampers})` }}
            >
              <div className="absolute bottom-0 font-semibold text-white text-xl p-4">
                Ied Fitri Hampers for irisbyms
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
