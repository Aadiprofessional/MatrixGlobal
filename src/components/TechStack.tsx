import React from 'react';
import { motion } from 'framer-motion';

const TechStack: React.FC = () => {
  const technologies = [
    { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
    { name: 'TypeScript', icon: '🔷', color: 'from-blue-500 to-indigo-600' },
    { name: 'Three.js', icon: '🎲', color: 'from-green-400 to-cyan-500' },
    { name: 'AI/ML', icon: '🤖', color: 'from-purple-500 to-pink-500' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-emerald-600' },
    { name: 'Python', icon: '🐍', color: 'from-yellow-400 to-orange-500' },
    { name: 'TailwindCSS', icon: '🎨', color: 'from-teal-400 to-blue-500' },
    { name: 'Framer Motion', icon: '✨', color: 'from-pink-400 to-purple-500' },
    { name: 'Custom LLM', icon: '🧠', color: 'from-indigo-500 to-purple-600' },
    { name: 'Cloud Base', icon: '⚡', color: 'from-green-400 to-teal-500' },
    { name: 'IoT', icon: '📡', color: 'from-orange-400 to-red-500' },
    { name: 'WebGL', icon: '🌐', color: 'from-cyan-500 to-blue-600' },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black to-gray-900/50" />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built with <span className="gradient-text">Cutting-Edge</span> Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We leverage the latest technologies and frameworks to deliver exceptional experiences 
            across all our platforms.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1,
                rotateY: 10,
                z: 50
              }}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/10 hover:border-white/20 transition-all duration-500 text-center">
                {/* Tech Icon */}
                <div className="text-3xl lg:text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>

                {/* Tech Name */}
                <div className={`text-sm lg:text-base font-semibold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                  {tech.name}
                </div>

                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none rounded-xl`} />
                
                {/* Floating Effect */}
                <motion.div
                  animate={{ y: [-1, 1, -1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 rounded-xl filter blur-lg transition-opacity duration-500`} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack; 