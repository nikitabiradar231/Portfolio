import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const certifications = [
  {
    id: 1,
    title: 'AI & Machine Learning',
    issuer: 'Samsung Innovation Campus',
    year: '2026',
    description: 'Comprehensive training covering artificial intelligence fundamentals, machine learning algorithms, and practical AI application development.',
  },
  {
    id: 2,
    title: 'Full Stack Web Development Certification',
    issuer: 'Professional Development Program',
    year: '2025',
    description: 'Practical training on building full stack web applications, configuring databases, creating secure REST APIs, and developing responsive front-end user interfaces.',
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-12">Certifications</h2>
          
          <div className="space-y-6">
            {certifications.map((cert) => (
              <div key={cert.id} className="card p-6 flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                  <p className="text-accent text-sm mb-3">{cert.issuer}</p>
                  <p className="text-secondary text-sm leading-relaxed max-w-2xl">{cert.description}</p>
                </div>
                <div className="text-secondary text-sm whitespace-nowrap mt-1 md:mt-0">
                  {cert.year}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
