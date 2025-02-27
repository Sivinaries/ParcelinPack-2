import background from "../../assets/images/service/hero.png";

function Hero() {
  return (
    <div className="relative bg-gray-900 text-white w-full h-screen sm:h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={background}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative h-full z-10 p-4 xl:p-8">
        <h1 className="text-4xl md:text-6xl font-bold absolute bottom-96 md:bottom-44">Portfolio</h1>
        <p className='bottom-20 w-3/4 absolute'>
          ParcelinPack telah menangani berbagai proyek pengemasan dan pengiriman untuk bisnis dan individu,
          mulai dari produk retail, makanan, hingga barang pecah belah. Dengan standar kualitas tinggi, kami
          memastikan setiap paket dikemas dengan aman dan profesional. Berikut adalah beberapa contoh hasil
          karya kami yang telah membantu pelanggan mengirimkan produk mereka dengan lebih efisien dan terpercaya.
        </p>
      </div>
    </div>
  )
}

export default Hero