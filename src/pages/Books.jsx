import React from "react";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";

// Book Images
import RashtrashabhaPatramala1 from "../assets/books/RashtrashabhaPatramala1.jpg";
import RashtrashabhaPatramala2 from "../assets/books/RashtrashabhaPatramala2.jpg";
import RashtrashabhaPatramala3 from "../assets/books/RashtrashabhaPatramala3.jpg";
import RashtrashabhaPatramala4 from "../assets/books/RashtrashabhaPatramala4.jpg";
import RashtrashabhaPatramala5 from "../assets/books/RashtrashabhaPatramala5.jpg";
import FreudPorarBhumika from "../assets/books/FreudPorarBhumika.jpg";
import SattyaSaddamHossainoSerajuddaula from "../assets/books/SattyaSaddamHossainoSerajuddaula.jpg";
import BehatBiplob1971 from "../assets/books/BehatBiplob1971.jpg";
import AmiTumiShey from "../assets/books/AmiTumiShey.jpg";
import SilenceOncrimesOfpower from "../assets/books/SilenceOncrimesofpower.jpg";
import Artha1shongkkha1 from "../assets/books/Artha1shongkkha1.jpg";
import Artha2 from "../assets/books/Artha2.1.jpg";
import Artha3 from "../assets/books/Artha3.jpg";

