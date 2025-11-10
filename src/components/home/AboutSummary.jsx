"use client";
import { useEffect } from "react";
import { FaUser, FaGraduationCap, FaLightbulb, FaRocket } from "react-icons/fa";

function AboutSummary() {
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

   const aboutPoints = [
      {
         icon: <FaRocket className="text-2xl" />,
         title: "Solution Architecture",
         description:
            "Designing and implementing scalable web architectures that handle complex business requirements and drive digital transformation.",
      },
      {
         icon: <FaLightbulb className="text-2xl" />,
         title: "Innovation Focus",
         description:
            "Leveraging cutting-edge technologies to create innovative solutions that solve real-world problems and deliver competitive advantages.",
      },
      {
         icon: <FaGraduationCap className="text-2xl" />,
         title: "Technical Excellence",
         description:
            "Committed to writing clean, maintainable code and following industry best practices for robust, production-ready applications.",
      },
      {
         icon: <FaUser className="text-2xl" />,
         title: "Client Success",
         description:
            "Partnering with businesses to understand their unique challenges and deliver tailored solutions that exceed expectations.",
      },
   ];

   return (
      <section id="about" className="bg-white py-16 md:py-20 scroll-mt-10">
         <div className="px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
               <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#2C3E50] mb-4 flex items-center justify-center gap-4">
                  <div className="hidden lg:block bg-[#2C3E50] h-[3px] rounded-full w-20"></div>
                  <span>
                     About{" "}
                     <span className="text-[#3498DB]">Me</span>
                  </span>
                  <div className="hidden lg:block bg-[#2C3E50] h-[3px] rounded-full w-20"></div>
               </h2>
               <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Strategic development methodology focused on delivering
                  business value
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
               {/* Left Side - Text Content */}
               <div className="space-y-6" data-aos="fade-right">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#2C3E50] text-center md:text-left">
                     Engineering{" "}
                     <span className="text-[#3498DB]">Digital Excellence</span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg text-center md:text-left">
                     I specialize in architecting and developing
                     enterprise-grade web solutions that transform business
                     challenges into technological opportunities. With expertise
                     across the full development stack, I deliver robust
                     applications that scale with your business growth.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg text-center md:text-left">
                     My approach combines technical proficiency with strategic
                     thinking, ensuring every project not only meets technical
                     specifications but also drives tangible business outcomes
                     and user satisfaction.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6 pt-6">
                     <div className="text-center bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl md:text-3xl font-bold text-[#3498DB]">
                           50+
                        </div>
                        <div className="text-[#2C3E50] font-medium">
                           Solutions Delivered
                        </div>
                     </div>
                     <div className="text-center bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl md:text-3xl font-bold text-[#3498DB]">
                           100%
                        </div>
                        <div className="text-[#2C3E50] font-medium">
                           Client Satisfaction
                        </div>
                     </div>
                  </div>
               </div>

               {/* Right Side - Feature Points */}
               <div className="space-y-6" data-aos="fade-left">
                  {aboutPoints.map((point, index) => (
                     <div
                        key={index}
                        className="group flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-[#3498DB]"
                     >
                        <div className="bg-[#2C3E50] p-3 rounded-lg text-white group-hover:bg-white group-hover:text-[#2C3E50] transition-all duration-500  flex-shrink-0">
                           {point.icon}
                        </div>
                        <div>
                           <h4 className="text-xl font-bold text-[#2C3E50] group-hover:text-white transition-all duration-500 mb-2">
                              {point.title}
                           </h4>
                           <p className="text-gray-600 group-hover:text-white leading-relaxed transition-all duration-500">
                              {point.description}
                           </p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}

export default AboutSummary;
