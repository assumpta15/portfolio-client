// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PublicProjects from "./pages/PublicProjects";
// import ProjectDetails from "./pages/ProjectDetails";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<PublicProjects />} />
//         <Route path="/projects" element={<PublicProjects />} />
//         <Route path="/projects/:id" element={<ProjectDetails />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;





import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PublicProjects from "./pages/PublicProjects";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";
import AdminMessages from "../../admin/src/pages/AdminMessages";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* push content down because navbar is fixed */}
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<PublicProjects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/messages" element={<AdminMessages />} />


          

        </Routes>
      </div>
    </BrowserRouter>
  );
}

