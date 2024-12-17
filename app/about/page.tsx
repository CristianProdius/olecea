"use client";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8f3e9] to-[#fff5e6]">
      <Header />

      <section className="pt-40 pb-24 px-6 sm:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-6xl mx-auto"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl xl:text-8xl font-serif leading-tight tracking-tighter text-[#3d2314] mb-8"
          >
            About{" "}
            <span className="relative inline-block">
              <span className="italic font-light">DELICE</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#3d2314]/20 to-[#3d2314]/40"></span>
            </span>
          </motion.h1>
        </motion.div>
      </section>

      <section className="py-24 px-6 sm:px-8 bg-white/30 backdrop-blur-sm">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >
          <motion.div variants={fadeInUp} className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-[#3d2314] leading-tight">
              Meet Olesea
            </h2>
            <div className="prose prose-lg text-[#3d2314]/80">
              <p className="leading-relaxed">
                As a certified chocolate sommelier and professional chocolatier,
                I&apos;ve dedicated my career to mastering the art of chocolate
                making. My journey began with a deep passion for confectionery
                and a commitment to understanding the science behind perfect
                chocolate.
              </p>
              <p className="leading-relaxed">
                With expertise in neurobiology and nutrition, I bring a unique
                perspective to chocolate making, combining artisanal
                craftsmanship with scientific precision to create exceptional
                chocolate experiences.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="relative w-full aspect-[3/4] max-w-md mx-auto lg:max-w-none"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#3d2314]/5 to-transparent rounded-3xl transform rotate-3 scale-105" />
            <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl transform transition-transform hover:-translate-y-2 duration-300">
              <Image
                src="/olesea-profile.webp"
                alt="Olesea - Chocolate Expert"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 px-6 sm:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >
          <motion.div variants={fadeInUp} className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative transform hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                  <Image
                    src="/chocolate-making-process.webp"
                    alt="Chocolate Making Process"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative transform hover:scale-105 transition-transform duration-300 translate-x-8">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                  <Image
                    src="/chocolate-details.webp"
                    alt="Chocolate Details"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="space-y-6 -translate-y-12">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative transform hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                  <Image
                    src="/chocolate-tasting.webp"
                    alt="Chocolate Tasting"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="order-1 lg:order-2 space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-[#3d2314] leading-tight">
              Our Philosophy
            </h2>
            <div className="prose prose-lg text-[#3d2314]/80">
              <p className="leading-relaxed">
                At DELICE, we believe in creating more than just chocolates – we
                craft experiences. Our approach combines traditional artisanal
                methods with modern techniques, ensuring each creation meets the
                highest standards of quality and taste.
              </p>
              <p className="leading-relaxed">
                Through our courses and workshops, we share our expertise and
                passion, helping both beginners and professionals master the art
                of chocolate making in an engaging and supportive environment.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 px-6 sm:px-8 bg-gradient-to-br from-[#3d2314] to-[#2a1810] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/texture-overlay.png')] opacity-10" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10"
        >
          <motion.div variants={fadeInUp} className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Our Expertise
            </h2>
            <div className="prose prose-lg prose-invert text-white/90">
              <p className="leading-relaxed">
                With years of experience in chocolate making and teaching, we
                provide comprehensive training programs that cover everything
                from basic techniques to advanced confectionery skills. Our
                courses are designed to inspire creativity while maintaining the
                highest standards of quality.
              </p>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3d2314]/20 to-transparent rounded-3xl transform rotate-3 scale-105" />
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl relative transform hover:-translate-y-2 transition-transform duration-300">
                <Image
                  src="/chocolate-expertise.webp"
                  alt="Chocolate Making Expertise"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 px-6 sm:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern-light.png')] opacity-5" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <motion.div variants={fadeInUp} className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-[#3d2314] leading-tight">
              Join Our Community
            </h2>
            <div className="prose prose-lg mx-auto text-[#3d2314]/80">
              <p className="leading-relaxed">
                Whether you&apos;re a beginner or a professional, our doors are
                open to everyone who shares our passion for chocolate. Join us
                to discover the art of chocolate making and become part of our
                growing community of chocolate enthusiasts.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-4 bg-[#3d2314] text-white rounded-full text-lg font-medium hover:bg-[#2a1810] transition-colors duration-300"
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
};

export default AboutPage;
