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
        <h1 className="text-4xl md:text-6xl font-bold absolute bottom-96 md:bottom-44">Layanan Kami</h1>
        <p className='bottom-20 w-3/4 absolute'>Kami menawarkan berbagai layanan untuk memenuhi kebutuhan packaging dan branding Anda. Mulai dari kemasan produk yang fungsional dan menarik, hampers serta corporate gift yang eksklusif, merchandise berkualitas, hingga PR packaging yang memukau. ParcelinPack siap membantu Anda menciptakan kesan terbaik untuk setiap momen dan kebutuhan bisnis Anda.</p>
      </div>
    </div>
  );
}

export default Hero;