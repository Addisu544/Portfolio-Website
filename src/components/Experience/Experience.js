import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experienceData = {
  experiance: [
    {
      id: 1,
      title: 'Fullsatck Developer',
      institution: 'INSA - Information Network Security Agency',
      period: 'Late 2024 - Present',
      description: 'Developing and maintaining secure, high-performance web applications. Collaborating with cross-functional teams to deliver scalable solutions that meet user needs and optimize system performance.'
    }
  ], education: [
    {
      id: 1,
      title: 'Bachelor of Science in Computer Science',
      institution: 'Wolkite University',
      period: '2020 - 2024',
      description: 'Graduated with a strong foundation in computer science fundamentals, programming languages, networking and software development.'
    }
  ],
  certifications: [
    {
      id: 1,
      title: 'Oracle Academy Database Foundations',
      issuer: 'Oracle',
      date: '2022',
      credential: 'View Credential',
      pdfUrl: '/oracle.pdf'
    },
    {
      id: 2,
      title: 'React Development',
      issuer: 'Programming Hub',
      date: '2024',
      credential: 'View Credential',
      pdfUrl: '/react.pdf'
    },
    {
      id: 3,
      title: 'Node.js',
      issuer: 'Programming Hub',
      date: '2024',
      credential: 'View Credential',
      pdfUrl: '/Node JS.pdf'
    },
    {
      id: 4,
      title: 'Huawei Certified ICT Associate - HCIA Datacom',
      issuer: 'Huawei',
      date: '2023',
      credential: 'View Credential',
      pdfUrl: '/Huawei.pdf'
    },
    {
      id: 5,
      title: 'Cyber Security',
      issuer: 'Programming Hub',
      date: '2024',
      credential: 'View Credential',
      pdfUrl: '/Cyber Security.pdf'
    }
  ],
  activities: [
    {
      id: 1,
      title: 'Software Developer',
      role: ' Developer',
      period: '2025',
      description: 'Contributed to the development and maintenance of projects.'
    },
    {
      id: 2,
      title: 'College Projects',
      role: 'Lead Developer',
      period: '2020 - 2024',
      description: 'Participat and lead competitive programming challenges and improved problem-solving skills.'
    }
  ]
};

const TimelineItem = ({ data, index }) => {
  return (
    <motion.div 
      className="timeline-item"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="timeline-content">
        <h3>{data.title}</h3>
        <h4>{data.institution || data.issuer || data.role}</h4>
        <p className="timeline-period">{data.period || data.date}</p>
        {data.description && <p className="timeline-description">{data.description}</p>}
        {data.credential && (
          <a href={data.pdfUrl || "#"} target="_blank" rel="noopener noreferrer" className="credential-link">
            <i className="pi pi-external-link"></i>
            {data.credential}
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Experience & Education</h2>

      
        <div className="timeline-section">
          <h3 className="subsection-title">Experiance</h3>
          <div className="timeline">
            {experienceData.experiance.map((item, index) => (
              <TimelineItem key={item.id} data={item} index={index} />
            ))}
          </div>
        </div>
      
      
       

        <div className="timeline-section">
          <h3 className="subsection-title">Activities & Projects</h3>
          <div className="timeline">
            {experienceData.activities.map((item, index) => (
              <TimelineItem key={item.id} data={item} index={index} />
            ))}
          </div>
        </div>


 <div className="timeline-section">
          <h3 className="subsection-title">Education</h3>
          <div className="timeline">
            {experienceData.education.map((item, index) => (
              <TimelineItem key={item.id} data={item} index={index} />
            ))}
          </div>
        </div>



        <div className="certifications-section">
          <h3 className="subsection-title">Certifications</h3>
          <div className="certifications-grid">
            {experienceData.certifications.map((cert) => (
              <motion.div 
                key={cert.id}
                className="certification-card"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h4>{cert.title}</h4>
                <p>{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
                <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer" className="cert-link">
                  <i className="pi pi-external-link"></i>
                  View Credential
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
