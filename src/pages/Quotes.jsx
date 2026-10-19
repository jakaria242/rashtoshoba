import React, {useState} from "react";
import {Quote, Copy, Check, BookOpen} from "lucide-react";

const quotes = [
  {
    id: 1,
    quote:
      "বাংলাদেশের আসল বস্তু বলে যদি কিছু থাকে তা হল এর আমলাতান্ত্রিক কাঠামো। স্থবির, অনড়, লোভী, হৃদয়হীন এবং বিদেশী শক্তির ক্রীড়নক হওয়ার জন্য সর্বক্ষণ প্রস্তুত।",
    book: "— আহমদ ছফা",
  },
  {
    id: 2,
    quote:
      "বড় বড় নামকরা স্কুলে বাচ্চারা বিদ্যার চাইতে অহংকারটা বেশি শিক্ষা করে।",
    book: "— আহমদ ছফা",
  },
  {
    id: 3,
    quote:
      "কাউকে জ্ঞান বিতরণের আগে জেনে নিও যে তার মধ্যে সেই জ্ঞানের পিপাসা আছে কি-না। অন্যথায় এ ধরনের জ্ঞান বিতরণ করা হবে এক ধরনের জবরদস্তি।",
    book: "— আহমদ ছফা",
  },
  {
    id: 4,
    quote:
      "শিল্প-সাহিত্যে কেউ বাইরে থেকে ঘরে ফেরার সাধনা করে, কেউ ঘর থেকে বাইরে যাওয়ার, যার যতদূর যাত্রা হয়, ততদূর সফলতা।",
    book: "বাঙালি মুসলমানের মন",
  },
  {
    id: 5,
    quote:
      "জীবনে আমরা যাদের সবচাইতে ভালবাসি, যারা আমাদের চলার পথ সুগম করে দেয়, সুদিনে আমরা তাদেরকেই ভুলে থাকি।",
    book: "মরণ বিলাস",
  },
  {
    id: 6,
    quote:
      "তুমি আমার কাছে অর্ধেক আনন্দ, অর্ধেক বেদনা। অর্ধেক কষ্ট, অর্ধেক সুখ। অর্ধেক নারী, অর্ধেক ঈশ্বরী।",
    book: "অর্ধেক নারী অর্ধেক ঈশ্বরী",
  },
  {
    id: 7,
    quote:
      "অতীত এসে আগামীর পথ রোধ করে দাঁড়ায়।",
    book: "অর্ধেক নারী অর্ধেক ঈশ্বরী",
  },
  {
    id: 8,
    quote:
      "জীবন শিল্প নয়, কবিতা নয়। জীবনে যা ঘটে শিল্প এবং কবিতায় তা ঘটে না। জীবন জীবনই।",
    book: "অর্ধেক নারী অর্ধেক ঈশ্বরী",
  },
  {
    id: 9,
    quote:
      "মিছিল ভয়ংকর, আবার মিছিল সুন্দর। মিছিলে ধ্বনিত হয় ভাঙনের ধ্বংসনাদ, মিছিলে জাগে নবসৃষ্টির মহীয়ান সঙ্গীত।",
    book: "ওঙ্কার",
  },
  {
    id: 10,
    quote:
      "বইয়ের দোকান পরখ করলেই বেবাক সমাজটা কোনদিকে যাইতাছে, হেইডা টের পাওন যায়।",
    book: "যদ্যপি আমার গুরু",
  },
  {
    id: 11,
    quote:
      "সৃষ্টিশীল মানুষেরা সাধারণত বিপজ্জনক ধরনের হয়ে থাকেন।",
    book: "যদ্যপি আমার গুরু",
  },
  {
    id: 12,
    quote:
      "মানুষ খুব অসহায়। মানুষ সর্বশ্রেষ্ঠ সৃষ্টি হলেও কি হবে, মানুষ খুব মূল্যহীন।",
    book: "— আহমদ ছফা",
  },
];

const Quotes = () => {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = async (quote, id) => {
    try {
      await navigator.clipboard.writeText(`"${quote}" — আহমদ ছফা`);

      setCopiedId(id);

      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

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
              <Quote size={16} />
              Quotes
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              আহমদ ছফার উক্তি
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              সাহিত্য, জীবন, সমাজ ও মানুষ সম্পর্কে আহমদ ছফার
              চিন্তা ও কথামালার নির্বাচিত সংগ্রহ।
            </p>
          </div>
        </div>
      </section>

      {/* ================= QUOTES ================= */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        {/* Heading */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-500">
            Selected Quotes
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            নির্বাচিত উক্তি
          </h2>
        </div>

        {/* Quote Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {quotes.map((item, index) => (
            <article
              key={item.id}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl sm:p-8 ${
                index === 0
                  ? "md:col-span-2 bg-gray-900 text-white"
                  : ""
              }`}
            >
              {/* Quote Icon */}
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-full ${
                  index === 0
                    ? "bg-white/10 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                <Quote size={21} />
              </div>

              {/* Quote */}
              <blockquote
                className={`mt-6 text-lg font-medium leading-9 sm:text-xl sm:leading-10 ${
                  index === 0
                    ? "text-white md:text-2xl md:leading-10"
                    : "text-gray-800"
                }`}
              >
                “{item.quote}”
              </blockquote>

              {/* Source */}
              <div className="mt-7 flex items-center justify-between gap-4">
                <div
                  className={`flex items-center gap-2 text-sm ${
                    index === 0
                      ? "text-gray-400"
                      : "text-gray-500"
                  }`}
                >
                  <BookOpen size={15} />

                  <span>{item.book}</span>
                </div>

                {/* Copy */}
                <button
                  type="button"
                  onClick={() =>
                    handleCopy(item.quote, item.id)
                  }
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
                    index === 0
                      ? "bg-white/10 text-white hover:bg-white/20"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                  title="Copy quote"
                >
                  {copiedId === item.id ? (
                    <Check size={16} />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>

              {/* Number */}
              <span
                className={`absolute right-6 top-6 text-5xl font-bold ${
                  index === 0
                    ? "text-white/5"
                    : "text-gray-100"
                }`}
              >
                {String(item.id).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* ================= FOOTER QUOTE ================= */}
      <section className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <Quote
            size={34}
            className="mx-auto text-gray-300"
          />

          <p className="mt-6 text-2xl font-medium leading-10 text-gray-800 sm:text-3xl sm:leading-[1.7]">
            “শিল্প-সাহিত্যে কেউ বাইরে থেকে ঘরে ফেরার সাধনা করে,
            কেউ ঘর থেকে বাইরে যাওয়ার।”
          </p>

          <p className="mt-5 text-sm font-semibold text-gray-500">
            — আহমদ ছফা
          </p>
        </div>
      </section>
    </main>
  );
};

export default Quotes;