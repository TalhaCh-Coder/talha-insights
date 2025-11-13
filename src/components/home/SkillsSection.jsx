"use client";
import { useEffect } from "react";
import {
   FaCode,
   FaDatabase,
   FaTools,
   FaServer,
   FaMobile,
   FaPalette,
} from "react-icons/fa";

function SkillsSection() {
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

   const skillsData = [
      {
         icon: <FaCode className="text-2xl" />,
         category: "Frontend Engineering",
         skills: [
            { name: "HTML5 & Semantic HTML", level: 95 },
            { name: "CSS3 & Responsive Design", level: 90 },
            { name: "JavaScript (ES6+)", level: 85 },
            { name: "React.js", level: 80 },
            { name: "Next.js", level: 75 },
            { name: "Bootstrap", level: 88 },
            { name: "Tailwind CSS", level: 92 },
         ],
      },
      {
         icon: <FaServer className="text-2xl" />,
         category: "Backend Development",
         skills: [
            { name: "Node.js (Basic)", level: 65 },
            { name: "PostgreSQL", level: 70 },
            { name: "RESTful APIs", level: 75 },
            { name: "Java (OOP)", level: 70 },
            { name: "Data Structures", level: 80 },
            { name: "Algorithms", level: 75 },
         ],
      },
      {
         icon: <FaTools className="text-2xl" />,
         category: "Development Tools",
         skills: [
            { name: "Git & GitHub", level: 85 },
            { name: "VS Code", level: 90 },
            { name: "Problem Solving", level: 88 },
            { name: "Object Oriented Programming", level: 82 },
            { name: "Responsive Web Design", level: 90 },
         ],
      },
   ];

   return (
      <section className="bg-gray-50 py-16 md:py-20">
         <div className="px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
                <div className="flex items-center justify-center pb-4 gap-4 "> 
                  <div className="hidden lg:block bg-[#2C3E50] h-[3px] rounded-full w-20"></div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#2C3E50]">
                     Technical <span className="text-[#3498DB]">Skills</span>
                  </h2>
                  <div className="hidden lg:block bg-[#2C3E50] h-[3px] rounded-full w-20"></div>
               </div>
               <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Comprehensive skill set for building enterprise-grade
                  applications
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
               {skillsData.map((category, categoryIndex) => (
                  <div
                     key={categoryIndex}
                     className="group bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#3498DB] hover:-translate-y-2"
                     data-aos="fade-up"
                     data-aos-delay={categoryIndex * 100}
                  >
                     <div className="flex items-center gap-4 mb-8">
                        <div className="bg-gradient-to-br from-[#2C3E50] to-[#3498DB] p-4 rounded-xl text-white group-hover:from-[#3498DB] group-hover:to-[#2C3E50] transition-all duration-500">
                           {category.icon}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#2C3E50] group-hover:text-[#3498DB] transition-colors duration-500">
                           {category.category}
                        </h3>
                     </div>

                     <div className="space-y-4">
                        {category.skills.map((skill, skillIndex) => (
                           <div
                              key={skillIndex}
                              className="group/item flex items-center justify-between p-4   hover:bg-[#2980B9] transition-all duration-300 border border-gray-200 hover:border-[#3498DB]"
                           >
                              <span className="font-semibold text-[#2C3E50] group-hover/item:text-white transition-colors duration-300 text-sm md:text-base">
                                 {skill.name}
                              </span>
                              <span className="font-bold text-[#3498DB]  bg-blue-50 group-hover/item:bg-white group-hover/item:bg-opacity-20 px-3 py-2 rounded-full transition-all duration-300 text-sm md:text-base">
                                 {skill.level}%
                              </span>
                           </div>
                        ))}
                     </div>
                  </div>
               ))}
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
               {[
                  { number: "50+", label: "Projects Engineered" },
                  { number: "3+", label: "Years Expertise" },
                  { number: "15+", label: "Technologies" },
                  { number: "100%", label: "Quality Focus" },
               ].map((stat, index) => (
                  <div
                     key={index}
                     className="text-center p-6 bg-white  shadow-lg hover:shadow-xl transition-all duration-500 border-2 border-gray-100 hover:border-[#3498DB] hover:-translate-y-1"
                     data-aos="zoom-in"
                     data-aos-delay={index * 100 + 300}
                  >
                     <div className="text-2xl md:text-3xl font-bold text-[#3498DB] mb-2">
                        {stat.number}
                     </div>
                     <div className="text-sm md:text-base text-[#2C3E50] font-semibold">
                        {stat.label}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}

export default SkillsSection;
