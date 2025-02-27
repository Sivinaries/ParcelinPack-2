import why1 from "../../assets/images/why/why1.svg";
import why2 from "../../assets/images/why/why2.png";
import why3 from "../../assets/images/why/why3.png";
import why4 from "../../assets/images/why/why4.png";
import why5 from "../../assets/images/why/why5.png"

function Why() {
  const services = [
    {
      text: "Professional",
      description:
        "Parcelinpack berkomitmen untuk melayani pelanggan dengan service dan kualitas terbaik. Dengan pemberian layanan kebutuhan packaging secara menyeluruh, mulai dari perencanaan, konsultasi, desain, hingga produksi. Kami mempunyai tenaga ahli dan teknologi terbaik untuk hasil maksimal.",
      image: why1,
    },
    {
      text: "Variatif",
      description:
        "Parcelinpack menghadirkan berbagai pilihan kemasan yang fleksibel dan dapat disesuaikan dengan kebutuhan setiap bisnis, mulai dari bentuk, bahan, hingga desain, memastikan solusi kemasan terbaik yang sesuai dengan karakter produk Anda",
      image: why5,
    },
    {
      text: "Kreatif",
      description:
        "Kami mengutamakan kreativitas dalam setiap desain kemasan, menciptakan inovasi yang unik dan menarik. Parcelinpack membantu produk Anda tampil menonjol, memberikan kesan profesional, sekaligus meningkatkan daya tarik dan nilai jual di pasaran.",
      image: why2,
    },
    {
      text: "Minimal Order Rendah",
      description:
        "Dengan minimum order mulai dari 10 hard box dan 50 untuk tipe packaging lainnya, kami hadir dengan komitmen untuk mendukung semua bisnis agar bisa mendapatkan packaging yang berkualitas.",
      image: why3,
    },
    {
      text: "Budget Fleksibel",
      description:
        "Kami memahami kebutuhan bisnis Anda. Dengan layanan konsultasi, budget dapat didiskusikan untuk menemukan solusi kemasan terbaik tanpa kompromi pada kualitas.",
      image: why4,
    },
  ];

  return (
    <div className="bg-white py-10 px-4 md:px-20">
      <div className="text-left md:text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-light text-black">
          Kenapa Parcelinpack
        </h1>
      </div>

      <div className="flex space-x-4 w-full overflow-scroll md:gap-6 scrollbar-hide">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-gray-100 rounded-2xl overflow-auto w-80"
          >
            <img
              src={service.image}
              alt={service.text}
              className="w-full h-40 object-contain p-4"
            />
            <div className="p-6 space-y-8">
              <h2 className="text-2xl font-medium">
                {service.text}
              </h2>
              <p className="text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Why;
