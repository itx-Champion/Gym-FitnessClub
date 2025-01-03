'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  const images = [
    '/images/fitness1.jpg',
    '/images/fitness2.jpg',
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      >
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Hero ${index}`}
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 4, 
                delay: index * 4,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            }}
            exit={{ opacity: 0 }}
          />
        ))}
      </motion.div>
      <motion.div
        className="relative z-20 text-center text-white space-y-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold">
          Fitness Club.
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-8">
         Transformez votre corps, votre esprit et votre vie.
        </p>
        <motion.a
          href="#join"
          className="px-6 py-3 bg-yellow-400 text-gray-800 hover:bg-yellow-600 text-lg rounded-md transition-all duration-300 inline-block"
          whileHover={{ scale: 1.1 }}
        >
          Rejoignez-nous
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
