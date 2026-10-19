import { Play, ArrowRight, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";

const videos = [
  {
    id: 1,
    title: "আহমদ ছফা: জীবন ও চিন্তার গল্প",
    duration: "18:24",
    image: "/videos/video-1.jpg",
  },
  {
    id: 2,
    title: "আহমদ ছফার বিরল সাক্ষাৎকার",
    duration: "12:08",
    image: "/videos/video-2.jpg",
  },
  {
    id: 3,
    title: "আহমদ ছফা ও বাংলা সাহিত্য",
    duration: "09:42",
    image: "/videos/video-3.jpg",
  },
];

export default function FeaturedVideos() {
  return (
    <section className="relative overflow-hidden bg-[#F8F4EC] py-20 lg:py-28">

      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-amber-300/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <div className="max-w-2xl">

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-amber-400" />

              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
                ভিডিও আর্কাইভ
              </p>
            </div>

            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl">
              আহমদ ছফাকে
              <br className="hidden sm:block" />
              নতুনভাবে জানুন
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-400">
              সাক্ষাৎকার, তথ্যচিত্র ও সাহিত্যভিত্তিক আলোচনার মাধ্যমে
              আহমদ ছফার জীবন, চিন্তা ও সাহিত্যকর্ম সম্পর্কে জানুন।
            </p>

          </div>

          <Link
            to="/videos"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-semibold text-amber-400 backdrop-blur-sm transition hover:border-amber-400/40 hover:bg-amber-400 hover:text-black"
          >
            সব ভিডিও দেখুন
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

        </div>

        {/* Videos */}
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">

          {videos.map((video) => (
            <Link
              to="/videos"
              key={video.id}
              className="group block overflow-hidden rounded-3xl border border-white/10 bg-[#1A1A1A] shadow-2xl transition duration-500 hover:-translate-y-2 hover:border-amber-400/30"
            >

              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">

                <img
                  src={video.image}
                  alt={video.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/10" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-xl transition duration-500 group-hover:scale-110 group-hover:bg-amber-400">

                    <Play
                      size={25}
                      className="ml-1 fill-black text-black"
                    />

                  </div>

                </div>

                {/* Duration */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-black/75 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                  <Clock3 size={13} />
                  {video.duration}
                </div>

                {/* Video Label */}
                <div className="absolute bottom-4 left-4 rounded-full bg-amber-400 px-3 py-1.5 text-xs font-semibold text-black">
                  ভিডিও
                </div>

              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-semibold leading-7 text-white transition group-hover:text-amber-400">
                  {video.title}
                </h3>

                <div className="mt-5 flex items-center justify-between">

                  <span className="text-sm text-gray-500">
                    আহমদ ছফা আর্কাইভ
                  </span>

                  <span className="flex items-center gap-2 text-sm font-semibold text-amber-400">
                    দেখুন
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>

                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}