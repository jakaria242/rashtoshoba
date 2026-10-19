import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// Images
import RashtrashabhaPatramala1 from "../../assets/books/RashtrashabhaPatramala1.jpg";
import RashtrashabhaPatramala2 from "../../assets/books/RashtrashabhaPatramala2.jpg";
import RashtrashabhaPatramala3 from "../../assets/books/RashtrashabhaPatramala3.jpg";
import RashtrashabhaPatramala4 from "../../assets/books/RashtrashabhaPatramala4.jpg";
import RashtrashabhaPatramala5 from "../../assets/books/RashtrashabhaPatramala5.jpg";
import FreudPorarBhumika from "../../assets/books/FreudPorarBhumika.jpg";
import SattyaSaddamHossainoSerajuddaula from "../../assets/books/SattyaSaddamHossainoSerajuddaula.jpg";
import BehatBiplob1971 from "../../assets/books/BehatBiplob1971.jpg";
import AmiTumiShey from "../../assets/books/AmiTumiShey.jpg";
import SilenceOncrimesOfpower from "../../assets/books/SilenceOncrimesOfpower.jpg";
import Artha1shongkkha1 from "../../assets/books/Artha1shongkkha1.jpg";
import Artha2 from "../../assets/books/Artha2.1.jpg";
import Artha3 from "../../assets/books/Artha3.jpg";

const books = [
  {
    id: 1,
    title: "রাষ্ট্রসভা পত্রমালা ১",
    slug: "rashtrashabha-patramala-1",
    image: RashtrashabhaPatramala1,
  },
  {
    id: 2,
    title: "রাষ্ট্রসভা পত্রমালা ২",
    slug: "rashtrashabha-patramala-2",
    image: RashtrashabhaPatramala2,
  },
  {
    id: 3,
    title: "রাষ্ট্রসভা পত্রমালা ৩",
    slug: "rashtrashabha-patramala-3",
    image: RashtrashabhaPatramala3,
  },
  {
    id: 4,
    title: "রাষ্ট্রসভা পত্রমালা ৪",
    slug: "rashtrashabha-patramala-4",
    image: RashtrashabhaPatramala4,
  },
  {
    id: 5,
    title: "রাষ্ট্রসভা পত্রমালা ৫",
    slug: "rashtrashabha-patramala-5",
    image: RashtrashabhaPatramala5,
  },
  {
    id: 6,
    title: "ফ্রয়েড পড়ার ভূমিকা",
    slug: "freud-porar-bhumika",
    image: FreudPorarBhumika,
  },
  {
    id: 7,
    title: "সত্য, সাদ্দাম হোসাইন ও সেরাজউদ্দৌলা",
    slug: "sattya-saddam-hossain-o-serajuddaula",
    image: SattyaSaddamHossainoSerajuddaula,
  },
  {
    id: 8,
    title: "বেহাত বিপ্লব ১৯৭১",
    slug: "behat-biplob-1971",
    image: BehatBiplob1971,
  },
  {
    id: 9,
    title: "আমি তুমি সে",
    slug: "ami-tumi-shey",
    image: AmiTumiShey,
  },
  {
    id: 10,
    title: "Silence on Crimes of Power",
    slug: "silence-on-crimes-of-power",
    image: SilenceOncrimesOfpower,
  },
  {
    id: 11,
    title: "অর্থ ১ সংখ্যা ১",
    slug: "artha-1-shongkkha-1",
    image: Artha1shongkkha1,
  },
  {
    id: 12,
    title: "অর্থ ২ সংখ্যা ১",
    slug: "artha-2-shongkkha-1",
    image: Artha2,
  },
  {
    id: 13,
    title: "অর্থ ৩",
    slug: "artha-3",
    image: Artha3,
  },
];

export default function FeaturedBooks() {
  return (
    <section className="bg-[#F8F4EC] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Heading */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
              সংগ্রহ
            </p>

            <h2 className="text-3xl font-bold text-stone-900 md:text-4xl">
              নির্বাচিত গ্রন্থ
            </h2>
          </div>

          <Link
            to="/books"
            className="inline-flex items-center gap-2 font-semibold text-amber-700 transition-all hover:gap-3"
          >
            সব বই দেখুন
            <ArrowRight size={18} />
          </Link>

        </div>

        {/* Slider */}
        <div className="mt-10">

          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            grabCursor={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 22,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          >

            {books.map((book) => (
              <SwiperSlide key={book.id}>

                <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-500 hover:-translate-y-2 hover:shadow-xl">

                  {/* Image */}
                  <Link to={`/books/${book.slug}`}>
                    <div className="overflow-hidden">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-5">

                    <h3 className="min-h-[56px] text-lg font-bold leading-7 text-stone-900">
                      {book.title}
                    </h3>

                    <Link
                    to="#"
                      // to={`/books/${book.slug}`}
                      className="mt-4 inline-flex rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium transition hover:border-amber-700 hover:text-amber-700"
                    >
                      বিস্তারিত পড়ুন
                    </Link>

                  </div>

                </div>

              </SwiperSlide>
            ))}

          </Swiper>

        </div>

      </div>
    </section>
  );
}