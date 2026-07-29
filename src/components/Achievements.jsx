import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const achievements = [
  {
    id: 1,
    title: 'Blockchain Project Completion',
    description: 'Successfully completed multiple blockchain projects including an NFT Marketplace with full smart contract integration on Ethereum.',
  },
  {
    id: 2,
    title: 'Full Stack MERN Development',
    description: 'Built complete Full Stack MERN applications with authentication, real-time features, and production-ready architecture.',
  },
  {
    id: 3,
    title: 'Smart Contract Development',
    description: 'Developed and deployed Smart Contracts using Solidity on Ethereum, leveraging Hardhat for testing and deployment.',
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="py-24 border-t border-white/5 bg-surface/30">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-12">Achievements</h2>
          
          <ul className="space-y-6">
            {achievements.map((item) => (
              <li key={item.id} className="relative pl-6">
                <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-accent" />
                <h3 className="text-white font-medium mb-1">{item.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{item.description}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
