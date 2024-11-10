'use client';

import { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { motion } from 'framer-motion';

type ProjectScreenshotsCarouselProps = {
  images: string[];
};

const ProjectScreenshotsCarousel = ({ images }: ProjectScreenshotsCarouselProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const settings = {
    dots: true,
    infinite: true,      // Keep scrolling infinitely
    speed: 500,          // Transition speed
    slidesToShow: 1,     // Show one image at a time
    slidesToScroll: 1,   // Scroll one image at a time
    autoplay: true,      // Enable autoplay
    autoplaySpeed: 2000, // Speed of auto-scroll (in milliseconds)
    pauseOnHover: true,  // Pause the autoplay when the carousel is hovered
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="max-w-xl mx-auto mt-8"
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative h-64 w-full">
            <Image
              src={image}
              alt={`Project Screenshot ${index + 1}`}
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default ProjectScreenshotsCarousel;
