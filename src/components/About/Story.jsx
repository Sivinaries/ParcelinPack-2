import background from "../../assets/images/story/background.png";

function Story() {
  return (
    <div className="flex items-center bg-white my-20 px-6 md:px-12 mx-auto">
      <div className="flex flex-col md:flex-row items-stretch gap-6 w-full">
        <div className="md:w-1/2 space-y-4 flex flex-col justify-center">
          <h1 className="text-4xl md:text-8xl font-bold">Cerita Parcelin</h1>
          <div className="md:hidden md:w-1/2 flex items-center justify-center">
          <img
            src={background}
            alt="Cerita Parcelin"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
          <p className="text-sm md:text-2xl leading-relaxed">
            PT Parcelin Creative Indonesia, atau yang lebih dikenal sebagai
            Parcelinpack, adalah perusahaan packaging yang melayani bisnis lokal
            maupun internasional, mulai dari UMKM hingga perusahaan
            multinasional di berbagai industri.
          </p>
          <p className="text-sm md:text-2xl leading-relaxed">
            Kami menyediakan solusi kemasan berkualitas tinggi yang dipadukan
            dengan kreativitas, membantu produk Anda tampil stand out di pasar
            yang kompetitif. Lebih dari sekadar penyedia layanan, kami
            berkomitmen menjadi mitra profesional yang terpercaya dan peduli,
            selalu siap bekerja bersama Anda.
          </p>
          <p className="text-sm md:text-2xl leading-relaxed">
            Bersama, kami hadir untuk memberikan solusi yang tak hanya menjawab
            kebutuhan, tetapi juga melampaui ekspektasi Anda.
          </p>
        </div>

        <div className="hidden md:w-1/2 md:flex items-center justify-center">
          <img
            src={background}
            alt="Cerita Parcelin"
            className="w-full h-full object-cover rounded-r-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Story;
