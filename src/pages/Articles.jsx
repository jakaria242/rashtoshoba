import React, {useState} from "react";
import {
  ArrowRight,
  CalendarDays,
  User,
  Search,
  BookOpen,
} from "lucide-react";

const articles = [
  {
    id: 1,
    title: "বাঙালি মুসলমানের মন ও আত্মপরিচয়ের সংকট",
    category: "চিন্তা ও সমাজ",
    date: "১২ আগস্ট ২০২৬",
    author: "Ahmed Sofa",
    excerpt:
      "বাঙালি মুসলমানের সামাজিক, সাংস্কৃতিক ও মানসিক বিকাশের নানা দিক নিয়ে Ahmed Sofa-এর চিন্তাভাবনা আজও গুরুত্বপূর্ণ।",
  },
  {
    id: 2,
    title: "বাংলা সাহিত্য ও আমাদের চিন্তাচর্চা",
    category: "সাহিত্য",
    date: "০৫ আগস্ট ২০২৬",
    author: "Ahmed Sofa",
    excerpt:
      "সাহিত্য কেবল বিনোদনের মাধ্যম নয়; এটি মানুষের চিন্তা, সমাজ ও সংস্কৃতিকে বোঝার একটি শক্তিশালী মাধ্যম।",
  },
  {
    id: 3,
    title: "বুদ্ধিজীবী সমাজ ও বাংলাদেশের বাস্তবতা",
    category: "সমাজ",
    date: "২৮ জুলাই ২০২৬",
    author: "Ahmed Sofa",
    excerpt:
      "বাংলাদেশের বুদ্ধিবৃত্তিক পরিবেশ, সামাজিক দায়িত্ব এবং চিন্তার স্বাধীনতা নিয়ে একটি গুরুত্বপূর্ণ আলোচনা।",
  },
  {
    id: 4,
    title: "মানুষ, সমাজ ও পরিবর্তনের প্রয়োজন",
    category: "চিন্তা ও সমাজ",
    date: "২০ জুলাই ২০২৬",
    author: "Ahmed Sofa",
    excerpt:
      "সমাজ পরিবর্তনের জন্য মানুষের চিন্তা ও মূল্যবোধের পরিবর্তন কতটা প্রয়োজন, সেই প্রশ্নকে কেন্দ্র করে আলোচনা।",
  },
  {
    id: 5,
    title: "সাহিত্যের দায় ও লেখকের দায়িত্ব",
    category: "সাহিত্য",
    date: "১৫ জুলাই ২০২৬",
    author: "Ahmed Sofa",
    excerpt:
      "একজন লেখকের সমাজের প্রতি দায়িত্ব, সত্য প্রকাশের সাহস এবং সাহিত্যিক স্বাধীনতার প্রয়োজনীয়তা নিয়ে ভাবনা।",
  },
  {
    id: 6,
    title: "সংস্কৃতি ও আমাদের আত্মপরিচয়",
    category: "সংস্কৃতি",
    date: "০৮ জুলাই ২০২৬",
    author: "Ahmed Sofa",
    excerpt:
      "সংস্কৃতি কীভাবে একটি জাতির আত্মপরিচয় নির্মাণ করে এবং মানুষের জীবনকে প্রভাবিত করে তার একটি বিশ্লেষণ।",
  },
];

const categories = [
  "সব",
  "সাহিত্য",
  "চিন্তা ও সমাজ",
  "সমাজ",
  "সংস্কৃতি",
];

const Articles = () => {
  const [activeCategory, setActiveCategory] = useState("সব");
  const [search, setSearch] = useState("");

  const filteredArticles = articles.filter((article) => {
    const categoryMatch =
      activeCategory === "সব" ||
      article.category === activeCategory;

    const searchMatch =
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0">
          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-gray-200">
              <BookOpen size={16} />
              Articles
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              প্রবন্ধ ও লেখা
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              সাহিত্য, সমাজ, সংস্কৃতি ও চিন্তাচর্চা নিয়ে Ahmed Sofa-এর
              গুরুত্বপূর্ণ লেখাগুলো এক জায়গায়।
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        {/* Header + Search */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Literary Collection
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              নির্বাচিত প্রবন্ধ
            </h2>
          </div>

          {/* Search */}
          <div className="relative w-full lg:max-w-sm">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="প্রবন্ধ খুঁজুন..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-gray-100"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-gray-900 text-white"
                  : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {activeCategory === "সব" && search === "" && (
          <article className="group mt-10 overflow-hidden rounded-2xl bg-gray-900">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Placeholder */}
              <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-gradient-to-br from-gray-700 to-gray-950 sm:min-h-[360px] lg:min-h-[430px]">
                <BookOpen
                  size={72}
                  strokeWidth={1}
                  className="text-white/30"
                />

                <div className="absolute bottom-6 left-6 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur">
                  Featured Article
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <span className="text-sm font-semibold text-gray-400">
                  চিন্তা ও সমাজ
                </span>

                <h2 className="mt-4 text-2xl font-bold leading-9 text-white sm:text-3xl">
                  বাঙালি মুসলমানের মন ও আত্মপরিচয়ের সংকট
                </h2>

                <p className="mt-5 text-sm leading-7 text-gray-300 sm:text-base">
                  বাঙালি মুসলমানের সামাজিক ও সাংস্কৃতিক পরিচয়, চিন্তার
                  জগৎ এবং আত্মপরিচয়ের বিভিন্ন দিক নিয়ে একটি গুরুত্বপূর্ণ
                  আলোচনা।
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-5 text-xs text-gray-400">
                  <span className="flex items-center gap-2">
                    <CalendarDays size={15} />
                    ১২ আগস্ট ২০২৬
                  </span>

                  <span className="flex items-center gap-2">
                    <User size={15} />
                    Ahmed Sofa
                  </span>
                </div>

                <button className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-200">
                  পুরো প্রবন্ধ পড়ুন
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </article>
        )}

        {/* Articles Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl"
            >
              {/* Article Image */}
              <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-gray-800 to-gray-950">
                <BookOpen
                  size={52}
                  strokeWidth={1}
                  className="text-white/30 transition duration-300 group-hover:scale-110"
                />

                <span className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays size={14} />
                    {article.date}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <User size={14} />
                    {article.author}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold leading-8 text-gray-900 transition group-hover:text-gray-600">
                  {article.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                  {article.excerpt}
                </p>

                <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition group-hover:gap-3">
                  পড়ুন
                  <ArrowRight size={17} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <div className="py-20 text-center">
            <Search
              size={40}
              className="mx-auto text-gray-300"
            />

            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              কোনো প্রবন্ধ পাওয়া যায়নি
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              অন্য কোনো শব্দ দিয়ে আবার চেষ্টা করুন।
            </p>
          </div>
        )}
      </section>

      {/* Bottom Section */}
      <section className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <BookOpen
            size={32}
            className="mx-auto text-gray-400"
          />

          <h2 className="mt-5 text-2xl font-bold text-gray-900 sm:text-3xl">
            চিন্তার জগৎকে আরও সমৃদ্ধ করুন
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Ahmed Sofa-এর সাহিত্য, সমাজ ও সংস্কৃতি বিষয়ক লেখাগুলো পড়ুন
            এবং তাঁর চিন্তার জগতের সঙ্গে পরিচিত হন।
          </p>
        </div>
      </section>
    </main>
  );
};

export default Articles;