import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-8">Get in Touch</h2>
          
          <p className="text-secondary mb-12 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a href="mailto:nikitabiradar300@gmail.com" className="card-hover px-6 py-4 flex items-center gap-3 text-secondary hover:text-accent">
              <Mail size={24} />
              <span className="font-medium">Email Me</span>
            </a>

            <a href="https://github.com/nikitabiradar231" target="_blank" rel="noopener noreferrer" className="card-hover px-6 py-4 flex items-center gap-3 text-secondary hover:text-accent">
              <Github size={24} />
              <span className="font-medium">GitHub</span>
            </a>

            <a href="https://www.linkedin.com/in/nikita-biradar-89b204323/" target="_blank" rel="noopener noreferrer" className="card-hover px-6 py-4 flex items-center gap-3 text-secondary hover:text-accent">
              <Linkedin size={24} />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

