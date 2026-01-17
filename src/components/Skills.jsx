// export default function Skills() {
//   return (
//     <section className="max-w-6xl mx-auto px-6 py-20">
//       <h2 className="text-3xl font-bold text-center mb-10">
//         Skills & Technologies
//       </h2>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//         {[
//           "JavaScript",
//           "React",
//           "Node.js",
//           "Express",
//           "MongoDB",
//           "Tailwind CSS",
//           "REST APIs",
//           "Git & GitHub",
//         ].map((skill) => (
//           <div
//             key={skill}
//             className="py-4 px-6 bg-white shadow rounded-lg font-medium"
//           >
//             {skill}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }





export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-10">
        Skills & Technologies
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center perspective">
        {[
          "JavaScript",
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "Tailwind CSS",
          "REST APIs",
          "Git & GitHub",
        ].map((skill) => (
          <div
            key={skill}
            className="
              bg-white shadow-lg rounded-xl font-medium
              py-6 px-4
              transition-all duration-500
              hover:-translate-y-3 hover:shadow-2xl
              hover:[transform:rotateX(8deg)_rotateY(8deg)]
            "
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
