import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Instagram,
  ExternalLink,
  Facebook
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const projects = [
    { name: 'MatrixEdu', url: 'https://matrixedu.ai/' },
    { name: 'Matrix Twin', url: 'https://matrixtwin.com/login' },
    { name: 'MatrixAI', url: 'https://matrixai.asia/' },
    { name: 'AI Toy', url: 'https://aitoy.matrix.com' },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, url: '#', name: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, url: '#', name: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, url: '#', name: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, url: '#', name: 'Instagram' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <motion.div 
            className="container mx-auto px-4 py-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Logo and Description */}
            <motion.div variants={itemVariants} className="text-center mb-8">
              <Link to="/" className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold gradient-text">Matrix</span>
              </Link>
              <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto mb-6">
                Pioneering the future with cutting-edge AI solutions and innovative technology platforms.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-white text-center">Contact Us</h3>
              <div className="space-y-4">
                {/* Hong Kong Office */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <p className="font-semibold text-white mb-2 flex items-center justify-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Hong Kong Office
                  </p>
                  <div className="text-center text-sm text-gray-300 space-y-1">
                    <p>Unit G1, 35/F, Legend Tower</p>
                    <p>7 Shing Yip Street, Kwun Tong, KLN</p>
                    <p className="text-blue-400">+852 66359879</p>
                  </div>
                </div>
                
                {/* Shenzhen Office */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <p className="font-semibold text-white mb-2 flex items-center justify-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    深圳办公室
                  </p>
                  <div className="text-center text-sm text-gray-300 space-y-1">
                    <p>前海桂湾三路深港青年夢工場</p>
                    <p>香港大學青年科創學院4樓</p>
                    <p className="text-purple-400">+86 13266989879</p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <p className="font-semibold text-white mb-2 flex items-center justify-center">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                    Email
                  </p>
                  <div className="text-center">
                    <a href="mailto:info@matrixedu.com" className="text-pink-400 hover:text-pink-300 transition-colors duration-300 text-sm">
                      info@matrixedu.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-white text-center">Our Projects</h3>
              <div className="grid grid-cols-2 gap-3">
                {projects.map((project) => (
                  <motion.a
                    key={project.name}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-white/20 transition-all duration-300 text-center group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                      {project.name}
                    </span>
                    <ExternalLink className="w-3 h-3 mx-auto mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-white text-center">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all border border-white/10 hover:border-white/20"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="grid grid-cols-2 gap-3 text-center">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'Projects', href: '/projects' },
                  { name: 'About', href: '/about' },
                  { name: 'Contact', href: '/contact' }
                ].map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/5"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Copyright */}
            <motion.div variants={itemVariants} className="text-center pt-6 border-t border-white/10">
              <p className="text-gray-400 text-xs mb-4">
                © {currentYear} Matrix. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-xs">
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop Layout */}
        <motion.div 
          className="hidden lg:block"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <Link to="/" className="flex items-center space-x-2 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold gradient-text">Matrix</span>
                </Link>
                
                <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                  Pioneering the future with cutting-edge AI solutions, revolutionary educational platforms, 
                  advanced construction management, and innovative interactive experiences.
                </p>
                
                <div className="flex items-center space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Projects */}
              <motion.div variants={itemVariants}>
                <h3 className="text-lg font-semibold mb-6 text-white">Our Projects</h3>
                <ul className="space-y-3">
                  {projects.map((project) => (
                    <li key={project.name}>
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
                        whileHover={{ x: 5 }}
                      >
                        <span>{project.name}</span>
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Quick Links */}
              <motion.div variants={itemVariants}>
                <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      to="/" 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/projects" 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/about" 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/contact" 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </motion.div>

              {/* Contact */}
              <motion.div variants={itemVariants}>
                <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
                <div className="space-y-4 text-gray-300">
                  {/* Hong Kong Office */}
                  <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                    <p className="font-semibold text-white mb-2 flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      Hong Kong Office
                    </p>
                    <p className="text-sm leading-relaxed">Unit G1, 35/F, Legend Tower<br />
                    7 Shing Yip Street, Kwun Tong, KLN<br />
                    <span className="text-blue-400">+852 66359879</span></p>
                  </div>
                  
                  {/* Shenzhen Office */}
                  <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                    <p className="font-semibold text-white mb-2 flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                      深圳办公室
                    </p>
                    <p className="text-sm leading-relaxed">前海桂湾三路深港青年夢工場<br />
                    香港大學青年科創學院4樓<br />
                    <span className="text-purple-400">+86 13266989879</span></p>
                  </div>
                  
                  {/* Email */}
                  <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                    <p className="font-semibold text-white mb-2 flex items-center">
                      <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                      Email
                    </p>
                    <p className="text-sm">
                      <a href="mailto:info@matrixedu.com" className="text-pink-400 hover:text-pink-300 transition-colors duration-300">
                        info@matrixedu.com
                      </a>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-gray-400 text-sm">
                  © {currentYear} Matrix. All rights reserved. Built with ❤️ for the future.
                </p>
                
                <div className="flex items-center space-x-6">
                  <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Privacy Policy
                  </Link>
                  <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 