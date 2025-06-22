import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Download, Play, Star, Users, Code, Zap } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  const projects = [
    {
      id: 1,
      name: "MatrixAI",
      category: "AI Platform",
      description: "Advanced AI platform with chat, image generation, video creation, and content writing capabilities.",
      longDescription: "MatrixAI is a comprehensive AI-powered platform that brings together the latest in artificial intelligence technology. From intelligent conversations to creative content generation, it's your all-in-one AI assistant.",
      image: "/api/placeholder/600/400",
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
      techStack: ["React", "TypeScript", "OpenAI", "Computer Vision", "NLP", "Machine Learning"],
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
      features: [
        "AI-powered Tutoring",
        "Interactive Video Courses",
        "Scholarship Finder",
        "Case Studies & Projects",
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
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Discover the innovative solutions we've built to transform industries and empower users worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold">{project.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} text-white`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-gray-400 font-medium">{project.category}</p>
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-gray-400">{project.stats.users} users</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-gray-400">{project.stats.rating} rating</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Download className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-400">{project.stats.downloads} downloads</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-yellow-400" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.slice(0, 6).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Code className="w-5 h-5 text-purple-400" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-xs border border-gray-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:opacity-90 transition-opacity font-medium`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Website
                    </a>
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
                    >
                      <Play className="w-4 h-4" />
                      View Demo
                    </a>
                    <a
                      href={project.links.download}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                </div>
              </motion.div>
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
              Explore our cutting-edge solutions and discover how Matrix can transform your digital experience.
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