import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'SkillSwap',
    description: 'A full-stack web application that enables users to exchange skills and book learning sessions. Features real-time communication and secure payment processing.',
    features: ['JWT Auth', 'Real-time Chat', 'Booking System'],
    techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/nikitabiradar231',
    demo: '#',
  },
  {
    id: 2,
    title: 'NFT Marketplace',
    description: 'Decentralized NFT Trading Platform where users can mint, buy, sell, and auction NFTs with MetaMask integration and decentralized storage.',
    features: ['MetaMask Integration', 'Smart Contracts', 'IPFS'],
    techStack: ['Solidity', 'React', 'Hardhat', 'Ethers.js'],
    github: 'https://github.com/nikitabiradar231',
    demo: '#',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-12">Selected Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="card p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <div className="flex gap-3 text-secondary">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-xs font-medium text-secondary">
                      {tech}
                      {project.techStack[project.techStack.length - 1] !== tech && <span className="mx-1.5 opacity-50">•</span>}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center md:text-left">
            <a href="https://github.com/nikitabiradar231" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-sm font-medium inline-flex items-center gap-2">
              View all projects on GitHub <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
