import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import star from '../../assets/images/star2.png';

function Packaging() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 8000,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
    };

    return (
        <div className="grid grid-cols-1 h-full bg-white">
            <div className="my-10 space-y-8 md:space-y-12">
                <div className="mx-4 md:mx-20">
                    <div>
                        <h1 className="text-[30px] md:text-[120px]">Packaging Kami Cocok</h1>
                    </div>
                    <div className="flex">
                        <div>
                            <h1 className="text-[30px] md:text-[120px]"> untuk</h1>
                        </div>
                        <div className="my-auto">
                            <div className="grid grid-cols-1 w-full max-w-fit bg-orange-400 bg-opacity-80 rounded-full z-30">
                                <div className="h-full flex justify-between">
                                    <Slider className="w-full h-full" {...settings}>
                                        <div className="h-full flex justify-between min-h-[25px] md:min-h-[100px]">
                                            <h1 className="text-[12px] md:text-[70px] font-extralight text-black flex items-center">
                                                Fashion
                                                <img src={star} alt="Running Star" className="ml-3 md:ml-6 mr-3 md:mr-6 h-4 xl:h-10" />
                                            </h1>
                                        </div>
                                        <div className="h-full flex justify-between min-h-[25px] md:min-h-[100px]">
                                            <h1 className="text-[12px] md:text-[70px] font-extralight text-black flex items-center">
                                                Skincare
                                                <img src={star} alt="Running Star" className="ml-3 md:ml-6 mr-3 md:mr-6 h-4 xl:h-10" />
                                            </h1>
                                        </div>
                                        <div className="h-full flex justify-between min-h-[25px] md:min-h-[100px]">
                                            <h1 className="text-[12px] md:text-[70px] font-extralight text-black flex items-center">
                                                Make-Up
                                                <img src={star} alt="Running Star" className="ml-3 md:ml-6 mr-3 md:mr-6 h-4 xl:h-10" />
                                            </h1>
                                        </div>
                                        <div className="h-full flex justify-between min-h-[25px] md:min-h-[100px]">
                                            <h1 className="text-[12px] md:text-[70px] font-extralight text-black flex items-center">
                                                Parfum
                                                <img src={star} alt="Running Star" className="ml-3 md:ml-6 mr-3 md:mr-6 h-4 xl:h-10" />
                                            </h1>
                                        </div>
                                        <div className="h-full flex justify-between min-h-[25px] md:min-h-[100px]">
                                            <h1 className="text-[12px] md:text-[70px] font-extralight text-black flex items-center">
                                                Makanan
                                                <img src={star} alt="Running Star" className="ml-3 md:ml-6 mr-3 md:mr-6 h-4 xl:h-10" />
                                            </h1>
                                        </div>
                                        <div className="h-full flex justify-between min-h-[25px] md:min-h-[100px]">
                                            <h1 className="text-[12px] md:text-[70px] font-extralight text-black flex items-center">
                                                Minuman
                                                <img src={star} alt="Running Star" className="ml-3 md:ml-6 mr-3 md:mr-6 h-4 xl:h-10" />
                                            </h1>
                                        </div>
                                        <div className="h-full flex justify-between min-h-[25px] md:min-h-[100px]">
                                            <h1 className="text-[12px] md:text-[70px] font-extralight text-black flex items-center">
                                                Hijab
                                                <img src={star} alt="Running Star" className="ml-3 md:ml-6 mr-3 md:mr-6 h-4 xl:h-10" />
                                            </h1>
                                        </div>
                                        <div className="h-full flex justify-between min-h-[25px] md:min-h-[100px]">
                                            <h1 className="text-[12px] md:text-[70px] font-extralight text-black flex items-center">
                                                Elektronik
                                                <img src={star} alt="Running Star" className="ml-3 md:ml-6 mr-3 md:mr-6 h-4 xl:h-10" />
                                            </h1>
                                        </div>
                                        <div className="h-full flex justify-between min-h-[25px] md:min-h-[100px]">
                                            <h1 className="text-[12px] md:text-[70px] font-extralight text-black flex items-center">
                                                Aksesoris
                                                <img src={star} alt="Running Star" className="ml-3 md:ml-6 mr-3 md:mr-6 h-4 xl:h-10" />
                                            </h1>
                                        </div>
                                        <div className="h-full flex justify-between min-h-[25px] md:min-h-[100px]">
                                            <h1 className="text-[12px] md:text-[70px] font-extralight text-black flex items-center">
                                                Perhiasan
                                                <img src={star} alt="Running Star" className="ml-3 md:ml-6 mr-3 md:mr-6 h-4 xl:h-10" />
                                            </h1>
                                        </div>
                                        <div className="h-full flex justify-between min-h-[25px] md:min-h-[100px]">
                                            <h1 className="text-[12px] md:text-[70px] font-extralight text-black flex items-center">
                                                Event
                                                <img src={star} alt="Running Star" className="ml-3 md:ml-6 mr-3 md:mr-6 h-4 xl:h-10" />
                                            </h1>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Packaging;
