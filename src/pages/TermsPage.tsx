import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Shield, 
  Users, 
  AlertTriangle, 
  Copyright, 
  Calendar, 
  Mail,
  Scale,
  CheckCircle,
  XCircle
} from 'lucide-react';

const TermsPage: React.FC = () => {
  const lastUpdated = "June 2025";

  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: <CheckCircle className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Agreement to Terms',
          text: 'By accessing or using any of Matrix\'s services, including MatrixEdu, Matrix Twin, MatrixAI, and AI Toy (collectively, the "Services"), you agree to be bound by these Terms of Service and all applicable laws and regulations.'
        },
        {
          subtitle: 'Capacity to Enter Agreement',
          text: 'You represent that you are at least 18 years old and have the legal capacity to enter into this agreement. If you are using our Services on behalf of an organization, you represent that you have the authority to bind that organization to these terms.'
        },
        {
          subtitle: 'Modifications to Terms',
          text: 'We reserve the right to modify these terms at any time. We will notify users of material changes through our Services or by email. Continued use of our Services after such modifications constitutes acceptance of the updated terms.'
        }
      ]
    },
    {
      id: 'services',
      title: 'Description of Services',
      icon: <FileText className="w-6 h-6" />,
      content: [
        {
          subtitle: 'MatrixEdu Platform',
          text: 'An AI-powered educational platform providing personalized learning experiences, AI tutoring, course content, scholarship opportunities, and learning analytics for students and educators.'
        },
        {
          subtitle: 'Matrix Twin Platform',
          text: 'A digital construction management platform featuring digital twin technology, IoT integration, project monitoring, team collaboration tools, and AI-powered insights for construction products.'
        },
        {
          subtitle: 'MatrixAI Platform',
          text: 'A comprehensive AI platform offering intelligent chat, content generation, image and video creation, presentation tools, and various AI-powered productivity features.'
        },
        {
          subtitle: 'AI Toy Platform',
          text: 'Interactive AI-powered toys and educational tools designed for children, featuring voice recognition, educational games, and safe, age-appropriate content with parental controls.'
        }
      ]
    },
    {
      id: 'user-responsibilities',
      title: 'User Responsibilities',
      icon: <Users className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Account Security',
          text: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.'
        },
        {
          subtitle: 'Acceptable Use',
          text: 'You agree to use our Services only for lawful purposes and in accordance with these Terms. You will not use our Services to transmit harmful, offensive, or illegal content, or to violate the rights of others.'
        },
        {
          subtitle: 'Content Responsibility',
          text: 'You are solely responsible for any content you upload, submit, or transmit through our Services. You represent that you have all necessary rights to such content and that it does not violate any third-party rights.'
        },
        {
          subtitle: 'Compliance with Laws',
          text: 'You agree to comply with all applicable local, national, and international laws and regulations when using our Services, including but not limited to data protection, privacy, and intellectual property laws.'
        }
      ]
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property Rights',
      icon: <Copyright className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Our Intellectual Property',
          text: 'All content, features, and functionality of our Services, including but not limited to text, graphics, logos, software, and design, are owned by Matrix or our licensors and are protected by copyright, trademark, and other intellectual property laws.'
        },
        {
          subtitle: 'User Content License',
          text: 'By submitting content to our Services, you grant Matrix a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, and distribute such content in connection with providing our Services.'
        },
        {
          subtitle: 'Restrictions on Use',
          text: 'You may not copy, modify, distribute, sell, or lease any part of our Services or included software, nor may you reverse engineer or attempt to extract the source code of that software, unless laws prohibit those restrictions.'
        },
        {
          subtitle: 'Trademark Rights',
          text: 'Matrix, MatrixEdu, Matrix Twin, MatrixAI, AI Toy, and related logos are trademarks of Matrix. You may not use these trademarks without our prior written consent.'
        }
      ]
    },
    {
      id: 'privacy-data',
      title: 'Privacy and Data Protection',
      icon: <Shield className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Privacy Policy',
          text: 'Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information when you use our Services. By using our Services, you agree to the collection and use of information in accordance with our Privacy Policy.'
        },
        {
          subtitle: 'Data Security',
          text: 'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.'
        },
        {
          subtitle: 'Data Retention',
          text: 'We retain your personal data only for as long as necessary to provide our Services and fulfill the purposes outlined in our Privacy Policy, unless a longer retention period is required or permitted by law.'
        }
      ]
    },
    {
      id: 'payment-terms',
      title: 'Payment Terms',
      icon: <Scale className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Subscription Services',
          text: 'Some of our Services are offered on a subscription basis. Subscription fees are charged in advance and are non-refundable except as expressly provided in these Terms or required by law.'
        },
        {
          subtitle: 'Payment Processing',
          text: 'We use third-party payment processors to handle payments. Your payment information is subject to the privacy policy and terms of service of the payment processor.'
        },
        {
          subtitle: 'Price Changes',
          text: 'We reserve the right to change our pricing at any time. We will provide advance notice of price changes for subscription services, and you will have the opportunity to cancel your subscription before the new pricing takes effect.'
        },
        {
          subtitle: 'Refund Policy',
          text: 'Refunds are provided at our discretion and in accordance with our refund policy. Generally, subscription fees are non-refundable, but we may provide refunds for unused portions of prepaid services in certain circumstances.'
        }
      ]
    },
    {
      id: 'limitations',
      title: 'Limitations of Liability',
      icon: <AlertTriangle className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Service Availability',
          text: 'We strive to provide reliable Services, but we do not guarantee that our Services will be available at all times or free from errors, viruses, or other harmful components. We reserve the right to modify, suspend, or discontinue any part of our Services at any time.'
        },
        {
          subtitle: 'Disclaimer of Warranties',
          text: 'Our Services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.'
        },
        {
          subtitle: 'Limitation of Damages',
          text: 'To the maximum extent permitted by law, Matrix shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, arising out of or related to your use of our Services.'
        },
        {
          subtitle: 'Maximum Liability',
          text: 'Our total liability to you for all claims arising out of or related to these Terms or our Services shall not exceed the amount you paid to us for the Services in the twelve months preceding the claim.'
        }
      ]
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: <XCircle className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Termination by You',
          text: 'You may terminate your account at any time by following the account closure process in your account settings or by contacting our support team. Upon termination, your right to use our Services will cease immediately.'
        },
        {
          subtitle: 'Termination by Us',
          text: 'We may terminate or suspend your account and access to our Services at any time, with or without notice, for any reason, including if we believe you have violated these Terms or engaged in conduct that is harmful to other users or our business.'
        },
        {
          subtitle: 'Effect of Termination',
          text: 'Upon termination, all rights and licenses granted to you under these Terms will immediately cease, and you must stop using our Services. We may delete your account and data in accordance with our data retention policies.'
        }
      ]
    }
  ];

  const prohibitedUses = [
    'Violating any applicable laws or regulations',
    'Transmitting harmful, threatening, or harassing content',
    'Infringing on intellectual property rights',
    'Attempting to gain unauthorized access to our systems',
    'Distributing malware, viruses, or other malicious code',
    'Engaging in spam, phishing, or other deceptive practices',
    'Using our Services for illegal or fraudulent activities',
    'Interfering with the proper functioning of our Services'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
                <Scale className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              These terms govern your use of Matrix's services and platforms. Please read them carefully as they contain important information about your rights and responsibilities.
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <Calendar className="w-5 h-5" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <h2 className="text-xl font-semibold mb-4 text-white">Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {sections.map((section, index) => (
                <motion.a
                  key={section.id}
                  href={`#${section.id}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                >
                  <div className="text-indigo-400 group-hover:text-indigo-300 transition-colors">
                    {section.icon}
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {section.title}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section, sectionIndex) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
                  {section.icon}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">{section.title}</h2>
              </div>
              
              <div className="space-y-6">
                {section.content.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-semibold mb-3 text-indigo-300">{item.subtitle}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Prohibited Uses */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 shadow-lg">
                <XCircle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Prohibited Uses</h2>
            </div>
            <p className="text-gray-300 mb-6">
              You agree not to use our Services for any of the following prohibited activities:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prohibitedUses.map((use, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-3 bg-red-900/10 rounded-lg border border-red-500/20"
                >
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{use}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Governing Law */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Governing Law and Jurisdiction</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                These Terms of Service and any disputes arising out of or related to these Terms or our Services shall be governed by and construed in accordance with the laws of Hong Kong, without regard to its conflict of law principles.
              </p>
              <p>
                Any legal action or proceeding arising under these Terms will be brought exclusively in the courts of Hong Kong, and you hereby consent to personal jurisdiction and venue therein.
              </p>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect and enforceable.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Entire Agreement */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Entire Agreement</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                These Terms of Service, together with our Privacy Policy and any additional terms that apply to specific Services, constitute the entire agreement between you and Matrix regarding the use of our Services.
              </p>
              <p>
                These Terms supersede any prior agreements, oral or written, between you and Matrix regarding the subject matter herein. No amendment to or modification of these Terms will be binding unless in writing and signed by Matrix.
              </p>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-pink-900/20 rounded-2xl p-6 sm:p-8 border border-gray-800/50 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Questions About These Terms?</h2>
            <p className="text-lg text-gray-300 mb-6">
              If you have any questions about these Terms of Service, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                Contact Us
              </Link>
              <a
                href="mailto:legal@matrixedu.com"
                className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                legal@matrixedu.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage; 