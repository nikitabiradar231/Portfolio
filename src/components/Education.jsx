import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const educationData = [
  {
    degree: 'BSC Blockchain Technology',
    institution: 'Savitribai Phule Pune University',
    period: 'Pursuing',
    description: 'Comprehensive degree covering blockchain fundamentals, smart contract development, cryptography, distributed systems, and full-stack web development.',
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-24 border-t border-white/5 bg-surface/30">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-12">Education</h2>
          
          <div className="space-y-8">
            {educationData.map((edu, i) => (
              <div key={i} className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-8">
                <div className="md:w-1/4">
                  <p className="text-secondary text-sm font-medium">{edu.period}</p>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-accent text-sm mb-4">{edu.institution}</p>
                  <p className="text-secondary text-sm leading-relaxed">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
