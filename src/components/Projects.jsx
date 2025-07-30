import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Code, Smartphone, Globe, Database, Zap, Eye } from "lucide-react";
import prom from "../assets/project management.png";
import ecom from "../assets/ecom.png";
import chat from "../assets/chat.png";
const projects = [
  {
    id: 1,
    title: "ProjectRack",
    description: "Full-stack project management tool to plan, track, and collaborate on tasks efficiently.",
    longDescription: "ProjectRack is a robust project management application built with Next.js and powered by Prisma and PostgreSQL. It offers task tracking, user authentication, team collaboration, and activity logs—all with a clean and responsive UI.",
    image: prom,
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "Clerk Auth"],
    category: "Full Stack",
    status: "Completed",
    link: "https://projectrack.akshatchopra.live",
    github: "https://github.com/Akshat7-maker/scrum",
    features: [
      "User Authentication with Clerk",
      "Create & Assign Tasks",
      "Team Collaboration",
      "Activity Timeline",
      "Responsive Dashboard"
    ],
    timeline: "1.5 months"
  },

  {
    id: 2,
    title: "ShopSphere",
    description: "Full-stack e-commerce solution with advanced features like real-time inventory, payment processing, and admin dashboard.",
    longDescription: "A comprehensive e-commerce platform built with modern technologies. Features include user authentication, shopping cart, payment integration with Razorpay, order management, and an admin panel for product management.",
    image: ecom,
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
    category: "Full Stack",
    status: "Completed",
    link: "https://ecommerce-k2yn.onrender.com",
    github: "https://github.com/Akshat7-maker/Ecommerce",
    features: ["User Authentication", "Payment Processing", "Real-time Updates", "Admin Dashboard"],
    timeline: "3 months"
  },

  {
  id: 3,
  title: "Pulse Chat",
  description: "Real-time chat application with instant messaging, user authentication, and online status.",
  longDescription: "PulseChat is a full-stack real-time messaging application built with React.js and Socket.io. It features secure user authentication, live chat updates, typing indicators, and user online status tracking, offering a smooth and responsive communication experience.",
  image: chat,
  technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Tailwind CSS", "JWT Auth"],
  category: "Full Stack",
  status: "Completed",
  link: "https://chatappmern-kj1f.onrender.com",
  github: "https://github.com/Akshat7-maker/chatappMERN",
  features: [
    "Real-time Messaging",
    "Private Chats",
    "Typing Indicator",
    "JWT Authentication",
    // "User Online Status",
    "Responsive UI"
  ],
  timeline: "1.5 month"
}
];

const categories = ["All", "Full Stack", "Frontend", "Backend"];

const cardVariants = {
  offscreen: { y: 60, opacity: 0 },
  onscreen: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.3, duration: 0.8 } },
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "text-green-400 bg-green-400/20";
      case "In Progress": return "text-yellow-400 bg-yellow-400/20";
      default: return "text-gray-400 bg-gray-400/20";
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Full Stack": return <Zap className="w-4 h-4" />;
      case "Frontend": return <Smartphone className="w-4 h-4" />;
      case "Backend": return <Database className="w-4 h-4" />;
      default: return <Code className="w-4 h-4" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative w-screen">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-pink-500/20 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            A showcase of my recent work spanning full-stack development, frontend applications, and backend services
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />

                    {/* Status Badge */}
                    {/* <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </div> */}

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 bg-gray-900/80 backdrop-blur-sm rounded-full text-xs text-purple-300">
                      {getCategoryIcon(project.category)}
                      {project.category}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700/50 text-gray-400 rounded text-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-purple-600/20 text-purple-400 rounded-lg hover:bg-purple-600/30 transition-colors"
                          onClick={(e) => { e.stopPropagation(); window.open(project.link, '_blank'); }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-gray-600/20 text-gray-400 rounded-lg hover:bg-gray-600/30 transition-colors"
                          onClick={(e) => { e.stopPropagation(); window.open(project.github, '_blank'); }}
                        >
                          <Github className="w-4 h-4" />
                        </motion.button>
                      </div>
                      <button className="flex items-center gap-2 text-sm text-purple-400 hover:text-pink-400 transition-colors">
                        <Eye className="w-4 h-4" />
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Project Modal - Moved outside of main container */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            style={{ zIndex: 99999 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
              style={{ zIndex: 100000 }}
              onClick={(e) => e.stopPropagation()}
            >
                <div className="relative h-64">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent" />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-8 h-8 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors text-lg font-bold"
                  >
                    ×
                  </button>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(selectedProject.status)}`}>
                      {selectedProject.status}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature) => (
                          <li key={feature} className="text-gray-300 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-700">
                    <div className="text-sm text-gray-400">
                      Development Time: {selectedProject.timeline}
                    </div>
                    <div className="flex gap-4">
                      <motion.a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium flex items-center gap-2 hover:shadow-lg transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-700 transition-all"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
    </section>
  );
};

export default Projects;