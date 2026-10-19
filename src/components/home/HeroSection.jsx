// import { ArrowDown, BookOpen, PlayCircle } from "lucide-react";
// // import MotionWrapper from "../common/MotionWrapper";
// import ahmed from "../../assets/AhmedS.jpg";



// export default function HeroSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#F8F4EC]">
//       {/* Background */}
//       <div className="absolute inset-0">
//         <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-amber-200/30 blur-[140px]" />
//         <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-stone-300/30 blur-[180px]" />
//       </div>

//       <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-16 px-6 py-16 lg:flex-row lg:px-10">

//         {/* Left */}
//         <div className="w-full text-center lg:w-1/2 lg:text-left">

//           <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-amber-700">
//             Literary Archive
//           </p>



//           <h1 className="text-4xl font-bold leading-tight text-stone-900 sm:text-5xl md:text-6xl xl:text-7xl">
//             Ahmed
//             <br />
//             Sofa
//           </h1>
   

//           <div className="mt-8 border-l-4 border-amber-700 pl-5">
//             <p className="text-lg italic leading-8 text-stone-700 md:text-xl">
//               “Knowledge becomes meaningful only when it inspires people to
//               think independently.”
//             </p>
//           </div>

//           <p className="mt-8 max-w-xl text-base leading-8 text-stone-600 md:text-lg">
//             Explore the life, philosophy, writings, interviews, and timeless
//             legacy of one of Bangladesh's greatest intellectuals.
//           </p>

//           <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

//             <button className="rounded-full bg-stone-900 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-black">
//               <span className="flex items-center justify-center gap-2">
//                 <BookOpen size={20} />
//                 Explore Books
//               </span>
//             </button>

//             <button className="rounded-full border border-stone-300 bg-white px-8 py-4 font-semibold text-stone-900 transition hover:border-amber-700 hover:text-amber-700">
//               <span className="flex items-center justify-center gap-2">
//                 <PlayCircle size={20} />
//                 Watch Documentary
//               </span>
//             </button>

//           </div>
//         </div>

//         {/* Right */}
//         <div className="relative flex w-full justify-center lg:w-1/2">

//           <div className="absolute h-80 w-80 rounded-full bg-amber-300/20 blur-[120px]" />

//           <img
//             src={ahmed}
//             alt="Ahmed Sofa"
//             className="relative z-10 w-[260px] rounded-3xl object-cover shadow-2xl sm:w-[320px] md:w-[420px] xl:w-[480px]"
//           />

//         </div>
//       </div>

//       {/* Scroll Indicator */}

//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2">

//         <div className="flex flex-col items-center">

//           <span className="mb-2 text-xs uppercase tracking-[0.3em] text-stone-500">
//             Scroll
//           </span>

//           <ArrowDown className="animate-bounce text-stone-700" />

//         </div>

//       </div>
//     </section>
//   );
// }

import { ArrowDown, BookOpen, PlayCircle } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import MotionWrapper from "../common/MotionWrapper";

import "swiper/css";
import "swiper/css/effect-fade";

import ahmed from "../../assets/AhmedS.jpg";

// Background Images
import bg1 from "../../assets/a.jpg";
import bg2 from "../../assets/b.jpg";
import bg3 from "../../assets/c.jpg";

const backgrounds = [bg1, bg2, bg3];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Slider */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="absolute inset-0 z-0 h-full w-full"
      >
        {backgrounds.map((bg, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-screen w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${bg})`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#F8F4EC]/85" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Decorative Blur */}
      <div className="absolute inset-0 z-10">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-amber-200/30 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-stone-300/30 blur-[180px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-16 px-6 py-24 lg:flex-row lg:px-10">

        {/* Left */}
        <div className="w-full text-center lg:w-1/2 lg:text-left">

          <MotionWrapper>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-amber-700">
              সাহিত্য ও চিন্তার আর্কাইভ
            </p>
          </MotionWrapper>

          <MotionWrapper>
            <h1 className="text-4xl font-bold leading-tight text-stone-900 sm:text-5xl md:text-6xl xl:text-7xl">
              আহমদ
              <br />
              ছফা
            </h1>
          </MotionWrapper>

          <MotionWrapper>
            <div className="mt-8 border-l-4 border-amber-700 pl-5">
              <p className="text-lg leading-8 text-stone-700 md:text-xl">
                “বুদ্ধিবৃত্তির স্বাধীনতা, সত্য অনুসন্ধান এবং
                সমাজকে প্রশ্ন করার সাহস—আহমদ ছফার চিন্তা ও
                লেখালেখির অন্যতম বৈশিষ্ট্য।”
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper>
            <p className="mt-8 max-w-xl text-base leading-8 text-stone-600 md:text-lg">
              আহমদ ছফা ছিলেন বাংলাদেশের অন্যতম গুরুত্বপূর্ণ
              সাহিত্যিক, প্রাবন্ধিক, ঔপন্যাসিক ও চিন্তাবিদ।
              তাঁর সাহিত্য ও প্রবন্ধে সমাজ, সংস্কৃতি, শিক্ষা,
              রাজনীতি, ইতিহাস এবং মানুষের চিন্তার স্বাধীনতা
              নিয়ে গভীর আলোচনা উঠে এসেছে।
            </p>
          </MotionWrapper>

          <MotionWrapper>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

              {/* Books Button */}
              <button
                onClick={() => {
                  window.location.href = "/books";
                }}
                className="rounded-full bg-stone-900 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-black"
              >
                <span className="flex items-center justify-center gap-2">
                  <BookOpen size={20} />
                  বইসমূহ দেখুন
                </span>
              </button>

              {/* Documentary Button */}
              <button
                onClick={() => {
                  window.location.href = "/videos";
                }}
                className="rounded-full border border-stone-300 bg-white px-8 py-4 font-semibold text-stone-900 transition hover:border-amber-700 hover:text-amber-700"
              >
                <span className="flex items-center justify-center gap-2">
                  <PlayCircle size={20} />
                  তথ্যচিত্র দেখুন
                </span>
              </button>

            </div>

          </MotionWrapper>

        </div>

        {/* Right */}
        <div className="relative flex w-full justify-center lg:w-1/2">

          <div className="absolute h-80 w-80 rounded-full bg-amber-300/20 blur-[120px]" />

          <img
            src={ahmed}
            alt="আহমদ ছফা"
            className="relative z-10 w-[260px] rounded-3xl object-cover shadow-2xl sm:w-[320px] md:w-[420px] xl:w-[480px]"
          />

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">

        <div className="flex flex-col items-center">

          <span className="mb-2 text-xs uppercase tracking-[0.3em] text-stone-500">
            স্ক্রল করুন
          </span>

          <ArrowDown className="animate-bounce text-stone-700" />

        </div>

      </div>

    </section>
  );
}