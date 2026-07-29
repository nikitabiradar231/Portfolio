import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 relative">
      <div className="max-w-4xl mx-auto px-6 w-full text-center">
        
        {/* Subtle badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-white/5 bg-surface mb-8 text-secondary"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          Available for Opportunities
        </motion.div>

        {/* Name and Title */}
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Nikita Biradar.
        </motion.h1>

        {/* Bio */}
        <motion.p
          className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I'm a Full Stack and Blockchain Developer. Currently pursuing a BSc in Blockchain Technology.
        </motion.p>

        {/* Actions */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button onClick={scrollToContact} className="w-full sm:w-auto btn-primary">
            Get in touch
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
