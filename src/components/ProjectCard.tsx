import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, Check, Smartphone } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  features: string[];
  tech: string[];
  liveUrl: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
      whileHover={{ y: -5 }}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
      
      {/* Card Content */}
      <div className="relative z-10 p-4 sm:p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${project.color} shadow-lg`}>
              {project.icon}
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">{project.title}</h3>
              <p className="text-xs sm:text-sm text-gray-400">{project.subtitle}</p>
            </div>
          </div>
          
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.div>
          </motion.button>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 sm:px-3 py-1 text-xs font-medium bg-white/10 rounded-full text-gray-300 backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex-1 px-3 sm:px-4 py-2 bg-gradient-to-r ${project.color} rounded-lg font-semibold text-center flex items-center justify-center gap-2 hover:shadow-lg transition-shadow text-sm sm:text-base`}
          >
            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
            Visit Site
          </motion.a>
          
          {/* Mobile App Links for MatrixAI */}
          {(project.appStoreUrl || project.playStoreUrl) && (
            <div className="flex gap-2">
              {project.appStoreUrl && (
                <motion.a
                  href={project.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 sm:px-4 py-2 border border-white/20 rounded-lg font-semibold hover:bg-white/5 transition-colors flex items-center justify-center text-xs sm:text-sm"
                  title="Download on App Store"
                >
                  <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="ml-1 hidden sm:inline">iOS</span>
                </motion.a>
              )}
              
              {project.playStoreUrl && (
                <motion.a
                  href={project.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 sm:px-4 py-2 border border-white/20 rounded-lg font-semibold hover:bg-white/5 transition-colors flex items-center justify-center text-xs sm:text-sm"
                  title="Get it on Google Play"
                >
                  <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="ml-1 hidden sm:inline">Android</span>
                </motion.a>
              )}
            </div>
          )}
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10"
            >
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Key Features</h4>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-gray-300"
                  >
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-5`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
    </motion.div>
  );
};

export default ProjectCard; 