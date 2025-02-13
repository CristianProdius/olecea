"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/app/i18n/routing";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const t = useTranslations("hero");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative bg-[#f8f3e9] flex items-center pt-32 pb-20 px-4 sm:px-8 w-full overflow-x-hidden">
      <div className="absolute inset-0 bg-repeat opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#f8f3e9]" />
      </div>

      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={stagger}
        className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10"
      >
        <motion.div variants={fadeUp} className="lg:w-[45%] space-y-8">
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-[64px] font-medium leading-[1.1] tracking-[-0.02em] text-center lg:text-left text-[#3d2314]"
          >
            DELICE{" "}
            <span className="italic font-light relative">
              {t("chocolate")}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3d2314]/20"></span>
            </span>
            <br />
            <span className="italic font-light relative">
              {t("school")}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3d2314]/20"></span>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg text-[#3d2314]/80 max-w-md leading-relaxed text-center lg:text-left"
          >
            {t("description")}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-4 sm:space-x-5 pt-4 justify-center lg:justify-start"
          >
            <Link href="https://www.delice.school/" passHref>
              <button className="w-full sm:w-auto bg-[#3d2314] text-white px-8 py-4 rounded-full hover:bg-[#5d3324] transition-all duration-300 text-[15px] hover:shadow-lg hover:scale-105 active:scale-95">
                {t("coursesButton")}
              </button>
            </Link>
            <Link href="/about" passHref>
              <button className="w-full sm:w-auto bg-[#f0e6d9] text-[#3d2314] px-8 py-4 rounded-full hover:bg-[#e8d9c6] transition-all duration-300 text-[15px] hover:shadow-lg hover:scale-105 active:scale-95">
                {t("shopButton")}
              </button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} className="lg:w-[50%] relative">
          <div className="relative rounded-[32px] overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.1)] group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#3d2314]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              {" "}
              {/* 16:9 Aspect Ratio */}
              <video
                ref={videoRef}
                src="/promoDelice.MOV"
                className="absolute top-0 left-0 w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <button
                onClick={togglePlayPause}
                className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-all duration-300"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? (
                  <PauseIcon className="w-6 h-6 text-white" />
                ) : (
                  <PlayIcon className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

const PlayIcon = ({ className }: { className: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = ({ className }: { className: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);
