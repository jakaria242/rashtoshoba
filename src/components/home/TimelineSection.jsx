const timeline = [
  {
    year: "১৯৪৩",
    title: "জন্ম",
    description:
      "৩০ জুন ১৯৪৩ সালে চট্টগ্রামের চন্দনাইশ উপজেলার গাছবাড়িয়ায় আহমদ ছফা জন্মগ্রহণ করেন।",
  },
  {
    year: "১৯৬০-এর দশক",
    title: "সাহিত্যচর্চার সূচনা",
    description:
      "তরুণ বয়স থেকেই সাহিত্য, দর্শন, সমাজ ও রাজনীতি নিয়ে তাঁর গভীর আগ্রহ তৈরি হয়। প্রবন্ধ ও সাহিত্যচর্চার মধ্য দিয়ে তিনি নিজের স্বতন্ত্র চিন্তার পরিচয় দিতে শুরু করেন।",
  },
  {
    year: "১৯৭০-এর দশক",
    title: "চিন্তাবিদ হিসেবে প্রতিষ্ঠা",
    description:
      "বাংলাদেশের সমাজ, সংস্কৃতি, ইতিহাস ও মানুষের চিন্তাজগৎ নিয়ে তাঁর প্রবন্ধ ও লেখালেখি তাঁকে গুরুত্বপূর্ণ বুদ্ধিজীবী হিসেবে প্রতিষ্ঠিত করে।",
  },
  {
    year: "১৯৭৬",
    title: "অলাতচক্র",
    description:
      "মুক্তিযুদ্ধের পটভূমিতে রচিত তাঁর উল্লেখযোগ্য উপন্যাস ‘অলাতচক্র’ প্রকাশিত হয়।",
  },
  {
    year: "১৯৯৫",
    title: "গাভী বিত্তান্ত",
    description:
      "‘গাভী বিত্তান্ত’ প্রকাশের মাধ্যমে বাংলা কথাসাহিত্যে তাঁর ব্যঙ্গাত্মক ও তীক্ষ্ণ সমাজদৃষ্টির আরেকটি গুরুত্বপূর্ণ প্রকাশ ঘটে।",
  },
  {
    year: "২০০১",
    title: "মৃত্যু ও উত্তরাধিকার",
    description:
      "২৮ জুলাই ২০০১ সালে আহমদ ছফা মৃত্যুবরণ করেন। তাঁর সাহিত্য, প্রবন্ধ ও চিন্তাধারা আজও বাংলা সাহিত্য ও বুদ্ধিবৃত্তিক পরিসরে আলোচিত ও প্রভাবশালী।",
  },
];

export default function TimelineSection() {
  return (
    <section className="bg-[#F8F4EC] py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-amber-700">
            জীবনযাত্রা
          </p>

          <h2 className="text-3xl font-bold text-stone-900 md:text-5xl">
            জীবনের গুরুত্বপূর্ণ অধ্যায়
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-600 md:text-lg">
            জন্ম থেকে সাহিত্যচর্চা এবং চিন্তাজগতে তাঁর প্রভাব—
            আহমদ ছফার জীবনের উল্লেখযোগ্য কিছু মুহূর্ত।
          </p>

        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-4 top-0 h-full w-[2px] bg-amber-300 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">

            {timeline.map((item, index) => (
              <div
                key={`${item.year}-${item.title}`}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                } items-start md:items-center`}
              >

                {/* Content */}

                <div className="w-full px-10 md:w-1/2">

                  <div className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">

                    {/* Year */}

                    <span className="text-sm font-bold tracking-wide text-amber-700">
                      {item.year}
                    </span>

                    {/* Title */}

                    <h3 className="mt-2 text-2xl font-bold text-stone-900 transition group-hover:text-amber-700">
                      {item.title}
                    </h3>

                    {/* Description */}

                    <p className="mt-4 text-[15px] leading-8 text-stone-600 md:text-base">
                      {item.description}
                    </p>

                  </div>

                </div>

                {/* Timeline Dot */}

                <div className="absolute left-4 top-8 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#F8F4EC] bg-amber-600 shadow-md md:left-1/2">

                  <div className="h-2 w-2 rounded-full bg-white" />

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}