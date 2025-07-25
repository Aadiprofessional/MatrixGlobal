import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Globe, Brain, Building, GraduationCap, Gamepad2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Components
import Hero3D from '../components/Hero3D';
import ProjectCard from '../components/ProjectCard';
import TechStack from '../components/TechStack';
import StatsSection from '../components/StatsSection';
import ParticleField from '../components/ParticleField';

// Product Images
import MatrixEduImage from '../assets/MatrixEdu.png';
import MatrixTwinImage from '../assets/MatrixTwin.png';
import MatrixAIImage from '../assets/MatrixAI.png';

const HomePage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Product images for the slider
  const productImages = [
    { image: MatrixEduImage, name: 'MatrixEdu' },
    { image: MatrixTwinImage, name: 'Matrix Twin' },
    { image: MatrixAIImage, name: 'MatrixAI' },
    { image: MatrixAIImage, name: 'AI Toy' } // Using MatrixAI image as placeholder for AI Toy
  ];

  // Auto-cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % productImages.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [productImages.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % productImages.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  const products = [
    {
      id: 'matrix-edu',
      title: 'MatrixEdu',
      subtitle: 'AI-Powered Learning Platform',
      description: 'Revolutionary educational platform featuring AI tutoring, personalized courses, scholarship finder, case studies, and comprehensive learning resources with advanced analytics.',
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'AI-Powered Tutoring & Study Assistant',
        'Interactive Courses & Video Lectures',
        'Scholarship Finder & Application Tracker',
        'Case Studies & Real-world Products',
        'Personalized Learning Paths',
        'Progress Analytics & Insights'
      ],
      tech: ['React', 'TypeScript', 'AI/ML', 'Three.js', 'Framer Motion'],
      liveUrl: 'https://matrixedu.ai/',
      image: MatrixEduImage
    },
    {
      id: 'matrix-twin',
      title: 'Matrix Twin',
      subtitle: 'Digital Construction Management',
      description: 'Advanced construction project management platform with digital twins, IoT integration, real-time monitoring, team collaboration, and AI-powered insights.',
      icon: <Building className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Digital Twin Technology',
        'IoT Device Integration & Monitoring',
        'Real-time Project Analytics',
        'Team Collaboration Tools',
        'Safety Management System',
        'AI-Powered Project Insights'
      ],
      tech: ['React', 'TypeScript', '3D Models', 'IoT', 'Real-time Data'],
      liveUrl: 'https://matrixtwin.com/login',
      image: MatrixTwinImage
    },
    {
      id: 'matrix-ai',
      title: 'MatrixAI',
      subtitle: 'Comprehensive AI Agent Platform',
      description: 'All-in-one AI platform featuring intelligent chat, image generation, video creation, content writing, presentation maker, and advanced AI tools.',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Advanced AI Chat & Conversations',
        'AI Image & Video Generation',
        'Content Writing & Copywriting',
        'Presentation Creator',
        'Speech-to-Text & Transcription',
        'AI Text Humanizer & Detector'
      ],
      tech: ['React', 'AI/ML', 'Custom LLM', 'Computer Vision', 'NLP'],
      liveUrl: 'https://matrixai.asia/',
      appStoreUrl: 'https://apps.apple.com/app/matrixai',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.matrixai',
      image: MatrixAIImage
    },
    {
      id: 'ai-toy',
      title: 'AI Toy',
      subtitle: 'Interactive AI-Powered Toys',
      description: 'Revolutionary AI-based interactive toys for kids that can engage in conversations, educational activities, and provide personalized learning experiences.',
      icon: <Gamepad2 className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      features: [
        'Voice-Activated AI Conversations',
        'Educational Games & Activities',
        'Personalized Learning Content',
        'Safe & Child-Friendly Interface',
        'Parental Controls & Monitoring',
        'Offline & Online Capabilities'
      ],
      tech: ['AI/ML', 'Voice Recognition', 'IoT', 'Mobile App', 'Safety First'],
      liveUrl: 'https://aitoy.matrix.com',
      image: '/images/ai-toy-preview.jpg'
    }
  ];

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section with 3D Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Suspense fallback={null}>
              <ParticleField count={1000} />
              <Hero3D />
            </Suspense>
          </Canvas>
        </div>

        {/* Hero Content */}
        <motion.div 
          style={{ y, opacity }}
          className="relative z-10 text-center px-4 max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">Welcome to the Future</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="gradient-text-rainbow">MatrixAI</span>
              <br />
              <span className="text-white">Ecosystem</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Pioneering the future with cutting-edge AI solutions, revolutionary educational platforms, 
              advanced construction management, and innovative interactive experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full font-semibold text-lg flex items-center gap-2 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-lg backdrop-blur-sm hover:bg-white/5 transition-all duration-300"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Products Section */}
      <section id="products" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Products</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Innovative solutions that push the boundaries of technology and transform industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <ProjectCard key={product.id} project={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStack />

      {/* About Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-pink-900/20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-6">
                About <span className="gradient-text">MatrixAI</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                MatrixAI is at the forefront of technological innovation, creating revolutionary solutions 
                that bridge the gap between artificial intelligence and real-world applications. Our 
                ecosystem encompasses education, construction, AI services, and interactive experiences.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                From empowering students with AI-driven learning to revolutionizing construction 
                management with digital twins, we're building the tools that will define tomorrow.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Globe className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                  <div className="text-2xl font-bold">Global</div>
                  <div className="text-gray-400">Reach</div>
                </div>
                <div className="text-center">
                  <Zap className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                  <div className="text-2xl font-bold">Innovation</div>
                  <div className="text-gray-400">Driven</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 p-4">
                {/* Image Slider */}
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-800/50">
                  <img 
                    src={productImages[currentImageIndex].image} 
                    alt={`${productImages[currentImageIndex].name} preview`}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  
                  {/* Navigation Buttons */}
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors backdrop-blur-sm border border-white/20"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors backdrop-blur-sm border border-white/20"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {productImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Product Name Overlay */}
                  <div className="absolute top-4 left-4 px-3 py-2 bg-black/50 rounded-lg backdrop-blur-sm border border-white/20">
                    <div className="text-white font-semibold text-sm">
                      {productImages[currentImageIndex].name}
                    </div>
                  </div>
                  
                  {/* Products Counter */}
                  <div className="absolute top-4 right-4 px-3 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg backdrop-blur-sm">
                    <div className="text-white font-bold text-sm">
                      4 Revolutionary Products
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center"
              >
                <Sparkles className="w-8 h-8" />
              </motion.div>
              
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">
              Ready to Experience the <span className="gradient-text">Future</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of users already transforming their work 
              with MatrixAI's revolutionary AI-powered platforms.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full font-semibold text-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
              onClick={() => navigate('/signup')}
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 