import background from "/images/hero/hero1.png";

function Hero() {
  return (
    <div className="relative w-full h-[600px] md:h-[500px] overflow-hidden">
        <img
          src={background}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 h-full p-4 xl:p-8 my-4 md:my-8 text-white">
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