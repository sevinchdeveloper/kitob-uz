import AppDownloadBanner from "@/components/app-download-banner/AppDownloadBanner";
import NewArrivals from "@/components/new-arrivals/NewArrivals";
import News from "@/components/news/News";
import RecentlyBooks from "@/components/recently-books/RecentlyBooks";
import ServiceCards from "@/components/service-cards/ServiceCards";
import Statistics from "@/components/statistics/Statistics";
import Footer from "@/layouts/Footer";
import Hero from "@/layouts/Hero";
import Navbar from "@/layouts/Navbar";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServiceCards/>
      <NewArrivals/>
      <RecentlyBooks/>
      <AppDownloadBanner/>
      <Statistics/>
      <News/>
      <Footer/>
    </>
  )
}