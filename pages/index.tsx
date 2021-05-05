import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import HeroSection from "../home-sections/hero-section";
import MenuSection from "../home-sections/menu-section";
import BookTableSection from "../home-sections/reservation-section";
import AboutSection from "../home-sections/about-section";
import ChefSection from "../home-sections/staff-section";
import CustomerSection from "../home-sections/customer-section";
import Services from "../home-sections/services-section";
import BlogSection from "../home-sections/blog-section";
import ContactSection from "../home-sections/contact-section";
import Footer from "../components/footer";

interface HomeProps {}
export default function Home(props: HomeProps) {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Services />
      <MenuSection />
      <BookTableSection />
      <ChefSection />
      <CustomerSection />
      <Footer />
    </div>
  );
}
