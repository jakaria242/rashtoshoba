import { Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const quotes = [
  {
    id: 1,
    text: "জ্ঞান তখনই মূল্যবান, যখন তা মানুষকে স্বাধীনভাবে চিন্তা করতে শেখায়।",
  },
  {
    id: 2,
    text: "সত্যকে জানার জন্য প্রশ্ন করতে শেখো, অন্ধভাবে বিশ্বাস করতে নয়।",
  },
  {
    id: 3,
    text: "একজন লেখকের সবচেয়ে বড় দায়িত্ব হলো সমাজকে ভাবতে বাধ্য করা।",
  },
];

export default function QuotesSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-amber-700" />

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-700">
              উক্তি
            </p>

            <span className="h-px w-10 bg-amber-700" />
          </div>

          <h2 className="text-3xl font-bold text-stone-900 md:text-5xl">
            কিছু অমর কথা
          </h2>

          <p className="mt-6 text-base leading-8 text-stone-600 md:text-lg">
            আহমদ ছফার চিন্তা, সাহিত্য ও সমাজভাবনার সঙ্গে পরিচিত
            হওয়ার জন্য নির্বাচিত কিছু কথা।
          </p>

        </div>

        {/* Slider */}
        <div className="relative mt-14">

          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            grabCursor={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2.5,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            className="!overflow-visible"
          >

            {quotes.map((quote) => (
              <SwiperSlide key={quote.id} className="h-auto">

                <div className="group h-full rounded-3xl border border-stone-200 bg-[#F8F4EC] p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-8">

                  {/* Quote Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                    <Quote
                      size={25}
                      className="text-amber-700 transition duration-300 group-hover:rotate-12"
                    />
                  </div>

                  {/* Quote */}
                  <p className="mt-7 min-h-[145px] text-lg leading-9 text-stone-700">
                    “{quote.text}”
                  </p>

                  {/* Line */}
                  <div className="mt-6 h-[2px] w-16 bg-amber-700 transition-all duration-300 group-hover:w-24" />

                  {/* Author */}
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
                    আহমদ ছফা
                  </p>

                </div>

              </SwiperSlide>
            ))}

          </Swiper>

        </div>

        {/* View All */}
        <div className="mt-10 flex justify-center">

          <Link
            to="/quotes"
            className="group inline-flex items-center gap-2 rounded-full border border-stone-300 px-6 py-3 font-semibold text-stone-800 transition hover:border-amber-700 hover:text-amber-700"
          >
            সব উক্তি দেখুন

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

        </div>

      </div>
    </section>
  );
}