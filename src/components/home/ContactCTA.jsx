"use client";
import { useEffect } from "react";
import {
   FaEnvelope,
   FaPhone,
   FaMapMarkerAlt,
   FaPaperPlane,
   FaRocket,
   FaHandshake,
} from "react-icons/fa";

function ContactCTA() {
   useEffect(() => {
      const initAOS = async () => {
         if (typeof window !== "undefined") {
            const AOS = (await import("aos")).default;
            AOS.init({
               duration: 800,
               easing: "ease-out-cubic",
               once: true,
               offset: 100,
               disable: window.innerWidth < 768,
            });
         }
      };
      initAOS();
   }, []);

   const contactInfo = [
      {
         icon: <FaEnvelope className="text-2xl" />,
         title: "Business Inquiries",
         value: "talhaahmeduni022@email.com",
         link: "mailto:talhaahmeduni022@email.com",
      },
      {
         icon: <FaPhone className="text-2xl" />,
         title: "Project Discussion",
         value: "+92 321 1723306",
         link: "tel:+923211723306",
      },
      {
         icon: <FaMapMarkerAlt className="text-2xl" />,
         title: "Service Area",
         value: "Available Worldwide",
         link: "#",
      },
   ];

   return (
      <section id="contact" className="bg-gray-50 py-16 md:py-20 scroll-mt-10">
         <div className="px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
                <div className="flex items-center justify-center pb-4 gap-4 "> 
                  <div className="hidden lg:block bg-[#2C3E50] h-[3px] rounded-full w-20"></div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#2C3E50]">
                     Start Your <span className="text-[#3498DB]">Project</span>
                  </h2>
                  <div className="hidden lg:block bg-[#2C3E50] h-[3px] rounded-full w-20"></div>
               </div>
               <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Let&apos;s collaborate to transform your vision into a
                  high-performance digital solution
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
               {/* Left Side - Contact Info */}
               <div className="space-y-6" data-aos="fade-right">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#2C3E50] text-center md:text-left">
                     Strategic{" "}
                     <span className="text-[#3498DB]">Partnership</span>
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8 text-center md:text-left">
                     I partner with forward-thinking businesses to architect
                     digital solutions that drive growth, enhance user
                     experiences, and deliver measurable ROI. Let&apos;s discuss how
                     we can bring your project to life.
                  </p>

                  {/* Contact Information */}
                  <div className="space-y-4">
                     {contactInfo.map((contact, index) => (
                        <a
                           key={index}
                           href={contact.link}
                           className="group flex items-center gap-4 p-6 bg-white rounded-2xl hover:bg-gradient-to-r hover:from-[#3498DB] hover:to-[#2980B9] transition-all duration-500 border-2 border-gray-100 hover:border-[#3498DB] hover:-translate-y-1 shadow-lg hover:shadow-xl"
                           data-aos="fade-up"
                           data-aos-delay={index * 100}
                        >
                           <div className="bg-[#2C3E50] p-4 rounded-xl text-white group-hover:bg-white group-hover:text-[#2C3E50] transition-colors duration-500">
                              {contact.icon}
                           </div>
                           <div>
                              <h4 className="font-bold text-[#2C3E50] group-hover:text-white transition-colors duration-500 text-lg">
                                 {contact.title}
                              </h4>
                              <p className="text-gray-600 group-hover:text-white transition-colors duration-500">
                                 {contact.value}
                              </p>
                           </div>
                        </a>
                     ))}
                  </div>
               </div>

               {/* Right Side - Contact Form */}
               <div
                  className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100"
                  data-aos="fade-left"
               >
                  <div className="flex items-center gap-3 mb-6">
                     <FaHandshake className="text-2xl text-[#3498DB]" />
                     <h3 className="text-2xl font-bold text-[#2C3E50]">
                        Project{" "}
                        <span className="text-[#3498DB]">Consultation</span>
                     </h3>
                  </div>

                  <form className="space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                           <label className="block text-[#2C3E50] font-semibold mb-2">
                              Full Name
                           </label>
                           <input
                              type="text"
                              className="text-[#2c3e50] w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#3498DB] placeholder:text-gray-400 transition-colors duration-300"
                              placeholder="Enter your name"
                           />
                        </div>
                        <div>
                           <label className="block text-[#2C3E50] font-semibold mb-2">
                              Business Email
                           </label>
                           <input
                              type="email"
                              className="text-[#2c3e50] w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#3498DB] placeholder:text-gray-400 transition-colors duration-300"
                              placeholder="your@company.com"
                           />
                        </div>
                     </div>

                     <div>
                        <label className="block text-[#2C3E50] font-semibold mb-2">
                           Project Scope
                        </label>
                        <input
                           type="text"
                           className="text-[#2c3e50] w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#3498DB] placeholder:text-gray-400 transition-colors duration-300"
                           placeholder="Describe your project requirements"
                        />
                     </div>

                     <div>
                        <label className="block text-[#2C3E50] font-semibold mb-2">
                           Project Details
                        </label>
                        <textarea
                           rows="5"
                           className="text-[#2c3e50] w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#3498DB] placeholder:text-gray-400 transition-colors duration-300 resize-none"
                           placeholder="Tell me about your business goals and technical requirements..."
                        ></textarea>
                     </div>

                     <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#3498DB] to-[#2980B9] hover:from-[#2980B9] hover:to-[#3498DB] text-white py-4 rounded-xl font-semibold transition-all duration-500 transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                     >
                        <FaPaperPlane />
                        Discuss Project
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
}

export default ContactCTA;
