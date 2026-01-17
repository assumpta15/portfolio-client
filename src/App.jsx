
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PublicProjects from "./pages/PublicProjects";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      
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

