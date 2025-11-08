"use client";
import {
   FaBars,
   FaHome,
   FaLaptopCode,
   FaPhone,
   FaTimes,
   FaUser,
   FaDownload,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";

function NavBar() {
   const [isOpen, setState] = useState(false);

   useEffect(() => {
      const initAOS = async () => {
         if (typeof window !== "undefined") {
            const AOS = (await import("aos")).default;
            AOS.init({
               duration: 800,
               easing: "ease-in-out",
               once: true,
               offset: 100,
               disable: window.innerWidth < 768,
            });
         }
      };
      initAOS();
   }, []);

   const handleClick = () => {
      setState(!isOpen);
   };

   // Smooth scroll function
   const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
         element.scrollIntoView({
            behavior: "smooth",
            block: "start",
         });
      }
      setState(false); // Close mobile menu
   };

   const navItems = [
      {
         id: 0,
         name: "Home",
         section: "home",
         icon: (
            <FaHome className="text-sm mb-[1px] group-hover:text-[#3498db]" />
         ),
      },
      {
         id: 1,
         name: "About",
         section: "about",
         icon: (
            <FaUser className="text-sm mb-[4px] group-hover:text-[#3498db]" />
         ),
      },
      {
         id: 2,
         name: "Portfolio",
         section: "portfolio",
         icon: (
            <FaLaptopCode className="text-sm mb-[2px] group-hover:text-[#3498db]" />
         ),
      },
      {
         id: 3,
         name: "Contact",
         section: "contact",
         icon: (
            <FaPhone className="text-sm mb-[4px] group-hover:text-[#3498db]" />
         ),
      },
   ];

   return (
      <>
         {/* Mobile NavBar */}
         <div className="bg-[#2c3e50] fixed w-full top-0 md:hidden z-60 shadow-lg">
            <nav className="bg-[#2c3e50] flex items-center p-6">
               <div className="flex items-center w-[75%] text-xl">
                  <button
                     onClick={() => scrollToSection("home")}
                     className="text-white hover:text-[#3498db] transition-colors font-bold"
                  >
                     Talha <span className="text-[#3498db]">Ahmed</span>
                  </button>
               </div>
               <div className="flex items-center justify-end w-[25%]">
                  {isOpen ? (
                     <FaTimes
                        className="text-white hover:text-[#3498db] cursor-pointer transition-colors"
                        size={20}
                        onClick={handleClick}
                     />
                  ) : (
                     <FaBars
                        className="text-white hover:text-[#3498db] cursor-pointer transition-colors"
                        size={20}
                        onClick={handleClick}
                     />
                  )}
               </div>
            </nav>
            <div
               className={`${
                  isOpen ? "block" : "hidden"
               } bg-[#2c3e50] p-4 pt-0 transition-all duration-300`}
            >
               <div className="bg-gray-800 flex flex-col items-center gap-6 py-6 rounded-sm">
                  {navItems.map((item, index) => {
                     return (
                        <button
                           key={item.id}
                           onClick={() => scrollToSection(item.section)}
                           className="flex items-center gap-2 text-white hover:text-[#3498db] transition-colors duration-300 w-full justify-center"
                        >
                           {item.icon}
                           {item.name}
                        </button>
                     );
                  })}
                  <Link
                     href="/Talha-Ahmed.pdf"
                     download="Talha-Ahmed.pdf"
                     className="flex w-full px-8"
                     passHref
                  >
                     <button className="bg-[#3498db] w-full px-4 py-3 rounded-sm hover:bg-[#2980b9] transition-colors duration-300 cursor-pointer text-white font-semibold">
                        Download CV
                     </button>
                  </Link>
               </div>
            </div>
         </div>

         {/* Desktop NavBar */}
         <nav className="hidden md:flex bg-[#2c3e50] md:px-10 py-4 fixed top-0 w-full z-60 shadow-lg">
            <div className="w-[22%] flex items-center">
               <button
                  onClick={() => scrollToSection("home")}
                  className="text-[1.5rem] font-bold text-white hover:text-[#3498db] transition-colors duration-300"
               >
                  Talha <span className="text-[#3498db]">Ahmed</span>
               </button>
            </div>
            <div className="flex items-center justify-center gap-6 lg:gap-12 w-[56%]">
               {navItems.map((item, index) => {
                  return (
                     <button
                        key={item.id}
                        onClick={() => scrollToSection(item.section)}
                        className="flex items-center gap-1 group text-white hover:text-[#3498db] transition-colors duration-300 font-medium"
                     >
                        {item.icon}
                        <span className="group-hover:text-[#3498db] transition-colors duration-300">
                           {item.name}
                        </span>
                     </button>
                  );
               })}
            </div>
            <div className="w-[22%] flex justify-end">
               <Link
                  href="/Talha-Ahmed.pdf"
                  download="Talha-Ahmed.pdf"
                  passHref
               >
                  <button className="bg-[#3498db] flex items-center gap-2 px-6 py-3 rounded-sm hover:bg-[#2980b9] transition-colors duration-300 cursor-pointer text-white font-semibold">
                     <FaDownload className="mb-[1px]" /> Resume
                  </button>
               </Link>
            </div>
         </nav>
      </>
   );
}

export default NavBar;
