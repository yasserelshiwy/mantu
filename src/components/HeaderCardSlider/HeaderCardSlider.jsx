import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "./dataCardSlider";

export default function HeaderCardSlider() {
  return (
    <div className=" px-4 my-8">
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        loop={true}
        keyboard={{ enabled: true }}
        className="  "
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className=" ">
            <div className="card w-full shadow-[inset_0_-80px_12px_-6px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[inset_0px_0px_0px_0px_transparent]  p-2 px-4 rounded-2xl  bg-gray-200">
              <div className="head flex items-center justify-between">
                <div class="relative inline-flex items-center font-bold  text-white bg-[#2f3542]  h-8  pl-3 pr-5 rounded-l-full ">
                  {item.percentage}
                  <span
                    class="absolute right-[-0.8px]   lg:right-[-1px] top-0 h-full w-4
           [clip-path:polygon(100%_0,0_50%,100%_100%)]
           bg-gray-200 "
                  ></span>
                </div>
                <p className="text-6xl font-black tracking-wider  text-[#313b50] opacity-[0.1]">
                  {item.percentage}
                </p>
              </div>
              <div className="body Quicksand tracking-wider space-y-1 text-[#313b50]   mb-2">
                <p className="text[17px] font-medium">{item.title}</p>
                <h2 className="text-2xl font-bold">{item.subtitle}</h2>
              </div>
              <div className=" space-y-4">
                <h3 className="text-[#313b50] text-[14px]">
                  items ({item.itemsCount})
                </h3>
                <div className="flex items-center justify-between  ">
                  <div>
                    <img
                      src={item.img1}
                      alt=""
                      className="w-17 border-5 border-white rounded-2xl"
                    />
                  </div>
                  <div>
                    <img
                      src={item.img2}
                      alt=""
                      className="w-17 border-5 border-white rounded-2xl"
                    />
                  </div>
                  <div>
                    <img
                      src={item.img3}
                      alt=""
                      className="w-17 border-5 border-white rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
