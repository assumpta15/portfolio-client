
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
        // const res = await api.get("/projects");
        const res = await api.get("/api/projects");

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


