const books = [
  {
    id: 1,
    title: "রাষ্ট্রসভা পত্রমালা ১",
    year: "—",
    category: "প্রবন্ধ",
    image: RashtrashabhaPatramala1,
    description:
      "রাষ্ট্র, সমাজ ও সমকালীন বিভিন্ন বিষয় নিয়ে আহমদ ছফার চিন্তাশীল ও সমালোচনামূলক লেখার সংকলন।",
  },
  {
    id: 2,
    title: "রাষ্ট্রসভা পত্রমালা ২",
    year: "—",
    category: "প্রবন্ধ",
    image: RashtrashabhaPatramala2,
    description:
      "রাষ্ট্র, সমাজ ও মানুষের জীবন নিয়ে আহমদ ছফার বিভিন্ন চিন্তা ও পর্যবেক্ষণের গুরুত্বপূর্ণ সংকলন।",
  },
  {
    id: 3,
    title: "রাষ্ট্রসভা পত্রমালা ৩",
    year: "—",
    category: "প্রবন্ধ",
    image: RashtrashabhaPatramala3,
    description:
      "সামাজিক, রাজনৈতিক ও সাংস্কৃতিক বিষয় নিয়ে আহমদ ছফার চিন্তাশীল রচনার সংকলন।",
  },
  {
    id: 4,
    title: "রাষ্ট্রসভা পত্রমালা ৪",
    year: "—",
    category: "প্রবন্ধ",
    image: RashtrashabhaPatramala4,
    description:
      "সমাজ, রাষ্ট্র ও মানুষের বিভিন্ন বিষয় নিয়ে বিশ্লেষণধর্মী লেখার একটি গুরুত্বপূর্ণ সংকলন।",
  },
  {
    id: 5,
    title: "রাষ্ট্রসভা পত্রমালা ৫",
    year: "—",
    category: "প্রবন্ধ",
    image: RashtrashabhaPatramala5,
    description:
      "আহমদ ছফার চিন্তা ও সমালোচনামূলক দৃষ্টিভঙ্গির বিভিন্ন রচনার সংকলন।",
  },
  {
    id: 6,
    title: "ফ্রয়েড পড়ার ভূমিকা",
    year: "—",
    category: "প্রবন্ধ",
    image: FreudPorarBhumika,
    description:
      "মনস্তত্ত্ব ও ফ্রয়েডের চিন্তাধারা বোঝার প্রেক্ষাপটে রচিত একটি গুরুত্বপূর্ণ গ্রন্থ।",
  },
  {
    id: 7,
    title: "সত্য, সাদ্দাম হোসাইন ও সেরাজউদ্দৌলা",
    year: "—",
    category: "প্রবন্ধ",
    image: SattyaSaddamHossainoSerajuddaula,
    description:
      "সমকালীন রাজনীতি, ইতিহাস ও ব্যক্তিত্বকে কেন্দ্র করে আহমদ ছফার বিশ্লেষণধর্মী রচনা।",
  },
  {
    id: 8,
    title: "বেহাত বিপ্লব ১৯৭১",
    year: "—",
    category: "প্রবন্ধ",
    image: BehatBiplob1971,
    description:
      "বাংলাদেশের মুক্তিযুদ্ধ ও রাজনৈতিক বাস্তবতার বিভিন্ন দিক নিয়ে আলোচিত একটি গুরুত্বপূর্ণ গ্রন্থ।",
  },
  {
    id: 9,
    title: "আমি তুমি সে",
    year: "—",
    category: "উপন্যাস",
    image: AmiTumiShey,
    description:
      "মানুষের সম্পর্ক, অনুভূতি ও জীবনকে কেন্দ্র করে রচিত একটি সাহিত্যকর্ম।",
  },
  {
    id: 10,
    title: "Silence on Crimes of Power",
    year: "—",
    category: "প্রবন্ধ",
    image: SilenceOncrimesOfpower,
    description:
      "ক্ষমতা, অন্যায় ও সামাজিক বাস্তবতা নিয়ে সমালোচনামূলক চিন্তার একটি গুরুত্বপূর্ণ কাজ।",
  },
  {
    id: 11,
    title: "অর্থ ১ সংখ্যা ১",
    year: "—",
    category: "প্রবন্ধ",
    image: Artha1shongkkha1,
    description:
      "অর্থনীতি, সমাজ ও সমকালীন বাস্তবতার সঙ্গে সম্পর্কিত রচনার সংকলন।",
  },
  {
    id: 12,
    title: "অর্থ ২ সংখ্যা ১",
    year: "—",
    category: "প্রবন্ধ",
    image: Artha2,
    description:
      "সমাজ ও অর্থনৈতিক বাস্তবতা নিয়ে চিন্তাশীল লেখার সংকলন।",
  },
  {
    id: 13,
    title: "অর্থ ৩",
    year: "—",
    category: "প্রবন্ধ",
    image: Artha3,
    description:
      "অর্থনীতি ও সমাজ সম্পর্কিত বিভিন্ন চিন্তা ও বিশ্লেষণের সংকলন।",
  },

  // Existing important works
  {
    id: 14,
    title: "গাভী বিত্তান্ত",
    year: "১৯৯৫",
    category: "উপন্যাস",
    image: null,
    description:
      "বাংলা সাহিত্যের অন্যতম আলোচিত উপন্যাস। বিশ্ববিদ্যালয়কেন্দ্রিক সমাজ, ক্ষমতা ও মানুষের মনস্তত্ত্বকে ব্যঙ্গাত্মকভাবে তুলে ধরা হয়েছে।",
  },
  {
    id: 15,
    title: "অর্ধেক নারী অর্ধেক ঈশ্বরী",
    year: "১৯৯৬",
    category: "উপন্যাস",
    image: null,
    description:
      "মানুষের সম্পর্ক, প্রেম, নারী-পুরুষের মানসিকতা এবং সামাজিক বাস্তবতাকে কেন্দ্র করে রচিত একটি গুরুত্বপূর্ণ সাহিত্যকর্ম।",
  },
  {
    id: 16,
    title: "বাঙালি মুসলমানের মন",
    year: "১৯৮১",
    category: "প্রবন্ধ",
    image: null,
    description:
      "বাঙালি মুসলমান সমাজের মানসিকতা, ইতিহাস, সংস্কৃতি ও আত্মপরিচয় নিয়ে আহমদ ছফার অন্যতম গুরুত্বপূর্ণ প্রবন্ধগ্রন্থ।",
  },
  {
    id: 17,
    title: "বুদ্ধিবৃত্তির নতুন বিন্যাস",
    year: "১৯৮৬",
    category: "প্রবন্ধ",
    image: null,
    description:
      "বাংলাদেশের বুদ্ধিজীবী সমাজ, চিন্তাচর্চা ও সাংস্কৃতিক বাস্তবতা নিয়ে একটি গুরুত্বপূর্ণ সমালোচনামূলক গ্রন্থ।",
  },
  {
    id: 18,
    title: "সূর্য তুমি সাথী",
    year: "১৯৬৭",
    category: "উপন্যাস",
    image: null,
    description:
      "আহমদ ছফার সাহিত্যিক জীবনের উল্লেখযোগ্য একটি উপন্যাস, যেখানে সমাজ ও মানুষের জীবনকে গভীরভাবে পর্যবেক্ষণ করা হয়েছে।",
  },
  {
    id: 19,
    title: "ওঙ্কার",
    year: "১৯৭৫",
    category: "উপন্যাস",
    image: null,
    description:
      "স্বাধীনতা-পরবর্তী বাংলাদেশের সামাজিক ও রাজনৈতিক বাস্তবতার প্রতিফলন পাওয়া যায় এই উপন্যাসে।",
  },
  {
    id: 20,
    title: "পুষ্প বৃক্ষ এবং বিহঙ্গ পুরাণ",
    year: "১৯৯৬",
    category: "উপন্যাস",
    image: null,
    description:
      "প্রকৃতি, মানুষ এবং জীবনের নানা দিককে সাহিত্যিক ও দার্শনিক দৃষ্টিভঙ্গিতে উপস্থাপন করা হয়েছে।",
  },
];

