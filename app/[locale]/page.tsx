"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import ContactSection from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BookPromoSection from "@/components/Promo";
import ReviewsSection from "@/components/Reviews";
import ServicesSection from "@/components/Services";
import InstructorSection from "@/components/Team";

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-[#3d2314] flex items-center justify-center z-50 "
      exit={{
        y: "-100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [0.7, 1, 1, 0.98],
        }}
        transition={{
          duration: 2.4,
          times: [0, 0.4, 0.8, 1],
        }}
        className="relative w-48 h-48 flex items-center justify-center"
      >
        <motion.img
          src="/Logo_beige.png"
          alt="Logo"
          className="w-full h-full object-contain"
          animate={{
            filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasVisited", "true");
      }, 2400);

      return () => clearTimeout(timer);
    }
  }, []);
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#f4f6ef]"
      >
        <Header />
        <Hero />
        <ServicesSection />
        <InstructorSection />
        <ReviewsSection />
        <BookPromoSection />
        <ContactSection />
        <FAQ />
        <Footer />
      </motion.main>
    </>
  );
}
