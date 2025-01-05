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
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !isHovered,   // Pause autoplay when hovered
    autoplaySpeed: 2000,
    pauseOnHover: true,
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
