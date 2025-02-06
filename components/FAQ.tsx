"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

interface FAQItem {
  questionKey: string;
  answerKey: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const t = useTranslations("faq");

  const faqItems: FAQItem[] = [
    {
      questionKey: "course.format.question",
      answerKey: "course.format.answer",
    },
    {
      questionKey: "individual.attention.question",
      answerKey: "individual.attention.answer",
    },
    {
      questionKey: "experience.question",
      answerKey: "experience.answer",
    },
    {
      questionKey: "materials.question",
      answerKey: "materials.answer",
    },
    {
      questionKey: "booking.question",
      answerKey: "booking.answer",
    },
    {
      questionKey: "practice.question",
      answerKey: "practice.answer",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-gradient-to-br from-[#3d2314] to-[#2a1810] px-4 sm:px-6 md:px-8 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 lg:sticky lg:top-24 h-fit"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 text-white">
              {t("title.first")}{" "}
              <span className="italic font-light bg-gradient-to-r from-[#f0e6d9] to-[#e5d5c5] bg-clip-text text-transparent">
                {t("title.highlight")}
              </span>
              <span className="block mt-2">{t("title.last")}</span>
            </h2>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
              {t("description")}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 space-y-3 sm:space-y-4"
          >
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="backdrop-blur-lg bg-white/5 rounded-xl sm:rounded-2xl overflow-hidden"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(hoveredIndex)}
              >
                <motion.button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex justify-between items-center text-left text-white group"
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                >
                  <span className="text-base sm:text-lg font-light pr-4 sm:pr-8 group-hover:text-[#f0e6d9] transition-colors duration-300">
                    {t(item.questionKey)}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                  >
                    <svg
                      className="w-full h-full"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 text-white/70 text-sm sm:text-base font-light leading-relaxed">
                        {t(item.answerKey)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default FAQ;
