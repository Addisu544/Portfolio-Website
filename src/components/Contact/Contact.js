// import React, { useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Toast } from 'primereact/toast';
// import emailjs from '@emailjs/browser';
// import './Contact.css';

// const socialLinks = [
//   {
//     name: 'LinkedIn',
//     icon: 'pi pi-linkedin',
//     url: 'www.linkedin.com/in/addisu544'
//   },
//   {
//     name: 'Twitter',
//     icon: 'pi pi-twitter',
//     url: 'https://x.com/addisu544'
//   },
//   {
//     name: 'Telegram',
//     icon: 'pi pi-telegram',
//     url: '@addisu544'
//   },
//   {
//     name: 'Email',
//     icon: 'pi pi-envelope',
//     url: 'mailto:addisuagerie544@gmail.com'
//   }
// ];

// const Contact = () => {
//   const form = useRef();
//   const toast = useRef(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const showToast = (severity, summary, detail) => {
//     toast.current.show({ severity, summary, detail, life: 3000 });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const result = await emailjs.sendForm(
//         'service_2365xug',
//         'template_2gedu9n',
//         form.current,
//         'rV_Mn87v0mlONLPB'
//       );

//       if (result.text === 'OK') {
//         showToast('success', 'Success', 'Message sent successfully!');
//         form.current.reset();
//       }
//     } catch (error) {
//       showToast('error', 'Error', 'Failed to send message. Please try again.');
//     }

//     setIsSubmitting(false);
//   };

//   return (
//     <section id="contact" className="contact">
//       <Toast ref={toast} />
      
      // <motion.div
      //   initial={{ opacity: 0, y: 20 }}
      //   whileInView={{ opacity: 1, y: 0 }}
      //   transition={{ duration: 0.8 }}
      //   viewport={{ once: true }}
      //   className="contact-container"
      // >
      //   <h2 className="section-title">Get In Touch</h2>

      //   <div className="contact-content">
      //     <motion.div 
      //       className="contact-info"
      //       initial={{ opacity: 0, x: -50 }}
      //       whileInView={{ opacity: 1, x: 0 }}
      //       transition={{ duration: 0.8, delay: 0.2 }}
      //       viewport={{ once: true }}
      //     >
      //       <h3>Let's Connect</h3>
      //       <p>
      //         I'm always open to new opportunities and collaborations. 
      //         Feel free to reach out if you'd like to work together or 
      //         just want to say hello!
      //       </p>

      //       <div className="contact-details">
      //         <div className="contact-item">
      //           <i className="pi pi-phone"></i>
      //           <span>+251 900 928 555</span>
      //         </div>
      //         <div className="contact-item">
      //           <i className="pi pi-envelope"></i>
      //           <span>addisuagerie544@gmail.com</span>
      //         </div>
      //         <div className="contact-item">
      //           <i className="pi pi-map-marker"></i>
      //           <span>Addis Ababa, Ethiopia</span>
      //         </div>
      //       </div>

      //       <div className="social-links">
      //         {socialLinks.map((link, index) => (
      //           <motion.a
      //             key={index}
      //             href={link.url}
      //             target="_blank"
      //             rel="noopener noreferrer"
      //             whileHover={{ scale: 1.2 }}
      //             whileTap={{ scale: 0.9 }}
      //           >
      //             <i className={link.icon}></i>
      //           </motion.a>
      //         ))}
      //       </div>
      //     </motion.div>

      //     <motion.div 
      //       className="contact-form-container"
      //       initial={{ opacity: 0, x: 50 }}
      //       whileInView={{ opacity: 1, x: 0 }}
      //       transition={{ duration: 0.8, delay: 0.2 }}
      //       viewport={{ once: true }}
      //     >
      //       <form ref={form} onSubmit={handleSubmit} className="contact-form">
      //         <div className="form-group">
      //           <motion.input
      //             whileFocus={{ scale: 1.02 }}
      //             type="text"
      //             name="user_name"
      //             placeholder="Your Name"
      //             required
      //           />
      //         </div>
      //         <div className="form-group">
      //           <motion.input
      //             whileFocus={{ scale: 1.02 }}
      //             type="email"
      //             name="user_email"
      //             placeholder="Your Email"
      //             required
      //           />
      //         </div>
      //         <div className="form-group">
      //           <motion.input
      //             whileFocus={{ scale: 1.02 }}
      //             type="text"
      //             name="subject"
      //             placeholder="Subject"
      //             required
      //           />
      //         </div>
      //         <div className="form-group">
      //           <motion.textarea
      //             whileFocus={{ scale: 1.02 }}
      //             name="message"
      //             placeholder="Your Message"
      //             required
      //             rows="5"
      //           />
      //         </div>
      //         <motion.button
      //           type="submit"
      //           disabled={isSubmitting}
      //           whileHover={{ scale: 1.05 }}
      //           whileTap={{ scale: 0.95 }}
      //           className="submit-button"
      //         >
      //           {isSubmitting ? (
      //             <i className="pi pi-spin pi-spinner"></i>
      //           ) : (
      //             'Send Message'
      //           )}
      //         </motion.button>
      //       </form>
      //     </motion.div>
      //   </div>
      // </motion.div>
