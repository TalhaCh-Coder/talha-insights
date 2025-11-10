"use client";
import { useEffect } from "react";
import {
   FaGithub,
   FaExternalLinkAlt,
   FaRocket,
   FaChartLine,
} from "react-icons/fa";

function ProjectsSection() {
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

   const projectsData = [
      {
         id: 1,
         title: "E-Commerce Platform",
         description:
            "Engineered a full-stack e-commerce solution with secure payment integration and scalable architecture that processes 1000+ daily transactions.",
         image: "/project1.jpg",
         technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
         githubLink: "https://github.com",
         liveLink: "https://demo.com",
      },
      {
         id: 2,
         title: "Task Management Systen",
         description:
            "Architected a productivity platform with real-time collaboration features that increased team efficiency by 40% through streamlined workflows.",
         image: "/project2.jpg",
         technologies: ["Next.js", "PostgreSQL", "TypeScript", "Prisma"],
         githubLink: "https://github.com",
         liveLink: "https://demo.com",
      },
      {
         id: 3,
         title: "Weather Analytics Dashboard",
         description:
            "Developed a data visualization platform that processes real-time weather APIs to deliver actionable insights with 99.9% uptime.",
         image: "/project3.jpg",
         technologies: ["JavaScript", "API Integration", "Bootstrap"],
         githubLink: "https://github.com",
         liveLink: "https://demo.com",
      },
      {
         id: 4,
         title: "Professional Portfolio Platform",
         description:
            "Built a high-performance portfolio website with optimized SEO and responsive design that achieved 95+ Google PageSpeed score.",
         image: "/project4.jpg",
         technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
         githubLink: "https://github.com",
         liveLink: "https://demo.com",
      },
      {
         id: 5,
         title: "Social Networking Application",
         description:
            "Created a scalable social platform with real-time messaging and advanced user engagement features supporting 10,000+ concurrent users.",
         image: "/project5.jpg",
         technologies: ["React.js", "Firebase", "Material UI", "WebSockets"],
         githubLink: "https://github.com",
         liveLink: "https://demo.com",
      },
      {
         id: 6,
         title: "Content Management System",
         description:
            "Engineered a robust CMS with rich text editing and SEO optimization that reduced content publishing time by 60% for editorial teams.",
         image: "/project6.jpg",
         technologies: ["Next.js", "Sanity CMS", "Tailwind CSS"],
         githubLink: "https://github.com",
         liveLink: "https://demo.com",
      },
   ];

   return (
      <section id="portfolio" className="bg-white py-16 md:py-20 scroll-mt-10">
         <div className="px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
               <div className="flex items-center justify-center pb-4 gap-4 ">
                  <div className="hidden lg:block bg-[#2C3E50] h-[3px] rounded-full w-20"></div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#2C3E50]">
                     My <span className="text-[#3498DB]">Projects</span>
                  </h2>
                  <div className="hidden lg:block bg-[#2C3E50] h-[3px] rounded-full w-20"></div>
               </div>
               <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Enterprise-grade applications engineered to drive business
                  growth and digital transformation
               </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
               {projectsData.map((project, index) => (
                  <div
                     key={project.id}
                     className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#3498DB] hover:-translate-y-2 overflow-hidden"
                     data-aos="fade-up"
                     data-aos-delay={index * 100}
                  >
                     {/* Project Image */}
                     <div className="relative h-48 bg-gradient-to-br from-[#2C3E50] to-[#3498DB] overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center text-white">
                           <div className="text-center">
                              <FaRocket className="text-4xl mb-3 mx-auto" />
                              <div className="text-xl font-bold mb-1">
                                 {project.title.split(" ")[0]}
                              </div>
                              <div className="text-xs opacity-80">
                                 Enterprise Solution
                              </div>
                           </div>
                        </div>
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 flex items-center justify-center gap-4">
                           <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 bg-white text-[#2C3E50] p-3 rounded-full hover:bg-[#3498DB] hover:text-white"
                           >
                              <FaGithub size={20} />
                           </a>
                           <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200 bg-white text-[#2C3E50] p-3 rounded-full hover:bg-[#3498DB] hover:text-white"
                           >
                              <FaExternalLinkAlt size={20} />
                           </a>
                        </div>
                     </div>

                     {/* Project Content */}
                     <div className="p-6">
                        <h3 className="text-xl font-bold text-[#2C3E50] mb-3 group-hover:text-[#3498DB] transition-colors duration-500">
                           {project.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                           {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6">
                           {project.technologies.map((tech, techIndex) => (
                              <span
                                 key={techIndex}
                                 className="bg-[#3498DB] text-white bg-opacity-10 text-[#3498DB] px-3 py-1 rounded-full text-xs font-semibold"
                              >
                                 {tech}
                              </span>
                           ))}
                        </div>

                        {/* Project Links */}
                        <div className="flex gap-6 text-sm border-t border-gray-100 pt-4">
                           <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-[#2C3E50] hover:text-[#3498DB] transition-colors duration-300 font-semibold"
                           >
                              <FaGithub size={16} />
                              Source Code
                           </a>
                           <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-[#2C3E50] hover:text-[#3498DB] transition-colors duration-300 font-semibold"
                           >
                              <FaExternalLinkAlt size={16} />
                              View Solution
                           </a>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12" data-aos="fade-up">
               <button className="bg-gradient-to-r from-[#3498DB] to-[#2980B9] hover:from-[#2980B9] hover:to-[#3498DB] text-white px-10 py-4 rounded-xl font-semibold transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Explore All Solutions
               </button>
            </div>
         </div>
      </section>
   );
}

export default ProjectsSection;
