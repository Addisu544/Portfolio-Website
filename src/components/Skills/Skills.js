import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillsData = {
  'Programming Languages': [
    { name: 'JavaScript', level: 97 },
    { name: 'TypeScript', level: 60 },
    {  name: 'C#', level: 70 },
    // { name: 'Java', level: 70 },
    // { name: 'C++', level: 75 },
    // { name: 'PHP', level: 70 },
      { name: 'SQL', level: 90 },  
       { name: 'Bash/Shell', level: 65 }, 
  ],
  'Web Technologies': [
    { name: 'React', level: 92 },
    { name: 'Node.js', level: 90 },
    // { name: 'Express.js', level: 90 },
    // { name: 'HTML/CSS', level: 99 },
      { name: 'REST APIs', level: 90 },
      // { name: 'Redux', level: 80 }, 
        { name: '.NET Core', level: 65 },
          { name: 'Bootstrap', level: 70 }, 
  ],
  'Development Tools': [
    { name: 'VS Code', level: 95 },
      { name: 'npm', level: 90 },  
    { name: 'Git', level: 85 },
      { name: 'Chrome DevTools', level: 85 },
       { name: 'Docker', level: 70 },
  //  { name: 'Postman', level: 85 },    
// { name: 'CI/CD Pipelines', level: 80 },  
    //  { name: 'Visual Studio', level: 75 },
   
    { name: "MySQL/PostgreSQL/MS SQL",level: 90 },            
//  { name: 'PostgreSQL',level: 85 },      
//     { name: "MS SQL",level: 85 } 
  ],
};

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Skills & Expertise</h2>
        
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(skillsData).map(([category, skills]) => (
            <motion.div 
              key={category}
              className="skills-category"
              variants={itemVariants}
            >
              <h3>{category}</h3>
              <div className="skills-list">
                {skills.map((skill) => (
                  <motion.div 
                    key={skill.name}
                    className="skill-item"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
