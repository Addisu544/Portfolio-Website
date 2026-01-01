import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import "./Projects.css";

const projectsData = [
  {
    id: 1,
    title: "Hotel Booking Management System",
    description:
      "This hotel booking management system is a comprehensive software solution that empowers hotels and accommodation providers to efficiently manage their booking operations. With its user-friendly interface and robust functionality, the system simplifies the entire reservation process, ensuring a seamless experience for both guests and hotel staff.Features include room management, reservation handling, customer profiles, and payment processing.",
    technologies: ["React", "Node.js", "MySQL", "Express.js"],
    image: "./project1.jpg",
    github: "https://github.com/Addisu544/booking.git",
    // demo: 'https://school-management-demo.com',
    live: false,
    soonlive: true,
  },
  {
    id: 2,
    title: "Food Ordering Application",
    description:
      "A user-friendly food ordering web app built with Node.js and React. It allows customers to browse a diverse menu, customize their orders, and make secure payments. Features include real-time order tracking and user accounts for easy reordering. This app enhances the dining experience for customers while providing restaurants with efficient management tools.",
    technologies: ["React", "Node.js", "MySQL", "Express.js"],
    image: "/project2.jpg",
    github: "https://github.com/Addisu544/online-pizza-ordering.git",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Modern portfolio website built with React, Three.js, and Framer Motion. Features 3D animations and interactive elements.",
    technologies: ["React", "Three.js", "Framer Motion", "CSS3"],
    image: "/project3.jpg",
    github: "https://github.com/Addisu544/Portfolio-Website.git",
    demo: "https://addisu544.netlify.app/",
    live: true,
  },
  {
    id: 4,
    title: "Chat Application",
    description:
      "This is a real-time chat app where people can join chat rooms and send messages instantly. You can also share images and chat with friends or groups. The backend uses some service providers to keep it running. It's good for both personal and work chatting.",
    technologies: ["React"],
    image: "/project3.jpg",
    github: "https://github.com/Addisu544/chat-app.git",
    demo: "https://mine-messenger.netlify.app/",
    live: true,
  },
  {
    id: 5,
    title: "Movies Hub",
    description:
      "A dynamic movie search engine where users can look up films by title, genre, or actor and see details like ratings, reviews, and trailers. It includes watchlists and personalized recommendations. The app uses backend services to handle data, making it easy for movie fans to discover and keep track of their favorites.",
    technologies: ["React"],
    image: "/project3.jpg",
    github: "https://github.com/Addisu544/MovieHub.git",
    demo: "https://moviehub544.netlify.app",
    live: true,

    // soonlive: true
  },
  {
    id: 6,
    title: "Online Voting System",
    description:
      "An efficient online voting system designed to facilitate secure and transparent elections. Users can register, cast their votes, and view real-time results in a user-friendly interface. Features include voter authentication, anonymous voting, and detailed analytics for administrators. This system enhances accessibility and integrity in the voting process, making it ideal for organizations and communities.",
    technologies: ["Java", "MySQL"],
    image: "/project3.jpg",
    github: "https://github.com/Addisu544/Online_Voting_System.git",
  },
];

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onClick={() => onClick(project)}
      whileHover={{ scale: 1.05 }}
    >
      <div className="project-content">
        <div className="project-header">
          <h3>{project.title}</h3>
          {project.live && (
            <span className="live-badge">
              <span className="live-dot"></span>
              LIVE
            </span>
          )}
          {project.soonlive && (
            <span className="live-badge">
              <span className="live-dot"></span>
              Live Soon
            </span>
          )}
        </div>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="project-links">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <i className="pi pi-github"></i>
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <i className="pi pi-external-link"></i>
          </a>
        )}
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      className="project-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="project-modal"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>
          <i className="pi pi-times"></i>
        </button>
        <div className="modal-content">
          <div className="modal-header">
            <h2>{project.title}</h2>
            {project.live && (
              <span className="live-badge large">
                <span className="live-dot"></span>
                LIVE
              </span>
            )}
            {project.soonlive && (
              <span className="live-badge large">
                <span className="live-dot"></span>
                Live Soon
              </span>
            )}
          </div>
          <p>{project.description}</p>
          <div className="project-tech">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
          <div className="project-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <i className="pi pi-github"></i>
                View Source
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <i className="pi pi-external-link"></i>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
