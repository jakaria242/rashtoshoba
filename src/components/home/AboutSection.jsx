import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import sofa from "../../assets/sofa.jpg";

const stats = [
  {
    number: "উপন্যাস",
    title: "উল্লেখযোগ্য সাহিত্যকর্ম",
  },
  {
    number: "প্রবন্ধ",
    title: "চিন্তাশীল ও বিশ্লেষণধর্মী রচনা",
  },
  {
    number: "ঐতিহ্য",
    title: "বাংলা সাহিত্য ও চিন্তাজগতে স্থায়ী প্রভাব",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Image */}

          <div className="relative mx-auto w-full max-w-md">

            <div className="absolute -left-5 -top-5 h-full w-full rounded-3xl border-2 border-amber-300" />

            <img
              src={sofa}
              alt="আহমদ ছফা"
              className="relative z-10 w-full rounded-3xl object-cover shadow-xl"
            />

          </div>

          {/* Content */}

          <div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.4em] text-amber-700">
              পরিচিতি
            </p>

            <h2 className="text-3xl font-bold leading-tight text-stone-900 md:text-5xl">
              যে কণ্ঠ আজও
              <br />
              আমাদের ভাবায়
            </h2>

            <p className="mt-8 text-lg leading-9 text-stone-600">
              আহমদ ছফা ছিলেন বাংলাদেশের অন্যতম গুরুত্বপূর্ণ সাহিত্যিক,
              প্রাবন্ধিক, ঔপন্যাসিক ও চিন্তাবিদ। তাঁর সাহিত্য ও
              চিন্তাভাবনা প্রচলিত ধারণাকে প্রশ্ন করার পাশাপাশি
              সমাজ ও মানুষের জীবনকে নতুনভাবে দেখার সুযোগ তৈরি করেছে।
            </p>

            <p className="mt-6 text-lg leading-9 text-stone-600">
              উপন্যাস, প্রবন্ধ, কবিতা ও সাংস্কৃতিক সমালোচনার মাধ্যমে
              তিনি সমাজ, শিক্ষা, সংস্কৃতি, ইতিহাস ও মানুষের চিন্তার
              স্বাধীনতা নিয়ে গভীরভাবে লিখেছেন। তাঁর রচনাগুলো আজও
              পাঠক ও গবেষকদের কাছে গুরুত্বপূর্ণ।
            </p>

            {/* Stats */}

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">

              {stats.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-stone-200 bg-stone-50 p-5 text-center"
                >
                  <h3 className="text-xl font-bold text-amber-700 sm:text-2xl">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    {item.title}
                  </p>
                </div>
              ))}

            </div>

            <Link
              to="/biography"
              className="mt-12 inline-flex items-center gap-3 rounded-full bg-stone-900 px-7 py-4 font-medium text-white transition hover:bg-black"
            >
              জীবনী পড়ুন
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}