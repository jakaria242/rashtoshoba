import { Mail, ArrowRight } from "lucide-react";

export default function NewsletterCTA() {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-20 lg:py-28">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-amber-300/10 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">

        {/* Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-500 shadow-xl shadow-amber-500/10">
          <Mail
            className="text-black"
            size={34}
          />
        </div>

        {/* Label */}
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.4em] text-amber-400">
          নিউজলেটার
        </p>

        {/* Heading */}
        <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          আহমদ ছফা আর্কাইভের সঙ্গে
          <br className="hidden sm:block" />
          যুক্ত থাকুন
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
          নতুন প্রবন্ধ, বই, সাক্ষাৎকার, আলোকচিত্র, ভিডিও এবং
          আহমদ ছফা সম্পর্কিত গুরুত্বপূর্ণ সংগ্রহের খবর
          আপনার ইমেইলে পেতে সাবস্ক্রাইব করুন।
        </p>

        {/* Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row"
        >

          <div className="relative flex-1">

            <Mail
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="email"
              required
              placeholder="আপনার ইমেইল ঠিকানা"
              className="h-14 w-full rounded-full border border-white/10 bg-white/5 pl-12 pr-6 text-white outline-none transition placeholder:text-gray-500 focus:border-amber-400 focus:bg-white/10"
            />

          </div>

          <button
            type="submit"
            className="group flex h-14 items-center justify-center gap-2 rounded-full bg-amber-500 px-8 font-semibold text-black transition hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20"
          >
            সাবস্ক্রাইব করুন

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>

        </form>

        {/* Small Text */}
        <p className="mt-5 text-xs text-gray-500">
          আমরা আপনার ব্যক্তিগত তথ্য সুরক্ষিত রাখব এবং কোনো স্প্যাম পাঠাব না।
        </p>

      </div>
    </section>
  );
}