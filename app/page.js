"use client"

import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import SolutionsSection from "./components/SolutionsSection"
import EngagementSection from "./components/EngagementSection"
import NeedForQNNXSection from "./components/NeedForQNNXSection"
import TeamSection from "./components/TeamSection"
import ProductsSection from "./components/ProductsSection"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="relative h-screen w-full font-sans text-white">

      <Navbar />
      <HeroSection />
      <NeedForQNNXSection />
      <ProductsSection />
      <SolutionsSection />
      <EngagementSection />
      <AboutSection />
      <TeamSection />
      <Footer />

    </div>
  )
}