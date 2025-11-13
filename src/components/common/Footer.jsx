"use client";
import {
   FaGithub,
   FaLinkedin,
   FaEnvelope,
   FaPhone,
   FaMapMarkerAlt,
   FaHeart,
} from "react-icons/fa";
import { useEffect } from "react";

function Footer() {
   useEffect(() => {
      const initAOS = async () => {
         const AOS = (await import("aos")).default;
         AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: true,
            offset: 100,
            disable: window.innerWidth < 1024,
         });
      };
      initAOS();
   }, []);

   const socialLinks = [
      {
         id: 0,
         name: "GitHub",
         url: "https://github.com",
         icon: <FaGithub size={20} />,
      },
      {
         id: 1,
         name: "LinkedIn",
         url: "https://linkedin.com",
         icon: <FaLinkedin size={20} />,
      },
   ];

   const contactInfo = [
      {
         id: 0,
         icon: <FaEnvelope size={18} />,
         text: "talhaahmeduni022@email.com",
         link: "mailto:talhaahmeduni022@email.com",
      },
      {
         id: 1,
         icon: <FaPhone size={18} />,
         text: "+92 321 1723306",
         link: "tel:+923211723306",
      },
      {
         id: 2,
         icon: <FaMapMarkerAlt size={18} />,
         text: "BWP, Pakistan",
         link: "#",
      },
   ];

   return (
      <footer className="bg-[#1A252F] text-white">
         {/* Main Footer Content */}
         <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-16">
            {/* Top Section - Brand & Contact */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
               {/* Left - Brand & Social */}
               <div className="text-center lg:text-left" data-aos="fade-right">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">
                     Talha <span className="text-[#3498db]">Ahmed</span>
                  </h1>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md mx-auto lg:mx-0">
                     Full Stack Developer creating modern web solutions with
                     cutting-edge technologies
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center lg:justify-start gap-4">
                     {socialLinks.map((social, index) => (
                        <a
                           key={social.id}
                           href={social.url}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="bg-[#2C3E50] hover:bg-[#3498db] p-4 transition-all duration-300 "
                           data-aos="zoom-in"
                           data-aos-delay={300 + index * 100}
                        >
                           {social.icon}
                        </a>
                     ))}
                  </div>
               </div>

               {/* Right - Contact Info */}
               <div className="text-center lg:text-left" data-aos="fade-left">
                  <h2 className="text-2xl font-bold text-[#3498db] mb-8">
                     Let&apos;s Work Together
                  </h2>

                  <div className="space-y-4 max-w-sm mx-auto lg:mx-0">
                     {contactInfo.map((contact, index) => (
                        <a
                           key={contact.id}
                           href={contact.link}
                           className="flex items-center gap-4 p-4 bg-[#2C3E50] hover:bg-[#3498db] transition-all duration-300 group"
                           data-aos="fade-up"
                           data-aos-delay={400 + index * 100}
                        >
                           <div className="bg-[#1A252F] p-3 rounded-lg text-[#3498db] group-hover:text-white transition-colors duration-300">
                              {contact.icon}
                           </div>
                           <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                              {contact.text}
                           </span>
                        </a>
                     ))}
                  </div>
               </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#2C3E50] my-8"></div>

            {/* Bottom Section - Copyright */}
            <div className="text-center" data-aos="fade-up">
               <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <p className="text-gray-400 text-sm">
                     © {new Date().getFullYear()} Talha Ahmed. All rights
                     reserved.
                  </p>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                     <span>
                        Made with great efforts using Next.js & Tailwind CSS
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
