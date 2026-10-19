import React, {useState} from "react";
import {Play, X, Video} from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Ahmed Sofa — Interview",
    thumbnail: "/images/videos/ahmed-sofa-1.jpg",
    video: "/videos/ahmed-sofa-1.mp4",
    duration: "12:45",
  },
  {
    id: 2,
    title: "Ahmed Sofa — Literary Discussion",
    thumbnail: "/images/videos/ahmed-sofa-2.jpg",
    video: "/videos/ahmed-sofa-2.mp4",
    duration: "18:20",
  },
  {
    id: 3,
    title: "Ahmed Sofa — স্মরণ ও আলোচনা",
    thumbnail: "/images/videos/ahmed-sofa-3.jpg",
    video: "/videos/ahmed-sofa-3.mp4",
    duration: "09:35",
  },
  {
    id: 4,
    title: "Ahmed Sofa — জীবন ও সাহিত্য",
    thumbnail: "/images/videos/ahmed-sofa-4.jpg",
    video: "/videos/ahmed-sofa-4.mp4",
    duration: "21:10",
  },
  {
    id: 5,
    title: "Ahmed Sofa — Documentary",
    thumbnail: "/images/videos/ahmed-sofa-5.jpg",
    video: "/videos/ahmed-sofa-5.mp4",
    duration: "26:40",
  },
  {
    id: 6,
    title: "Ahmed Sofa — বিশেষ আলোচনা",
    thumbnail: "/images/videos/ahmed-sofa-6.jpg",
    video: "/videos/ahmed-sofa-6.mp4",
    duration: "14:25",
  },
];

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0">
          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-gray-200">
              <Video size={16} />
              Video Gallery
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              ভিডিও
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Ahmed Sofa-এর জীবন, সাহিত্য, চিন্তা ও বিভিন্ন সময়ের
              গুরুত্বপূর্ণ ভিডিও সংগ্রহ।
            </p>
          </div>
        </div>
      </section>

      {/* ================= VIDEOS ================= */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        {/* Heading */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-500">
            Video Collection
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Ahmed Sofa-এর ভিডিও
          </h2>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl"
            >
              {/* Thumbnail */}
              <button
                type="button"
                onClick={() => setSelectedVideo(item)}
                className="relative block aspect-video w-full overflow-hidden bg-gray-900"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/20 transition duration-300 group-hover:bg-black/40" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-gray-900 shadow-xl transition duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                    <Play
                      size={24}
                      fill="currentColor"
                      className="ml-1"
                    />
                  </span>
                </div>

                {/* Duration */}
                <span className="absolute bottom-3 right-3 rounded-md bg-black/80 px-2 py-1 text-xs font-medium text-white">
                  {item.duration}
                </span>
              </button>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold leading-7 text-gray-900 transition group-hover:text-gray-600">
                  {item.title}
                </h3>

                <button
                  type="button"
                  onClick={() => setSelectedVideo(item)}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-900"
                >
                  <Play size={15} fill="currentColor" />
                  ভিডিও দেখুন
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= VIDEO MODAL ================= */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedVideo(null)}
        >
          {/* Close */}
          <button
            type="button"
            onClick={() => setSelectedVideo(null)}
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6 sm:top-6"
          >
            <X size={24} />
          </button>

          {/* Video Container */}
          <div
            className="w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden rounded-xl bg-black shadow-2xl">
              <video
                key={selectedVideo.id}
                controls
                autoPlay
                playsInline
                poster={selectedVideo.thumbnail}
                className="aspect-video w-full"
              >
                <source
                  src={selectedVideo.video}
                  type="video/mp4"
                />

                Your browser does not support the video tag.
              </video>
            </div>

            <h3 className="mt-4 text-lg font-semibold text-white sm:text-xl">
              {selectedVideo.title}
            </h3>
          </div>
        </div>
      )}
    </main>
  );
};

export default Videos;