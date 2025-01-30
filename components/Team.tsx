"use client";
import { motion } from "framer-motion";
import { FC } from "react";
import Image from "next/image";

const InstructorSection: FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-[#f8f3e9] via-[#f9f5ef] to-[#f8f3e9]">
      <section className="py-24 px-4 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10"
        >
          <motion.div variants={fadeInUp} className="space-y-12">
            <div className="pb-12">
              <motion.p
                className="text-sm uppercase tracking-wider text-[#3d2314]/70 font-medium"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Your Chocolate Expert & Instructor
              </motion.p>
              <motion.h2
                className="text-5xl sm:text-6xl md:text-7xl font-serif text-[#3d2314] leading-[1.1]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Meet{" "}
                <span className="italic font-light relative inline-block">
                  Olesea
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3d2314]/20"></span>
                </span>
              </motion.h2>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-serif text-[#3d2314] leading-relaxed">
                Hi, I&apos;m <span className="italic">Olesea</span>
              </h3>
              <div className="space-y-6 text-[#3d2314]/80">
                <p className="text-lg leading-relaxed">
                  As a certified chocolate sommelier and professional
                  chocolatier, I&apos;m the founder of DELICE Creative Chocolate
                  School. My journey began with a simple love for sweets and an
                  old family recipe book.
                </p>
                <p className="text-lg leading-relaxed">
                  With deep knowledge in neurobiology and nutrition, I combine
                  my passion for quality chocolate with a commitment to healthy
                  living. Today, I serve as a mentor, trainer, and consultant,
                  helping both beginners and professionals master the art of
                  chocolate.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="relative w-full lg:w-[80%] mx-auto lg:ml-auto"
          >
            <div className="relative max-w-md mx-auto">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#3d2314]/5 rounded-full -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#f8f3e9] rounded-full -z-10" />

              <div className="aspect-[3/4] w-full max-w-[400px] mx-auto rounded-3xl overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.15)] relative group">
                <Image
                  src="/Olesea.jpg"
                  alt="Olesea - Chocolate Expert"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transform transition-all duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3d2314]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 px-4 sm:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >
          <motion.div variants={fadeInUp} className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.1)] relative group">
                <Image
                  src="/mission1.jpg"
                  alt="Chocolate Making Process"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3d2314]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.1)] relative group mt-12">
                <Image
                  src="/mission2.jpg"
                  alt="Chocolate Tasting Experience"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3d2314]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="space-y-8 order-1 lg:order-2"
          >
            <h3 className="text-3xl md:text-4xl font-serif text-[#3d2314] leading-relaxed">
              My <span className="italic">Mission</span>
            </h3>
            <div className="space-y-6 text-[#3d2314]/80">
              <p className="text-lg leading-relaxed">
                At DELICE, we carefully select ingredients, monitor their
                quality and freshness, ensuring perfect harmony with recipes and
                other components. We create chocolates with passion, thinking
                about the pleasure and moments of delight that await those we
                serve.
              </p>
              <p className="text-lg leading-relaxed">
                As a mother of twins, I especially value the opportunity to
                share my experience and knowledge, emphasizing the importance of
                delicious and healthy eating. I&apos;ll teach you how to make
                exquisite chocolates right in your own kitchen.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default InstructorSection;
