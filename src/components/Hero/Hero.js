// import React from 'react';
// import { motion } from 'framer-motion';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
// import './Hero.css';


 


// const Hero = () => {
//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       const offset = 80; // Height of fixed navbar
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - offset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     <section id="hero" className="hero">
//       <div className="hero-content">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="hero-text"
//         >
//           <h1>Hi, I'm <span className="gradient-text">Addisu Agerie</span></h1>
//           <h2>Computer Science Graduate & Web Developer</h2>
//           <p>Turning ideas into interactive realities through code</p>
//           <div className="hero-buttons">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="primary-button"
//               onClick={() => scrollToSection('projects')}
//             >
//               View Projects
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="secondary-button"
//               onClick={() => scrollToSection('contact')}
//             >
//               Contact Me
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>
//       <div className="hero-3d">
//         <Canvas>
//           <OrbitControls enableZoom={false} />
//           <ambientLight intensity={0.5} />
//           <directionalLight position={[3, 2, 1]} />
//           <Sphere args={[1, 100, 200]} scale={2.4}>
//             <MeshDistortMaterial
//               color="#2196f3"
//               attach="material"
//               distort={0.5}
//               speed={2}
//             />
//           </Sphere>
//         </Canvas>
//       </div>
      
//     </section>
//   );
// };

// export default Hero;




import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import './Hero.css';

const FloatingDots = () => {
  const groupRef = useRef();
  const dots = Array.from({ length: 30 }, () => ({
    position: new THREE.Vector3(
      (Math.random() - 0.5) * 4,
      (Math.random() - 0.5) * 4,
      (Math.random() - 0.5) * 4
    ),
    speed: 0.01 + Math.random() * 0.02
  }));

  useFrame(() => {
    if (!groupRef.current) return;
    
    groupRef.current.children.forEach((dot, i) => {
      dot.position.x += Math.sin(dots[i].speed * Date.now() * 0.001) * 0.01;
      dot.position.y += Math.cos(dots[i].speed * Date.now() * 0.001) * 0.01;
      dot.position.z += Math.sin(dots[i].speed * Date.now() * 0.0015) * 0.01;
    });
  });

  return (
    <group ref={groupRef}>
      {dots.map((_, i) => (
        <mesh key={i} position={dots[i].position}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshBasicMaterial color="white" />
        </mesh>
      ))}
    </group>
  );
};

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <h1>Hi, I'm <span className="gradient-text">Addisu Agerie</span></h1>
          <h2>Computer Science Graduate & Web Developer</h2>
          <p>Turning ideas into interactive realities through code</p>
          <div className="hero-buttons">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="primary-button"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="secondary-button"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
      </div>
      <div className="hero-3d">
        <Canvas>
          {/* Original lights and controls (unchanged) */}
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 2, 1]} />
          
          {/* Your original sphere (unchanged) */}
          <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
              color="#2196f3"
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
          
          {/* Only new addition: Floating dots */}
          <FloatingDots />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;