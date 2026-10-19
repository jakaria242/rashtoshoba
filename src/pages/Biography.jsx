import React from "react";
import ahmedsofa from '../assets/images.jpg'

const Biography = () => {
  return (
    <section className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              জীবনী
            </span>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              আহমদ ছফা
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
              বাংলাদেশের প্রখ্যাত লেখক, চিন্তাবিদ, ঔপন্যাসিক, প্রাবন্ধিক
              ও বুদ্ধিজীবী। তাঁর সাহিত্যকর্ম ও চিন্তাভাবনা বাংলা সাহিত্য
              এবং সমাজচিন্তায় গভীর প্রভাব রেখেছে।
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          
          {/* Profile Card */}
          <aside className="lg:col-span-4">
            <div className="sticky top-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              
              {/* Image */}
              <div className="relative h-80 overflow-hidden bg-gray-100 sm:h-96">
                <img
                  src={ahmedsofa}
                  alt="আহমদ ছফা"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.innerHTML = `
                      <div class="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-800 to-gray-950">
                        <span class="text-7xl font-bold text-white">আ</span>
                      </div>
                    `;
                  }}
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  আহমদ ছফা
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  লেখক · চিন্তাবিদ · ঔপন্যাসিক · প্রাবন্ধিক
                </p>

                <div className="my-6 h-px bg-gray-100" />

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-gray-900">
                      পূর্ণ নাম
                    </p>

                    <p className="mt-1 text-gray-600">
                      আহমদ ছফা
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">
                      জন্ম
                    </p>

                    <p className="mt-1 text-gray-600">
                      ৩০ জুন ১৯৪৩
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">
                      মৃত্যু
                    </p>

                    <p className="mt-1 text-gray-600">
                      ২৮ জুলাই ২০০১
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">
                      জাতীয়তা
                    </p>

                    <p className="mt-1 text-gray-600">
                      বাংলাদেশি
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Biography Content */}
          <main className="lg:col-span-8">
            <article className="prose prose-lg max-w-none">
              
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                আহমদ ছফা সম্পর্কে
              </h2>

              <div className="mt-6 space-y-6 text-[16px] leading-8 text-gray-600 sm:text-[17px]">
                <p>
                  আহমদ ছফা ছিলেন আধুনিক বাংলাদেশের অন্যতম প্রভাবশালী
                  সাহিত্যিক ও বুদ্ধিজীবী। তিনি তাঁর স্বাধীন চিন্তা,
                  শক্তিশালী প্রবন্ধ, উপন্যাস, কবিতা এবং সমাজসমালোচনার
                  জন্য বিশেষভাবে পরিচিত।
                </p>

                <p>
                  তাঁর লেখায় সমাজ, রাজনীতি, সংস্কৃতি, শিক্ষা, নৈতিকতা
                  এবং সাধারণ মানুষের জীবন বিভিন্ন দৃষ্টিকোণ থেকে উঠে
                  এসেছে। প্রচলিত চিন্তাধারাকে অনুসরণ না করে তিনি
                  নিজস্ব দৃষ্টিভঙ্গি তৈরি করেছিলেন এবং পাঠকদের সমাজের
                  প্রচলিত ধারণাগুলোকে নতুনভাবে ভাবতে উৎসাহিত করেছিলেন।
                </p>

                <p>
                  তাঁর পুরো সাহিত্যিক জীবনে তিনি বাংলাদেশের সাংস্কৃতিক
                  ও বুদ্ধিবৃত্তিক জগতের সঙ্গে গভীরভাবে যুক্ত ছিলেন।
                  তাঁর সাহিত্যকর্মে যেমন সৃজনশীলতার পরিচয় পাওয়া যায়,
                  তেমনি সামাজিক ন্যায়বিচার, মানবিক মর্যাদা এবং
                  চিন্তার স্বাধীনতার প্রতিও তাঁর গভীর দায়বদ্ধতা
                  প্রকাশ পেয়েছে।
                </p>
              </div>

              {/* Quote */}
              <div className="my-10 rounded-2xl border-l-4 border-gray-900 bg-gray-50 p-6 sm:p-8">
                <p className="text-xl font-medium italic leading-8 text-gray-800 sm:text-2xl">
                  “সাহিত্য শুধু বিনোদনের জন্য নয়; সাহিত্য মানুষকে
                  প্রশ্ন করতে, ভাবতে এবং সমাজকে নতুনভাবে দেখতে শেখায়।”
                </p>

                <p className="mt-4 text-sm font-semibold text-gray-500">
                  — আহমদ ছফা
                </p>
              </div>

              {/* Early Life */}
              <section className="mt-10">
                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  শৈশব ও প্রারম্ভিক জীবন
                </h3>

                <div className="mt-5 space-y-5 text-[16px] leading-8 text-gray-600">
                  <p>
                    আহমদ ছফা ৩০ জুন ১৯৪৩ সালে চট্টগ্রামের গাছবাড়িয়া
                    এলাকায় জন্মগ্রহণ করেন। ছোটবেলা থেকেই সাহিত্য,
                    জ্ঞানচর্চা এবং চিন্তাশীলতার প্রতি তাঁর গভীর
                    আগ্রহ তৈরি হয়।
                  </p>

                  <p>
                    শৈশব ও কৈশোরের অভিজ্ঞতা এবং চারপাশের সমাজকে
                    গভীরভাবে পর্যবেক্ষণ করার অভ্যাস পরবর্তীকালে
                    তাঁর সাহিত্যিক ও বুদ্ধিবৃত্তিক চিন্তাভাবনাকে
                    ব্যাপকভাবে প্রভাবিত করে।
                  </p>
                </div>
              </section>

              {/* Literary Career */}
              <section className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  সাহিত্যিক জীবন
                </h3>

                <div className="mt-5 space-y-5 text-[16px] leading-8 text-gray-600">
                  <p>
                    আহমদ ছফার সাহিত্যিক জীবন ছিল বহুমাত্রিক। তিনি
                    উপন্যাস, প্রবন্ধ, কবিতা এবং সামাজিক ও সাংস্কৃতিক
                    সমালোচনামূলক বিভিন্ন রচনা লিখেছেন।
                  </p>

                  <p>
                    তাঁর লেখার ভাষা ছিল সরাসরি, বিশ্লেষণধর্মী এবং
                    অনেক সময় প্রচলিত ধারণার বিরুদ্ধে প্রশ্ন তোলার
                    মতো সাহসী। জটিল সামাজিক বিষয়কে স্বাধীন ও
                    গভীর দৃষ্টিভঙ্গিতে বিশ্লেষণ করার জন্য তিনি
                    বিশেষভাবে পরিচিত ছিলেন।
                  </p>
                </div>
              </section>

              {/* Major Works */}
              <section className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  উল্লেখযোগ্য সাহিত্যকর্ম
                </h3>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "গাভী বিত্তান্ত",
                      type: "উপন্যাস",
                    },
                    {
                      title: "অর্ধেক নারী অর্ধেক ঈশ্বরী",
                      type: "উপন্যাস",
                    },
                    {
                      title: "বাঙালি মুসলমানের মন",
                      type: "প্রবন্ধ",
                    },
                    {
                      title: "বুদ্ধিবৃত্তির নতুন বিন্যাস",
                      type: "প্রবন্ধ",
                    },
                  ].map((book, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-sm font-bold text-white">
                        {index + 1}
                      </div>

                      <h4 className="font-bold text-gray-900">
                        {book.title}
                      </h4>

                      <p className="mt-1 text-sm text-gray-500">
                        {book.type}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Legacy */}
              <section className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  উত্তরাধিকার
                </h3>

                <div className="mt-5 space-y-5 text-[16px] leading-8 text-gray-600">
                  <p>
                    আহমদ ছফা বাংলাদেশের সাহিত্যিক ও বুদ্ধিবৃত্তিক
                    ইতিহাসের একজন গুরুত্বপূর্ণ ব্যক্তিত্ব। তাঁর
                    সাহিত্যকর্ম ও চিন্তাভাবনা আজও পাঠক ও গবেষকদের
                    কাছে সমানভাবে গুরুত্বপূর্ণ।
                  </p>

                  <p>
                    তাঁর উত্তরাধিকার শুধু তাঁর লেখা বইয়ের মধ্যে
                    সীমাবদ্ধ নয়। সমাজ, সংস্কৃতি, শিক্ষা, পরিচয় এবং
                    একজন বুদ্ধিজীবীর সামাজিক দায়িত্ব সম্পর্কে তিনি
                    যে প্রশ্নগুলো উত্থাপন করেছিলেন, সেগুলো আজও
                    আমাদের চিন্তার জগতে গুরুত্বপূর্ণ ভূমিকা পালন
                    করে।
                  </p>
                </div>
              </section>

              {/* Timeline */}
              <section className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  জীবনপঞ্জি
                </h3>

                <div className="relative mt-8 border-l border-gray-200 pl-6 sm:pl-8">
                  {[
                    {
                      year: "১৯৪৩",
                      text: "চট্টগ্রামের গাছবাড়িয়ায় জন্মগ্রহণ করেন।",
                    },
                    {
                      year: "১৯৬০-এর দশক",
                      text: "সাহিত্যিক ও বুদ্ধিবৃত্তিক কর্মকাণ্ডে সক্রিয়ভাবে যুক্ত হতে শুরু করেন।",
                    },
                    {
                      year: "১৯৭০–১৯৯০-এর দশক",
                      text: "বিভিন্ন গুরুত্বপূর্ণ সাহিত্যিক ও সমালোচনামূলক রচনা প্রকাশ করেন।",
                    },
                    {
                      year: "২০০১",
                      text: "২৮ জুলাই মৃত্যুবরণ করেন।",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="relative mb-8 last:mb-0"
                    >
                      <span className="absolute -left-[33px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-gray-900 ring-1 ring-gray-300 sm:-left-[41px]" />

                      <p className="text-sm font-bold text-gray-900">
                        {item.year}
                      </p>

                      <p className="mt-2 text-[15px] leading-7 text-gray-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </article>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Biography;