const categories = ["সব", "উপন্যাস", "প্রবন্ধ"];

const Books = () => {
  const [activeCategory, setActiveCategory] = React.useState("সব");

  const filteredBooks =
    activeCategory === "সব"
      ? books
      : books.filter((book) => book.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#fafafa]">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-3xl">

            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-gray-200">
              <BookOpen size={16} />
              সাহিত্যকর্ম
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              আহমদ ছফার বই
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              উপন্যাস, প্রবন্ধ ও অন্যান্য সাহিত্যকর্মের মাধ্যমে আহমদ ছফা
              বাংলা সাহিত্য ও চিন্তাজগতে একটি স্বতন্ত্র অবস্থান তৈরি করেছেন।
            </p>

          </div>
        </div>
      </section>

      {/* Books Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">

        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Literary Works
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              তাঁর উল্লেখযোগ্য বই
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  activeCategory === category
                    ? "bg-gray-900 text-white shadow-sm"
                    : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

        </div>

        {/* Books Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {filteredBooks.map((book) => (
            <article
              key={book.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl"
            >

              {/* Book Cover */}
              <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black">

                {book.image ? (
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white blur-3xl" />
                    </div>

                    <div className="relative flex h-full w-full flex-col items-center justify-center rounded-lg border border-white/10 px-5 text-center shadow-2xl">

                      <BookOpen
                        size={34}
                        strokeWidth={1.5}
                        className="mb-5 text-gray-300"
                      />

                      <h3 className="text-xl font-bold leading-8 text-white">
                        {book.title}
                      </h3>

                      <p className="mt-3 text-xs uppercase tracking-[0.2em] text-gray-400">
                        Ahmed Sofa
                      </p>

                    </div>
                  </>
                )}

              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">

                <div className="flex items-center justify-between gap-3">

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                    {book.category}
                  </span>

                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Calendar size={14} />
                    {book.year}
                  </span>

                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {book.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                  {book.description}
                </p>

                <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition group-hover:gap-3">
                  বিস্তারিত দেখুন
                  <ArrowRight size={17} />
                </button>

              </div>

            </article>
          ))}

        </div>

        {/* Empty State */}
        {filteredBooks.length === 0 && (
          <div className="py-20 text-center">

            <BookOpen
              size={40}
              className="mx-auto text-gray-400"
            />

            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              কোনো বই পাওয়া যায়নি
            </h3>

          </div>
        )}

      </section>

      {/* Bottom Quote */}
      <section className="border-t border-gray-200 bg-white">

        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">

          <BookOpen
            className="mx-auto text-gray-400"
            size={32}
          />

          <p className="mt-6 text-2xl font-medium leading-9 text-gray-800 sm:text-3xl">
            “সাহিত্য মানুষের চিন্তা ও সমাজকে নতুনভাবে দেখার একটি পথ।”
          </p>

          <p className="mt-4 text-sm font-semibold text-gray-500">
            — আহমদ ছফা
          </p>

        </div>

      </section>

    </main>
  );
};

export default Books;