//     </section>
//   );
// };

// export default Contact;



import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Toast } from 'primereact/toast';
import emailjs from '@emailjs/browser';
import './Contact.css';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: 'pi pi-linkedin',
    url: 'www.linkedin.com/in/addisu544'
  },
  {
    name: 'Twitter',
    icon: 'pi pi-twitter',
    url: 'https://x.com/addisu544'
  },
  {
    name: 'Telegram',
    icon: 'pi pi-telegram',
    url: '@addisu544'
  },
  {
    name: 'Email',
    icon: 'pi pi-envelope',
    url: 'mailto:addisuagerie544@gmail.com'
  }
];

const Contact = () => {
  const form = useRef();
  const toast = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showToast = (severity, summary, detail) => {
    toast.current.show({ severity, summary, detail, life: 3000 });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // try {
    //   const result = await emailjs.sendForm(
    //     'service_kmh9iad',    // Updated Service ID
    //     'template_qpatrbf',    // Updated Template ID
    //     form.current,
    //     'ZD22_SHsZzzBOaH6v'    // Updated Public Key (User ID)
    //   );

    //   try {
    // const result = await emailjs.sendForm(
    //   process.env.REACT_APP_EMAILJS_SERVICE_ID,
    //   process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    //   form.current,
    //   process.env.REACT_APP_EMAILJS_USER_ID
    // );

    //   // if (result.status === 200) {
    //     showToast('success', 'Success', 'Message sent successfully!');
    //   //   form.current.reset();
    //   // }
    // }
    
    
    
    
    
    try {
  // This line calls the function and waits for it to complete.
  // The email will be sent at this point.
  await emailjs.sendForm(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    form.current,
    process.env.REACT_APP_EMAILJS_USER_ID
  );

  // If the 'await' line above finishes successfully, this code runs.
  showToast('success', 'Success', 'Message sent successfully!');

}catch (error) {
      console.error('EmailJS Error:', error);
      showToast('error', 'Error', 'Failed to send message. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="contact">
      <Toast ref={toast} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="contact-container"
      >
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Let's Connect</h3>
            <p>
              I'm always open to new opportunities and collaborations. 
              Feel free to reach out if you'd like to work together or 
              just want to say hello!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <i className="pi pi-phone"></i>
                <span>+251 900 928 555</span>
              </div>
              <div className="contact-item">
                <i className="pi pi-envelope"></i>
                <span>addisuagerie544@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="pi pi-map-marker"></i>
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>

            <div className="social-links">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={link.icon}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form ref={form} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  placeholder="Your Message"
                  required
                  rows="5"
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="submit-button"
              >
                {isSubmitting ? (
                  <i className="pi pi-spin pi-spinner"></i>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
      {/* ... (keep all your existing JSX markup exactly the same) ... */}
    </section>
  );
};

export default Contact;