import background from "/images/hero/hero1.png";

function Hero() {
  return (
  <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={background}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 h-full p-4 xl:p-8 my-4 md:my-8 text-white">
        <h1 className="text-2xl md:text-6xl font-bold absolute bottom-48 md:bottom-44">Blog</h1>
        <p className='bottom-20 text-xs md:text-xl md:w-4/5 absolute'>
          ParcelinPack telah menangani berbagai proyek pengemasan dan pengiriman untuk bisnis dan individu,
          mulai dari produk retail, makanan, hingga barang pecah belah. Dengan standar kualitas tinggi, kami
          memastikan setiap paket dikemas dengan aman dan profesional. Berikut adalah beberapa contoh hasil
          karya kami yang telah membantu pelanggan mengirimkan produk mereka dengan lebih efisien dan terpercaya.
        </p>
      </div>
    </div>  )
}

export default Hero