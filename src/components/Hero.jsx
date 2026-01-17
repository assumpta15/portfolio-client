// export default function Hero() {
//   return (
//     <section className="min-h-screen flex items-center justify-center px-6 bg-lightBg dark:bg-darkBg">
//       <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
//         {/* Left Content */}
//         <div>
//           <p className="font-mono text-sm text-primary mb-4">
//             Hi, I’m Assumpta
//           </p>

//           <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight">
//             Full Stack <br /> Web Developer
//           </h1>

//           <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-md">
//             I build modern, scalable web applications using the MERN stack,
//             HTML, CSS, JavaScript, Tailwind CSS, and PHP.
//           </p>

//           <div className="mt-8 flex gap-4">
//             <button className="bg-primary text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
//               Contact Me
//             </button>

//             <button className="border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
//               Download CV
//             </button>
//           </div>
//         </div>

//         {/* Right Code Card */}
//         <div className="bg-lightCard dark:bg-darkCard rounded-xl p-6 shadow-xl">
//           <pre className="font-mono text-sm text-primary whitespace-pre-wrap">
// {`const developer = {
//   name: "Assumpta",
//   stack: ["MongoDB", "Express", "React", "Node"],
//   passion: "Building impactful apps"
// };`}
//           </pre>
//         </div>

//       </div>
//     </section>
//   );
// }










// export default function Hero() {
//   return (
//     <section className="min-h-screen flex items-center justify-center px-6 bg-white">
//       <div className="text-center max-w-3xl">
//         <h1 className="text-5xl font-extrabold mb-6">
//           Hi, I’m <span className="text-blue-600">Assumpta</span>
//         </h1>

//         <p className="text-xl text-gray-600 mb-8">
//           A frontend developer who builds clean, fast and user-focused web
//           experiences.
//         </p>

//         <a
//           href="#projects"
//           className="inline-block px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition"
//         >
//           View My Work
//         </a>
//       </div>
//     </section>
//   );
// }










export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* TEXT */}
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Hi, I’m <span className="text-blue-600">Assumpta</span>
          </h1>

          <p className="text-gray-600 mt-6 text-lg">
            A full-stack developer who builds scalable, secure,
            and user-focused web applications.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="bg-black text-white px-6 py-3 rounded-lg"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="border border-black px-6 py-3 rounded-lg"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src="/potrfolio.jpg"   // put image in /public
            alt="Assumpta"
            className="w-85 h-80 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
