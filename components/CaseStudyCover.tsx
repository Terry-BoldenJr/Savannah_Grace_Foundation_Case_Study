import imgSgfLBrandingLogo23 from "figma:asset/795d653fcb75e3f6103a7162aec31aba0d1f1deb.png";
import { motion } from "motion/react";

interface CaseStudyCoverProps {
  title?: string;
  subtitle?: string;
  author?: string;
}

export default function CaseStudyCover({ 
  title = "The Savannah Grace Foundation",
  subtitle = "Case Study",
  author = "Terry D Bolden Jr"
}: CaseStudyCoverProps) {
  return (
    <div className="relative h-full flex items-center justify-center overflow-hidden -m-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-[#116dff] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#5e97ff] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#bde9fb] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Logo/Brand Element */}
      <motion.div 
        className="absolute left-20 top-1/2 -translate-y-1/2 opacity-30 mix-blend-luminosity"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="relative rotate-[-0.6deg] skew-x-[14.692deg]">
          <img 
            src={imgSgfLBrandingLogo23} 
            alt="SGF Logo" 
            className="w-64 h-auto"
          />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
        <div className="space-y-8">
          <motion.h1 
            className="text-[#116dff]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          
          <motion.h2 
            className="text-[#5e97ff]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle}
          </motion.h2>

          <motion.div 
            className="h-1 w-32 bg-gradient-to-r from-[#116dff] via-[#5e97ff] to-[#bde9fb] mx-auto rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 128, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          />

          <motion.p 
            className="lead text-neutral-700 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Empowering communities through compassionate initiatives, 
            support programs, and meaningful impact.
          </motion.p>
        </div>
      </div>

      {/* Author Credit */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <p className="text-[#116dff]">
          Project By: {author}
        </p>
      </motion.div>
    </div>
  );
}