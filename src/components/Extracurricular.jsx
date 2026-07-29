import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const activities = [
  'Blockchain Workshops',
  'Technical Seminars',
  'Coding Practice',
  'Online Courses',
  'Project Based Learning',
  'Team Collaboration',
];

const Extracurricular = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="extracurricular" className="py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-12">Extracurricular</h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {activities.map((activity, i) => (
              <div key={i} className="card-hover p-4 text-center">
                <p className="text-secondary text-sm font-medium">{activity}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Extracurricular;
