"use client";

import { motion, PanInfo, useAnimation, useDragControls } from "framer-motion";
import { FC, useEffect, useRef, useState, useCallback } from "react";

interface Review {
  author: string;
  service: string;
  content: string;
  date: string;
  avatar: string;
}

const ReviewCard: FC<{ review: Review; index: number }> = ({
  review,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="min-w-[300px] md:min-w-[380px] bg-[#f0e6d9] rounded-3xl p-6 md:p-8 flex flex-col snap-start"
    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="flex items-center gap-4 mb-6">
      <motion.img
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        src={review.avatar}
        alt=""
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h3 className="text-base font-medium text-[#3d2314]">
          {review.author}
        </h3>
        <p className="text-sm text-[#3d2314]/60">{review.service}</p>
      </div>
    </div>
    <p className="text-base mb-auto leading-relaxed text-[#3d2314]/80">
      &quot;{review.content}&quot;
    </p>
    <div className="mt-8 pt-6 border-t border-[#3d2314]/10">
      <p className="text-sm text-[#3d2314]/50">{review.date}</p>
    </div>
  </motion.div>
);

const ReviewsSection: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const dragControls = useDragControls();
  const [autoPlay, setAutoPlay] = useState(true);
  const CARD_WIDTH = 380;

  const reviews: Review[] = [
    {
      author: "Maria K.",
      service: "Chocolate & Wine Tasting",
      content:
        "An incredible experience combining fine wines with exquisite chocolates. Olesea's expertise made the evening unforgettable.",
      date: "December 15, 2024",
      avatar: "/reviews/maria.jpg",
    },
    {
      author: "Alex D.",
      service: "Professional Course",
      content:
        "The comprehensive chocolate making course exceeded my expectations. I learned techniques that transformed my confectionery business.",
      date: "December 10, 2024",
      avatar: "/reviews/alex.jpg",
    },
    {
      author: "Sophie M.",
      service: "Children's Workshop",
      content:
        "My kids had an amazing time at the chocolate workshop. Educational, fun, and delicious - what more could we ask for?",
      date: "December 5, 2024",
      avatar: "/reviews/sophie.jpg",
    },
    {
      author: "David R.",
      service: "Corporate Event",
      content:
        "DELICE organized a perfect team building event. The chocolate making session brought our team closer together.",
      date: "November 30, 2024",
      avatar: "/reviews/david.jpg",
    },
    {
      author: "Elena V.",
      service: "Private Masterclass",
      content:
        "The private masterclass was exactly what I needed. Personalized attention and professional guidance in chocolate crafting.",
      date: "November 25, 2024",
      avatar: "/reviews/elena.jpg",
    },
  ];

  // Rest of the component logic remains the same
  const calculateDragConstraints = () => {
    if (!scrollRef.current) return { left: 0, right: 0 };
    const totalWidth = CARD_WIDTH * reviews.length;
    const containerWidth = scrollRef.current.offsetWidth;
    return {
      left: -(totalWidth - containerWidth),
      right: 0,
    };
  };

  const animateToIndex = useCallback(
    (index: number) => {
      if (!scrollRef.current) return;
      const xOffset = -(CARD_WIDTH * index);
      controls.start({
        x: xOffset,
        transition: {
          duration: 0.8,
          ease: "easeInOut",
          type: "tween",
        },
      });
    },
    [controls]
  );

  const handleDragStart = () => {
    setIsDragging(true);
    setAutoPlay(false);
  };

  const handleDragEnd = (_event: MouseEvent | TouchEvent, info: PanInfo) => {
    setIsDragging(false);
    const threshold = 50;
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (Math.abs(offset) > threshold || Math.abs(velocity) > 500) {
      const direction = offset > 0 ? -1 : 1;
      const newIndex = Math.min(
        Math.max(0, currentIndex + direction),
        reviews.length - 1
      );
      setCurrentIndex(newIndex);
      animateToIndex(newIndex);
    } else {
      animateToIndex(currentIndex);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoPlay) {
      interval = setInterval(() => {
        if (!isDragging && scrollRef.current) {
          const nextIndex = (currentIndex + 1) % reviews.length;
          setCurrentIndex(nextIndex);
          animateToIndex(nextIndex);
        }
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [currentIndex, isDragging, autoPlay, animateToIndex, reviews.length]);

  return (
    <section className="bg-[#f8f3e9] py-16 md:py-24 overflow-hidden">
      <motion.div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-light mb-12 text-center text-[#3d2314]"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          What Our Students Say
        </motion.h2>

        <div className="relative">
          <div ref={scrollRef} className="overflow-hidden">
            <motion.div
              className="flex gap-4 md:gap-6"
              drag="x"
              dragControls={dragControls}
              dragConstraints={calculateDragConstraints()}
              dragElastic={0.1}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              animate={controls}
            >
              {reviews.map((review, index) => (
                <ReviewCard
                  key={`review-${index}`}
                  review={review}
                  index={index}
                />
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <motion.button
                key={`dot-${index}`}
                className={`w-2 h-2 rounded-full ${
                  currentIndex === index ? "bg-[#3d2314]" : "bg-[#3d2314]/20"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setCurrentIndex(index);
                  setAutoPlay(false);
                  animateToIndex(index);
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ReviewsSection;
