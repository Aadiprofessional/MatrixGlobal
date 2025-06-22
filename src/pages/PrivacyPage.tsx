import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Users, FileText, Calendar, Mail } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const lastUpdated = "June 2025";

  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: <FileText className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Personal Information',
          text: 'We collect information you provide directly to us, such as when you create an account, use our services, or contact us. This may include your name, email address, phone number, and other contact information.'
        },
        {
          subtitle: 'Usage Information',
          text: 'We automatically collect information about how you use our services, including your interactions with our platforms, features used, and time spent on different sections.'
        },
        {
          subtitle: 'Device Information',
          text: 'We collect information about the devices you use to access our services, including hardware model, operating system, browser type, and unique device identifiers.'
        }
      ]
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: <Users className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Service Provision',
          text: 'We use your information to provide, maintain, and improve our services, including MatrixEdu, Matrix Twin, MatrixAI, and AI Toy platforms.'
        },
        {
          subtitle: 'Communication',
          text: 'We may use your information to send you updates, newsletters, marketing communications, and important service announcements.'
        },
        {
          subtitle: 'Analytics and Improvement',
          text: 'We analyze usage patterns to understand how our services are used and to improve user experience and platform functionality.'
        }
      ]
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing and Disclosure',
      icon: <Eye className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Service Providers',
          text: 'We may share your information with third-party service providers who assist us in operating our services, such as cloud hosting, analytics, and customer support.'
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose your information if required by law, regulation, or legal process, or to protect the rights, property, or safety of Matrix, our users, or others.'
        },
        {
          subtitle: 'Business Transfers',
          text: 'In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.'
        }
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: <Lock className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Security Measures',
          text: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
        },
        {
          subtitle: 'Encryption',
          text: 'We use industry-standard encryption to protect data in transit and at rest. All sensitive information is encrypted using advanced security protocols.'
        },
        {
          subtitle: 'Access Controls',
          text: 'We maintain strict access controls and regularly review and update our security practices to ensure the highest level of protection for your data.'
        }
      ]
    },
    {
      id: 'cookies',
      title: 'Cookies and Tracking Technologies',
      icon: <Shield className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Cookie Usage',
          text: 'We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and provide personalized content and advertisements.'
        },
        {
          subtitle: 'Cookie Types',
          text: 'We use essential cookies for basic functionality, performance cookies for analytics, and targeting cookies for personalized experiences. You can manage cookie preferences in your browser settings.'
        },
        {
          subtitle: 'Third-Party Cookies',
          text: 'Our services may include third-party cookies from analytics providers, advertising networks, and social media platforms to enhance functionality and provide insights.'
        }
      ]
    },
    {
      id: 'user-rights',
      title: 'Your Rights and Choices',
      icon: <Users className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Access and Correction',
          text: 'You have the right to access, update, or correct your personal information. You can do this through your account settings or by contacting us directly.'
        },
        {
          subtitle: 'Data Portability',
          text: 'You have the right to request a copy of your personal data in a structured, commonly used, and machine-readable format.'
        },
        {
          subtitle: 'Deletion',
          text: 'You can request deletion of your personal information, subject to certain legal and contractual obligations. We will retain some information as required by law or for legitimate business purposes.'
        },
        {
          subtitle: 'Marketing Communications',
          text: 'You can opt out of marketing communications at any time by using the unsubscribe link in emails or updating your preferences in your account settings.'
        }
      ]
    }
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
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Your privacy is important to us. This policy explains how Matrix collects, uses, and protects your personal information across all our platforms.
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

      {/* International Transfers */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">International Data Transfers</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Matrix operates globally with offices in Hong Kong and Shenzhen. Your personal information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws than your country.
              </p>
              <p>
                When we transfer your personal information internationally, we ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Standard contractual clauses approved by relevant authorities</li>
                <li>Adequacy decisions by relevant data protection authorities</li>
                <li>Other legally recognized transfer mechanisms</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Children's Privacy */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Children's Privacy</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
              <p>
                For our AI Toy platform, which may be used by children under parental supervision, we implement additional privacy protections and require parental consent before collecting any personal information from children.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Changes to Privacy Policy */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Changes to This Privacy Policy</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on our website and updating the "Last updated" date.
              </p>
              <p>
                We encourage you to review this Privacy Policy periodically to stay informed about how we collect, use, and protect your information.
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Questions About Privacy?</h2>
            <p className="text-lg text-gray-300 mb-6">
              If you have any questions about this Privacy Policy or our privacy practices, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                Contact Us
              </Link>
              <a
                href="mailto:privacy@matrixedu.com"
                className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                privacy@matrixedu.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage; 