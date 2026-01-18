





// // import { useEffect, useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import api from "../utils/api";

// // export default function ProjectDetails() {
// //   const { id } = useParams();
// //   const navigate = useNavigate();

// //   const [project, setProject] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchProject = async () => {
// //       try {
// //         const res = await api.get(`/projects/${id}`);
// //         setProject(res.data.data);
// //       } catch (error) {
// //         console.error("Failed to load project", error);
// //         setProject(null);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchProject();
// //   }, [id]);

// //   if (loading) {
// //     return (
// //       <div className="py-24 text-center text-gray-500">
// //         Loading project...
// //       </div>
// //     );
// //   }

// //   if (!project) {
// //     return (
// //       <div className="py-24 text-center">
// //         <p className="text-gray-500 mb-6">
// //           Project not found
// //         </p>
// //         <button
// //           onClick={() => navigate("/")}
// //           className="text-blue-600 font-medium hover:underline"
// //         >
// //           ← Back to projects
// //         </button>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="max-w-5xl mx-auto px-6 py-20">
// //       {/* BACK BUTTON */}
// //       <button
// //         onClick={() => navigate(-1)}
// //         className="text-blue-600 font-medium mb-10 hover:underline"
// //       >
// //         ← Back
// //       </button>

// //       {/* IMAGE */}
// //       <div className="w-full h-[420px] bg-gray-200 rounded-xl overflow-hidden mb-10">
// //         {project.image ? (
// //           <img
// //             src={project.image}
// //             alt={project.title}
// //             className="w-full h-full object-cover"
// //           />
// //         ) : (
// //           <div className="flex items-center justify-center h-full text-gray-500">
// //             No Image
// //           </div>
// //         )}
// //       </div>

// //       {/* CONTENT */}
// //       <h1 className="text-4xl font-bold mb-4">
// //         {project.title}
// //       </h1>

// //       <p className="text-gray-600 text-lg leading-relaxed">
// //         {project.description || "No description provided."}
// //       </p>

// //       {/* OPTIONAL LINKS */}
// //       <div className="mt-10 flex flex-wrap gap-4">
// //         {project.liveUrl && (
// //           <a
// //             href={project.liveUrl}
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
// //           >
// //             Live Demo
// //           </a>
// //         )}

// //         {project.githubUrl && (
// //           <a
// //             href={project.githubUrl}
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
// //           >
// //             View Code
// //           </a>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }







// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import api from "../utils/api";

// export default function ProjectDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [project, setProject] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     api
//       .get(`/projects/${id}`)
//       .then((res) => {
//         setProject(res.data.data);
//       })
//       .catch(() => {
//         navigate("/projects");
//       })
//       .finally(() => setLoading(false));
//   }, [id, navigate]);

//   if (loading) {
//     return (
//       <div className="text-center py-20 text-gray-500">
//         Loading project...
//       </div>
//     );
//   }

//   if (!project) {
//     return (
//       <div className="text-center py-20 text-gray-500">
//         Project not found
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-5xl mx-auto px-6 py-16">
//       {/* BACK */}
//       <button
//         onClick={() => navigate(-1)}
//         className="text-sm text-blue-600 mb-6 hover:underline"
//       >
//         ← Back to Projects
//       </button>

//       {/* TITLE */}
//       <h1 className="text-4xl font-bold mb-4">
//         {project.title}
//       </h1>

//       {/* DESCRIPTION */}
//       <p className="text-gray-600 text-lg mb-8">
//         {project.description}
//       </p>

//       {/* IMAGE */}
//       {project.image && (
//         <div className="mb-10">
//           <img
//             src={project.image}
//             alt={project.title}
//             className="rounded-xl shadow w-full object-cover"
//           />
//         </div>
//       )}

//       {/* SECTIONS */}
//       <div className="grid md:grid-cols-2 gap-10">
//         {/* LEFT */}
//         <div>
//           <h2 className="text-xl font-semibold mb-3">
//             🧠 What this project does
//           </h2>
//           <p className="text-gray-700 leading-relaxed">
//             {project.problem ||
//               "This project solves a real-world problem by providing a scalable, secure, and user-friendly solution built with modern web technologies."}
//           </p>

//           <h2 className="text-xl font-semibold mt-8 mb-3">
//             ⚙️ Key Features
//           </h2>
//           <ul className="list-disc pl-5 text-gray-700 space-y-2">
//             {(project.features || [
//               "Authentication & Authorization",
//               "CRUD operations",
//               "Responsive UI",
//               "REST API integration",
//             ]).map((feature, index) => (
//               <li key={index}>{feature}</li>
//             ))}
//           </ul>
//         </div>

