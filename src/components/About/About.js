import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
             My name is Addisu Agerie, a dedicated software developer currently working at INSA (Information Network Security Administration), where I specialize in developing secure, high-performance applications. I prioritize system security, code efficiency, and performance optimization in every project I work on. My work is driven by a passion for building impactful software that solves real-world problems.
            </p>
            <p>
             I hold a BSc in Computer Science from Wolkite University, and I bring a solid background in software development, networking, and database management. I'm certified by Oracle in Database Management Systems and by Huawei in Networking, which strengthens my ability to design robust, scalable, and well-integrated solutions across tech stacks.
            </p>
            <p>
            Throughout my career, I’ve developed a variety of applications—ranging from enterprise tools to custom network solutions—demonstrating strong skills in both frontend and backend development. My technical stack includes languages and frameworks such as Java, Python, JavaScript, React, and SQL, among others.
            </p>
             <p>
              What sets me apart is my commitment to continuous learning and staying ahead of industry trends. I’m deeply interested in areas like cybersecurity, cloud computing, and system architecture. I value teamwork, clean communication, and a results-driven mindset, and I strive to contribute not just as a developer but as a problem solver and innovator.
               </p>
               <p>
                I’m excited to bring my technical expertise, attention to detail, and passion for high-quality software to a forward-thinking team where I can grow and make a meaningful impact.

 </p>

          </div>
          <motion.div 
            className="about-stats"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="stat-item">
              <h3>2+</h3>
              <p>Years of Coding</p>
            </div>
            <div className="stat-item">
              <h3>7+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>8+</h3>
              <p>Technologies</p>
            </div>
            <div className="stat-item">
              <h3>8+</h3>
              <p>months experiance</p>
            </div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
