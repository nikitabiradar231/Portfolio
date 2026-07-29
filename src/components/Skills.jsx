import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    label: 'Languages',
    skills: ['C', 'C++', 'Java', 'JavaScript', 'Solidity'],
  },
  {
    label: 'Frontend',
    skills: ['html', 'css', 'React.js', 'Tailwind CSS'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Express.js', 'MongoDB'],
  },
  {
    label: 'Blockchain',
    skills: ['Ethereum', 'Smart Contracts', 'Web3.js', 'Ethers.js', 'Hardhat'],
  },
  {
    label: 'Tools & Soft Skills',
    skills: ['Git', 'GitHub', 'Problem Solving', 'Teamwork', 'Communication'],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 border-t border-white/5 bg-surface/30">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-12">Skills</h2>
          
          <div className="grid sm:grid-cols-2 gap-8">
            {skillCategories.map((category, i) => (
              <div key={category.label}>
                <h3 className="text-white font-medium mb-4">{category.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
