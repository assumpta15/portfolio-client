
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

export default function PublicProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await api.get("/projects");
        setProjects(res.data.data || []);
      } catch (error) {
        console.error("Failed to fetch projects", error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="py-24 text-center text-gray-500">
        Loading projects...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-14">
        My Projects
      </h1>

      {projects.length === 0 && (
        <p className="text-center text-gray-500">
          No projects available
        </p>
      )}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project._id}
            onClick={() => navigate(`/projects/${project._id}`)}
            className="group cursor-pointer bg-white rounded-xl shadow 
                       hover:shadow-xl hover:-translate-y-1 
                       transition-all duration-300"
          >
            {/* IMAGE */}
            <div className="h-48 bg-gray-200 flex items-center justify-center rounded-t-xl overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover 
                             group-hover:scale-105 transition duration-300"
                />
              ) : (
                <span className="text-gray-500 text-sm">
                  No Image
                </span>
              )}
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {project.description
                  ? project.description.length > 70
                    ? project.description.slice(0, 70) + "..."
                    : project.description
                  : "No description"}
              </p>

              <p className="mt-4 text-sm text-blue-600 font-medium">
                View project →
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



























// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import API from "../utils/api";

// export default function PublicProjects() {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await API.get("/projects");

//         // API response shape: { success, data }
//         const allProjects = res.data.data || [];

//         // Show only featured projects (optional rule)
//         const featuredProjects = allProjects.filter(
//           (project) => project.featured
//         );

//         setProjects(featuredProjects);
//       } catch (error) {
//         console.error("Failed to load projects", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   if (loading) {
//     return (
//       <div className="text-center py-20 text-gray-500">
//         Loading projects...
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-16">
//       <h1 className="text-4xl font-bold mb-12 text-center">
//         My Projects
//       </h1>

//       {projects.length === 0 ? (
//         <p className="text-center text-gray-500">
//           No featured projects yet.
//         </p>
//       ) : (
//         <div className="grid md:grid-cols-3 gap-8">
//           {projects.map((project) => (
//             <Link
//               key={project._id}
//               to={`/projects/${project._id}`}
//               className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
//             >
//               {/* Image */}
//               {project.image ? (
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="h-56 w-full object-cover"
//                 />
//               ) : (
//                 <div className="h-56 bg-gray-200 flex items-center justify-center text-gray-500">
//                   No Image
//                 </div>
//               )}

//               {/* Content */}
//               <div className="p-6">
//                 <h2 className="text-xl font-semibold mb-2">
//                   {project.title}
//                 </h2>

//                 <p className="text-gray-600 text-sm line-clamp-3">
//                   {project.description}
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
