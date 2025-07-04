import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import imag1 from "../../assets/image/1.jpg";
import imag2 from "../../assets/image/2.jpg";
import imag3 from "../../assets/image/3.jpg";
import imag4 from "../../assets/image/4.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeaderSlider() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className=" my-8  h-[75vh] relative md:rounded-4xl overflow-hidden"
      >
        <SwiperSlide>
          <div className=" relative h-full  w-full  text-white flex items-center justify-between  ">
            <div className="absolute bg-[#00000052] md:bg-[#0000002c] w-full h-full z-20"></div>
            <img src={imag1} alt="" className="w-[100%] h-full object-cover" />
            <div className="absolute Quicksand  left-0 z-50  top-1/2 -translate-y-1/2 pl-8 sm:pl-16 space-y-5 rounded-2xl max-w-md">
              <div className="bg-yellow-400 text-black px-3 py-1 rounded-full font-bold w-fit mb-4">
                50% Off
              </div>
              <h2 className="text-5xl font-bold mb-4">
                Fashion sale for woman’s
              </h2>
              <p className="text-gray-300 text-lg mb-4">
                Wear the change. Fashion that feels good.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 rounded-2xl text-white px-6 py-2 cursor-pointer transition-all duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative h-full  w-full  text-white flex items-center justify-between  ">
            <div className="absolute bg-[#00000052] md:bg-[#0000002c] w-full h-full z-20"></div>

            <img src={imag2} alt="" className="w-[100%] h-full object-cover" />
            <div className="absolute Quicksand left-0 z-50  top-1/2 -translate-y-1/2 pl-8 sm:pl-16 space-y-5 rounded-2xl max-w-md">
              <div className="bg-yellow-400 text-black px-3 py-1 rounded-full font-bold w-fit mb-4">
                35% Off
              </div>
              <h2 className="text-5xl font-bold mb-4">
                Fashion sale for Men’s
              </h2>
              <p className="text-gray-300 text-lg mb-4">
                Wear the change. Fashion that feels good.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 rounded-2xl text-white px-6 py-2 cursor-pointer transition-all duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative h-full  w-full  text-white flex items-center justify-between  ">
            <div className="absolute bg-[#00000052] md:bg-[#0000002c] w-full h-full z-20"></div>

            <img src={imag3} alt="" className="w-[100%] h-full object-cover" />
            <div className="absolute Quicksand left-0 z-50  top-1/2 -translate-y-1/2 pl-8 sm:pl-16 space-y-5 rounded-2xl max-w-md">
              <div className="bg-yellow-400 text-black px-3 py-1 rounded-full font-bold w-fit mb-4">
                40% Off
              </div>
              <h2 className="text-5xl font-bold mb-4">
                Fashion sale for children’s
              </h2>
              <p className="text-gray-300 text-lg mb-4">
                Wear the change. Fashion that feels good.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 rounded-2xl text-white px-6 py-2 cursor-pointer transition-all duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative h-full  w-full  text-white flex items-center justify-between  ">
            <div className="absolute bg-[#00000052] md:bg-[#0000002c] w-full h-full z-20"></div>

            <img src={imag4} alt="" className="w-[100%] h-full object-cover" />
            <div className="absolute Quicksand left-0 z-50  top-1/2 -translate-y-1/2 pl-8 sm:pl-16 space-y-5 rounded-2xl max-w-md">
              <div className="bg-yellow-400 text-black px-3 py-1 rounded-full font-bold w-fit mb-4">
                50% Off
              </div>
              <h2 className="text-5xl font-bold mb-4">
                Fashion sale for woman’s
              </h2>
              <p className="text-gray-300 text-lg mb-4">
                Wear the change. Fashion that feels good.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 rounded-2xl text-white px-6 py-2 cursor-pointer transition-all duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
