"use client";
import Image from "next/image";
import { useEffect } from "react";

function HomeHero() {
   useEffect(() => {
      import("aos").then((AOS) => {
         AOS.init({
            duration: 800,
            once: true,
            offset: 50,
            easing: "ease-out",
            disable: window.innerWidth < 768,
         });
      });
   }, []);

   return (
      <section
         id="home"
         className="lg:min-h-screen bg-[#1A252F] w-full flex items-center justify-center pt-30 pb-15 md:pt-30 md:pb-15 lg:pt-10 lg:pb-0"
      >
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 overflow-hidden w-[90%]">
            {/* LEFT COLUMN */}
            <div className="order-2 lg:order-1 items-center flex justify-center lg:justify-end items-center lg:pr-6">
               <div className="w-[90%] max-w-md py-8 px-4 md:px-0">
                  <h1
                     className="text-[2.5rem] text-white md:text-[3rem] leading-[3rem] md:leading-[3.5rem] text-center lg:text-left mb-6 md:mb-8 font-bold"
                     data-aos="fade-right"
                     data-aos-delay="200"
                  >
                     Talha <span className="text-[#3498db]">Ahmed</span>
                  </h1>
                  <p
                     className="ml-0 md:ml-2 text-lg md:text-xl text-gray-300 text-center lg:text-left tracking-wide"
                     data-aos="fade-right"
                     data-aos-delay="300"
                  >
                     Full Stack Developer Engineering Digital Excellence
                  </p>
                  <p
                     className="ml-0 md:ml-2 mt-4 mb-8 md:mb-14 tracking-wide md:tracking-widest text-center lg:text-justify text-gray-400 text-sm md:text-base"
                     data-aos="fade-right"
                     data-aos-delay="400"
                  >
                     I engineer scalable web solutions that drive business
                     growth through cutting-edge technologies. Specializing in
                     building high-performance applications that deliver
                     exceptional user experiences and measurable results.
                  </p>
                  <div
                     className="text-center lg:text-left"
                     data-aos="fade-right"
                     data-aos-delay="500"
                  >
                     <button
                        onClick={() =>
                           document
                              .getElementById("portfolio")
                              .scrollIntoView({ behavior: "smooth" })
                        }
                        className="bg-[#3498db] ml-0 md:ml-2 px-8 py-3 md:py-4 inline-block hover:bg-[#2980b9] transition-all duration-300 transform hover:scale-105 rounded-lg text-white font-semibold shadow-lg hover:shadow-xl"
                     >
                        Explore My Projects
                     </button>
                  </div>
               </div>
            </div>

            {/* RIGHT COLUMN - Same styling maintained */}
            <div className="order-1 lg:order-2 flex items-center justify-center">
               <div
                  className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-[#3498db] rounded-full flex items-center justify-center border-4 border-[#3498DB] shadow-2xl mx-auto"
                  data-aos="fade-left"
                  data-aos-delay="300"
               >
                  <Image
                     src="/Talha.png"
                     alt="Talha Ahmed - Full Stack Developer"
                     width={384}
                     height={384}
                     className="w-full rounded-full h-full object-cover"
                     priority
                  />
               </div>
            </div>
         </div>
      </section>
   );
}

export default HomeHero;
