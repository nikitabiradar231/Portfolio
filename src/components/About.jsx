import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="grid md:grid-cols-3 gap-12 mt-12">
            <div className="md:col-span-2 space-y-6 text-secondary font-light leading-relaxed text-lg">
              <p>
                I am a Blockchain Technology student passionate about blockchain, smart contracts, and full-stack web development. I enjoy building decentralized applications, solving programming problems, and continuously learning modern technologies.
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-medium mb-2">Location</h3>
                <p className="text-secondary text-sm">Pune, India</p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">Education</h3>
                <p className="text-secondary text-sm">BSc Blockchain Technology</p>
                <p className="text-secondary text-sm">Savitribai Phule Pune University</p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">Focus</h3>
                <p className="text-secondary text-sm">Full Stack Development</p>
                <p className="text-secondary text-sm">Web3 & Smart Contracts</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
