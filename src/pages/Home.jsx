import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import FeaturedBooks from "../components/home/FeaturedBooks";
import QuotesSection from "../components/home/QuotesSection";
import TimelineSection from "../components/home/TimelineSection";
import GallerySection from "../components/home/GallerySection";
import FeaturedVideos from "../components/home/FeaturedVideos";
import LatestArticles from "../components/home/LatestArticles";
import NewsletterCTA from "../components/home/NewsletterCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedBooks />
      <QuotesSection />
      <TimelineSection />
      <GallerySection />
      <FeaturedVideos />
      <LatestArticles/>
      <NewsletterCTA/>
    </>
  );
}