//         {/* RIGHT */}
//         <div>
//           <h2 className="text-xl font-semibold mb-3">
//             🛠 Tech Stack
//           </h2>
//           <ul className="space-y-2 text-gray-700">
//             <li>
//               <strong>Frontend:</strong>{" "}
//               {project.frontend || "React, Tailwind CSS"}
//             </li>
//             <li>
//               <strong>Backend:</strong>{" "}
//               {project.backend || "Node.js, Express"}
//             </li>
//             <li>
//               <strong>Database:</strong>{" "}
//               {project.database || "MongoDB"}
//             </li>
//             <li>
//               <strong>Auth:</strong>{" "}
//               {project.auth || "JWT Authentication"}
//             </li>
//           </ul>

//           {/* LINKS */}
//           <div className="mt-8 flex gap-4">
//             {project.liveUrl && (
//               <a
//                 href={project.liveUrl}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
//               >
//                 Live Demo
//               </a>
//             )}

//             {project.githubUrl && (
//               <a
//                 href={project.githubUrl}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
//               >
//                 GitHub Repo
//               </a>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import api from "../utils/api";

// export default function ProjectDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [project, setProject] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProject = async () => {
//       try {
//         const res = await api.get(`/projects/${id}`);
//         setProject(res.data.data);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProject();
//   }, [id]);

//   if (loading) {
//     return (
//       <p className="text-center text-gray-500 py-20">
//         Loading project...
//       </p>
//     );
//   }

//   if (!project) {
//     return (
//       <p className="text-center text-red-500 py-20">
//         Project not found
//       </p>
//     );
//   }

//   return (
//     <div className="max-w-5xl mx-auto px-6 py-16">
//       {/* Back */}
//       <button
//         onClick={() => navigate(-1)}
//         className="text-sm text-blue-600 mb-6 hover:underline"
//       >
//         ← Back to projects
//       </button>

//       {/* Image */}
//       <div className="rounded-xl overflow-hidden shadow mb-10">
//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-[400px] object-cover"
//         />
//       </div>

//       {/* Title */}
//       <h1 className="text-3xl font-bold mb-4">
//         {project.title}
//       </h1>

//       {/* Description */}
//       <p className="text-gray-700 leading-relaxed mb-8">
//         {project.description}
//       </p>

//       {/* Tech Stack */}
//       {project.techStack?.length > 0 && (
//         <div className="mb-8">
//           <h3 className="font-semibold mb-3">Tech Stack</h3>
//           <div className="flex flex-wrap gap-3">
//             {project.techStack.map((tech, index) => (
//               <span
//                 key={index}
//                 className="px-4 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Links */}
//       <div className="flex gap-4">
//         {project.liveUrl && (
//           <a
//             href={project.liveUrl}
//             target="_blank"
//             rel="noreferrer"
//             className="px-6 py-3 bg-black text-white rounded-lg hover:opacity-90"
//           >
//             Live Site
//           </a>
//         )}

//         {project.githubUrl && (
//           <a
//             href={project.githubUrl}
//             target="_blank"
//             rel="noreferrer"
//             className="px-6 py-3 border border-black rounded-lg hover:bg-black hover:text-white transition"
//           >
//             GitHub Repo
//           </a>
//         )}
//       </div>
//     </div>
//   );
// }



















import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../utils/api";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await api.get(`/api/projects/${id}`);
        setProject(res.data.data);
      } catch (err) {
        console.error(err);
        setError("Project not found");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center py-20 text-gray-500">
        Loading project...
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={() => navigate("/projects")}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-gray-600 hover:underline mb-6"
      >
        ← Back
      </button>

      {/* Image */}
      <div className="w-full h-[400px] bg-gray-200 rounded-xl overflow-hidden mb-8">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            No image available
          </div>
        )}
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">
        {project.title}
      </h1>

      {/* Description */}
      <p className="text-gray-700 text-lg mb-8">
        {project.description}
      </p>

      {/* Tech Stack */}
      {project.techStack?.length > 0 && (
        <div className="mb-8">
          <h3 className="font-semibold mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Links */}
      <div className="flex gap-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800"
          >
            Live Demo
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-black rounded hover:bg-gray-100"
          >
            GitHub Repo
          </a>
        )}
      </div>
    </div>
  );
}

