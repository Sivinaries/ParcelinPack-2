import review1 from "../../assets/images/review/review1.png";
import review2 from "../../assets/images/review/review2.png";
import review3 from "../../assets/images/review/review3.png";
import review4 from "../../assets/images/review/review4.png";
import review5 from "../../assets/images/review/review5.png";
import { useRef } from "react";
import { useEffect } from "react";

export default function Review() {
  const scrollContainerRef = useRef(null);
  const scrollbarRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const middlePosition =
        scrollContainer.scrollWidth / 2 - scrollContainer.clientWidth / 2;
      scrollContainer.scrollTo({ left: middlePosition, behavior: "smooth" });
      updateScrollbarThumb();
    }
  }, []);

  const updateScrollbarThumb = () => {
    const container = scrollContainerRef.current;
    const scrollbar = scrollbarRef.current;
    if (!container || !scrollbar) return;

    const scrollPercentage =
      (container.scrollLeft / (container.scrollWidth - container.clientWidth)) *
      100;
    const thumbWidth = (container.clientWidth / container.scrollWidth) * 100;
    const thumbPosition = (scrollPercentage * (100 - thumbWidth)) / 100;

    scrollbar.style.setProperty("--thumb-width", `${thumbWidth}%`);
    scrollbar.style.setProperty("--thumb-position", `${thumbPosition}%`);
  };

  const scroll = (direction) => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const scrollAmount = 350;
      const newScrollPosition =
        direction === "left"
          ? scrollContainer.scrollLeft - scrollAmount
          : scrollContainer.scrollLeft + scrollAmount;

      scrollContainer.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    updateScrollbarThumb();
  };

  return (
    <div className="grid place-items-center h-full bg-[#FEF7EE] rounded-xl overflow-hidden">
      <div className="text-center space-y-3 md:space-y-6 my-10 md:my-36 lg:my-10">
        <h1 className="text-3xl">Apa Kata Mereka</h1>
        <p>
          Yuk, lihat apa kata mereka yang telah memilih Parcelinpack sebagai
          solusi packaging brand mereka!
        </p>
        <div className="flex justify-center">
          <video
            className="rounded-lg w-64 md:w-96 aspect-video"
            controls
            autoPlay
          >
            <source src="/videos/testimoni.mp4" type="video/mp4" />
            Browser Anda tidak mendukung tag video.
          </video>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-2 md:space-x-4 max-w-[90vw] md:max-w-[95vw] scrollbar-hide"
            onScroll={handleScroll}
          >
            <div className="w-[350px] h-[415px] flex-shrink-0">
              <img src={review1} alt="" className="rounded-lg h-full w-full" />
            </div>
            <div className="w-[350px] h-[415px] flex-shrink-0">
              <img src={review2} alt="" className="rounded-lg h-full w-full" />
            </div>
            <div className="w-[350px] h-[415px] flex-shrink-0">
              <img src={review3} alt="" className="rounded-lg h-full w-full" />
            </div>
            <div className="w-[350px] h-[415px] flex-shrink-0">
              <img src={review4} alt="" className="rounded-lg h-full w-full" />
            </div>
            <div className="w-[350px] h-[415px] flex-shrink-0">
              <img src={review5} alt="" className="rounded-lg h-full w-full" />
            </div>
          </div>

          <div
            ref={scrollbarRef}
            className="custom-scrollbar mt-4 mx-auto w-40 h-3 bg-gray-200 rounded-full relative"
          >
            <div
              className="custom-scrollbar-thumb absolute top-0 h-full bg-gray-400 rounded-full"
              style={{
                width: "var(--thumb-width, 20%)",
                left: "var(--thumb-position, 0%)",
              }}
            />
          </div>

          <button
            onClick={() => scroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white/90 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white/90 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
