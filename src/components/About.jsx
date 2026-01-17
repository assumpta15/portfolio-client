// export default function About() {
//   return (
//     <section className="py-20 px-6 bg-gray-50">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-6">About Me</h2>
//         <p className="text-gray-600 leading-relaxed">
//           I’m a fullstack developer focused on building clean,
//           responsive and user-friendly web applications.
//         </p>
//       </div>
//     </section>
//   );
// }







import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <motion.div
      
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 60, rotateX: -15 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        //transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{ perspective: 1200 }}

        whileHover={{
    rotateX: 3,
    rotateY: 3,
    scale: 1.02,
  }}
  transition={{ type: "spring", stiffness: 120 }}
      >
        <h2 className="text-4xl font-bold mb-6">
          About Me
        </h2>

        <p className="text-gray-600 leading-relaxed text-lg">
          I’m a fullstack developer focused on building clean,
          responsive and user-friendly web applications.
        </p>
      </motion.div>
    </section>
  );
}
