import {  useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { Video } from "../types/video.types";

const VideoReels = () => {
  const { videos ,loading } = useSelector((state: RootState) => state.video);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const skeletonArray = Array(4).fill(0);



  return (
    <section className="col-span-12 mt-16">
      <h2 className="text-2xl font-bold mb-6">🎬 Video Reels</h2>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skeletonArray.map((_, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-md overflow-hidden bg-white animate-pulse"
            >
              <div className="bg-gray-300 w-full h-[300px] md:h-[400px] lg:h-[500px]" />
              <div className="p-4 space-y-2">
                <div className="h-4 bg-gray-300 rounded w-3/4" />
                <div className="h-3 bg-gray-200 rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full">
          <Swiper
            className="!w-full"
            spaceBetween={16}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {videos.map((video) => (
              <SwiperSlide key={video._id} className="min-w-0">
                <div
                  className="cursor-pointer border border-gray-300 rounded-md overflow-hidden bg-white"
                  onClick={() => setSelectedVideo(video)}
                >
                  <div className="w-full bg-black h-[300px] md:h-[400px] lg:h-[500px]">
                    <img
                      src={video.thumbnailUrl}
                      alt={video.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-md font-semibold truncate">{video.title}</h3>
                    <p className="text-xs text-gray-600 mt-1 truncate">{video.subheading}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-2">
          <div
            className="relative w-full max-w-2xl bg-white rounded-lg overflow-hidden shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-2 right-3 text-white bg-red-500 w-8 h-8 rounded-full text-xl font-bold flex items-center justify-center z-50"
            >
              ×
            </button>
            <video
              src={selectedVideo.videoUrl}
              className="w-full h-auto"
              controls
              autoPlay
            />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-bold">{selectedVideo.title}</h3>
              <p className="text-sm text-gray-600">{selectedVideo.subheading}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoReels;
