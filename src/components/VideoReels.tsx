// components/VideoReels.tsx

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const VideoReels = () => (
<section className="col-span-12 mt-16">
  <h2 className="text-2xl font-bold mb-6">🎬 Video Reels</h2>
  <div className="w-full">
    <Swiper
      className="!w-full"
      spaceBetween={16}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
    >
      {[...Array(6)].map((_, index) => (
        <SwiperSlide key={index} className="min-w-0">
          <div className="border border-gray-300 rounded-md overflow-hidden bg-white">
            <div className="w-full bg-black h-[300px] md:h-[400px] lg:h-[500px]">
              <video
                src="https://cdn.videvo.net/videvo_files/video/free/2016-11/large_watermarked/161103_C_183-preview.mp4"
                className="h-full w-full object-cover"
                controls
                muted
              />
            </div>
            <div className="p-4">
              <h3 className="text-md font-semibold">“India 2047” Vision Speech</h3>
              <p className="text-xs text-gray-600 uppercase mt-1">Category: Politics</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

);

export default VideoReels;
