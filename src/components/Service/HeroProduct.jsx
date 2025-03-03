import background from "../../assets/images/service/hero.png";

export default function HeroProduct({ title, desc }) {

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      <img
        src={background}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 h-full p-4 xl:p-8 my-4 md:my-8 text-white">
        <h1 className="text-2xl md:text-6xl font-bold absolute bottom-48 md:bottom-52">{title}</h1>
        <p className='bottom-20 text-xs md:text-xl md:w-4/5 absolute'>
          {desc}
        </p>
      </div>
    </div>
  );
}
