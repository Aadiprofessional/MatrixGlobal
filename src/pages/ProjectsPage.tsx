import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Download, Play, Star, Users, Code, Zap, ChevronLeft, ChevronRight, Image } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "MatrixAI",
      category: "AI Platform",
      description: "Advanced AI platform with chat, image generation, video creation, and content writing capabilities.",
      longDescription: "MatrixAI is a comprehensive AI-powered platform that brings together the latest in artificial intelligence technology. From intelligent conversations to creative content generation, it's your all-in-one AI assistant.",
      image: "/api/placeholder/600/400",
      productPhotos: [
        "/api/placeholder/600/400",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ],
      features: [
        "Advanced AI Chat & Conversations",
        "AI Image Generation",
        "AI Video Creation",
        "Content Writing & Copywriting",
        "Presentation Creator",
        "Speech-to-Text Conversion",
        "AI Text Humanizer",
        "AI Content Detector"
      ],
      techStack: ["React", "TypeScript", "Custom LLM", "Computer Vision", "NLP", "Machine Learning"],
      stats: {
        users: "10K+",
        rating: 4.9,
        downloads: "25K+"
      },
      links: {
        website: "https://matrixai.com",
        download: "https://matrixai.com/download",
        demo: "https://matrixai.com/demo"
      },
      status: "Live",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      name: "Matrix Twin",
      category: "Construction Tech",
      description: "Digital twin technology for construction project management with IoT integration and real-time monitoring.",
      longDescription: "Matrix Twin revolutionizes construction project management through digital twin technology, providing real-time insights, IoT integration, and comprehensive project analytics.",
      image: "/api/placeholder/600/400",
      productPhotos: [
        "/api/placeholder/600/400",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ],
      features: [
        "Digital Twin Technology",
        "IoT Device Integration",
        "Real-time Project Monitoring",
        "Team Collaboration Tools",
        "Safety Management System",
        "AI-powered Project Insights",
        "Resource Optimization",
        "Progress Tracking & Analytics"
      ],
      techStack: ["React", "TypeScript", "3D Modeling", "IoT", "Real-time Analytics", "Cloud Computing"],
      stats: {
        users: "5K+",
        rating: 4.8,
        downloads: "12K+"
      },
      links: {
        website: "https://matrixtwin.com",
        download: "https://matrixtwin.com/download",
        demo: "https://matrixtwin.com/demo"
      },
      status: "Live",
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      name: "MatrixEdu",
      category: "Education Platform",
      description: "AI-powered educational platform with tutoring, courses, scholarships, and personalized learning paths.",
      longDescription: "MatrixEdu transforms education through AI-powered personalized learning, offering comprehensive tutoring, course management, and scholarship opportunities.",
      image: "/api/placeholder/600/400",
      productPhotos: [
        "/api/placeholder/600/400",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ],
      features: [
        "AI-powered Tutoring",
        "Interactive Video Courses",
        "Scholarship Finder",
        "Case Studies & Products",
        "Personalized Learning Paths",
        "Progress Analytics",
        "Study Assistant",
        "Real-world Applications"
      ],
      techStack: ["React", "TypeScript", "AI/ML", "Three.js", "Framer Motion", "Educational APIs"],
      stats: {
        users: "15K+",
        rating: 4.9,
        downloads: "30K+"
      },
      links: {
        website: "https://matrixedu.com",
        download: "https://matrixedu.com/download",
        demo: "https://matrixedu.com/demo"
      },
      status: "Live",
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: 4,
      name: "AI Toy",
      category: "Interactive Toys",
      description: "AI-based interactive toys for kids with voice conversations and educational activities.",
      longDescription: "AI Toy brings artificial intelligence to children's playtime, creating interactive, educational, and engaging experiences that grow with your child.",
      image: "/api/placeholder/600/400",
      productPhotos: [
        "/api/placeholder/600/400",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ],
      features: [
        "Voice Conversations",
        "Educational Activities",
        "Interactive Storytelling",
        "Learning Games",
        "Personality Development",
        "Safe AI Interactions",
        "Parental Controls",
        "Progress Tracking"
      ],
      techStack: ["AI/ML", "Voice Recognition", "NLP", "Mobile Development", "Cloud Computing"],
      stats: {
        users: "8K+",
        rating: 4.7,
        downloads: "20K+"
      },
      links: {
        website: "https://aitoy.matrix.com",
        download: "https://aitoy.matrix.com/download",
        demo: "https://aitoy.matrix.com/demo"
      },
      status: "Live",
      gradient: "from-pink-500 to-purple-600"
    }
  ];

  const ProductCard = ({ product }: { product: any }) => {
    const [showImages, setShowImages] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      if (showImages && product.productPhotos.length > 1) {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => 
            (prevIndex + 1) % product.productPhotos.length
          );
        }, 3000); // Auto-switch every 3 seconds

        return () => clearInterval(interval);
      }
    }, [showImages, product.productPhotos.length]);

    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % product.productPhotos.length
      );
    };

    const prevImage = () => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? product.productPhotos.length - 1 : prevIndex - 1
      );
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="group relative"
      >
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
          {/* Product Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${product.gradient} text-white`}>
                  {product.status}
                </span>
              </div>
              <p className="text-gray-400 font-medium">{product.category}</p>
            </div>
            <motion.button
              onClick={() => setShowImages(!showImages)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-2"
              title={showImages ? "Show Content" : "Show Product Photos"}
            >
              <Image className="w-4 h-4" />
              <span className="text-xs">{showImages ? "Content" : "Photos"}</span>
            </motion.button>
          </div>

          {/* Content/Images Toggle */}
          <div className="mb-6">
            {showImages ? (
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-800">
                  <img 
                    src={product.productPhotos[currentImageIndex]} 
                    alt={`${product.name} photo ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {product.productPhotos.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {product.productPhotos.map((_: any, index: number) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            ) : (
              <>
                {/* Product Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {product.longDescription}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-gray-400">{product.stats.users} users</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-400">{product.stats.rating} rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-gray-400">{product.stats.downloads} downloads</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-white">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {product.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-white">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.techStack.map((tech: string) => (
                      <span key={tech} className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 border border-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <motion.a
              href={product.links.website}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 bg-gradient-to-r ${product.gradient} rounded-lg font-semibold text-white flex items-center gap-2 hover:shadow-lg transition-shadow`}
            >
              <ExternalLink className="w-4 h-4" />
              Visit Website
            </motion.a>
            
            <motion.a
              href={product.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-gray-600 rounded-lg font-semibold text-white hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <Play className="w-4 h-4" />
              Try Demo
            </motion.a>
            
            <motion.a
              href={product.links.download}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-gray-600 rounded-lg font-semibold text-white hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download
            </motion.a>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Discover the innovative solutions we've built to transform industries and empower users worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 rounded-2xl p-12 border border-gray-800/50"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Experience Innovation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Explore our cutting-edge solutions and discover how MatrixAI can transform your digital experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity font-medium">
                Contact Us
              </button>
              <button className="px-8 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage; 