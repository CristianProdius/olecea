"use client";
import { FC, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const ChocolatePromoSection: FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const t = useTranslations("promo");

  return (
    <div className="bg-[#f8f3e9] py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.section
          className="bg-white/80 backdrop-blur-sm rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <div className="max-w-7xl mx-auto p-6 md:p-12 lg:p-20 flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <motion.div
              className="flex-1 max-w-2xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-medium text-4xl sm:text-5xl lg:text-6xl mb-8 text-[#3d2314] leading-[1.2]">
                {t("title.first")}
                <motion.span
                  className="block italic text-[#5d3324]"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {t("title.highlight")}
                </motion.span>
                {t("title.last")}
              </h2>
              <p className="text-lg md:text-xl mb-12 text-[#3d2314]/80 leading-relaxed">
                {t("description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(61, 35, 20, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#3d2314] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-[#5d3324] text-center"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/guide.pdf";
                    link.download = "guide.pdf";
                    link.click();
                  }}
                >
                  {t("button")}
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              className="flex-1 relative mt-12 md:mt-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <div className="relative w-full max-w-[500px] mx-auto perspective-1000">
                <motion.img
                  src="/guide.PNG"
                  alt={t("imageAlt")}
                  className="w-full h-auto rounded-lg"
                  animate={{
                    rotateY: isHovered ? 10 : 0,
                    scale: isHovered ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                  style={{
                    boxShadow: "0 20px 40px rgba(61, 35, 20, 0.2)",
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-[#5d3324] text-white py-3 px-6 rounded-full font-bold shadow-xl"
                  whileHover={{ scale: 1.1 }}
                >
                  {t("free")}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ChocolatePromoSection;
