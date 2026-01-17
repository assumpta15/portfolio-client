// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 left-0 w-full bg-white border-b z-50">
//       <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
//         {/* LOGO / NAME */}
//         <Link to="/" className="text-xl font-bold">
//           Assumpta.dev
//         </Link>

//         {/* LINKS */}
//         <div className="hidden md:flex gap-8 text-sm font-medium">
//           <a href="#about" className="hover:text-blue-600 transition">
//             About
//           </a>
//           <a href="#projects" className="hover:text-blue-600 transition">
//             Projects
//           </a>
//           <a href="#contact" className="hover:text-blue-600 transition">
//             Contact
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }




















import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${scrolled ? "bg-white shadow-md py-3" : "bg-white py-5"}
      `}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="text-xl font-bold">
          Assumpta.dev
        </Link>

        {/* LINKS */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>
          <a href="#projects" className="hover:text-blue-600 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
