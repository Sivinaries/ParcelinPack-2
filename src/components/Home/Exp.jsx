import exp1 from "../../assets/images/exp/exp1.png";
import exp2 from "../../assets/images/exp/exp2.png";
import exp3 from "../../assets/images/exp/exp3.png";

function Exp() {
  return (
    <div className="grid grid-cols-1 h-full bg-white">
      <div className="my-2 md:my-0 space-y-8 md:space-y-12">
        <div className="mx-4 md:mx-20">
          <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-6">
            <div className="w-full md:w-1/2">
              <div
                className="space-y-2 md:space-y-10 rounded-xl bg-cover bg-center h-64 md:h-80 flex flex-col justify-around md:justify-start px-8 text-white relative"
                style={{ backgroundImage: `url(${exp1})` }}
              >
                <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
                <div className="z-10">
                  <p className="text-4xl md:text-8xl font-bold">7+</p>
                  <p className="text-2xl">Tahun</p>
                </div>
                <p className="z-10 text-xs md:text-lg">
                  Dengan pengalaman lebih dari 7 tahun, Parcelinpack hadir
                  sebagai mitra terpercaya dalam menyediakan kemasan yang
                  kreatif dan inovatif untuk meningkatkan nilai estetika produk
                  dan memperkuat citra brand bisnis Anda.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div
                className="space-y-2 md:space-y-10 rounded-xl bg-cover bg-center h-64 md:h-80 flex flex-col justify-around md:justify-start px-8 text-white relative"
                style={{ backgroundImage: `url(${exp2})` }}
              >
                <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
                <div className="z-10">
                  <p className="text-4xl md:text-8xl font-bold">7500+</p>
                  <p className="text-2xl">Total Pelanggan</p>
                </div>
                <p className="z-10 text-sm md:text-lg">
                  Dipercaya oleh lebih dari 7500 pelanggan setia. Parcelinpack
                  menjadi pilihan utama untuk solusi packaging bagi UMKM hingga
                  Brand-Brand besar Nasional. Kami senantiasa siap mendukung
                  kesuksesan bisnis Anda.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mt-4 md:mt-8">
            <div
              className="space-y-2 md:space-y-10 rounded-xl bg-cover bg-center h-64 md:h-80 flex flex-col justify-around md:justify-start px-8 text-white relative"
              style={{ backgroundImage: `url(${exp3})` }}
            >
              <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
              <div className="z-10">
                <p className="text-4xl md:text-8xl font-bold">10 Juta+</p>
                <p className="text-2xl">Total Produksi</p>
              </div>
              <div className="z-10 ">
              <p className="text-xs md:text-lg">
                Dengan total produksi lebih dari 10.000.000 packaging,
                Parcelinpack membuktikan dedikasi dalam 
              </p>
              <p className="text-xs md:text-lg">
              menghadirkan kualitas
                dan inovasi yang mendukung kesuksesan bisnis Anda di berbagai
                sektor industri.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exp;
