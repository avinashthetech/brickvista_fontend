import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

import GalleryPage from "./pages/GalleryPage";
import ProjectPage from "./pages/ProjectPage";
import CareerPage from "./pages/CareerPage";

import Login from "./pages/Login";

import Dashboard from "./pages/admin/Dashboard";
import AdminRoute from "./pages/routes/AdminRoute"; // ✅ fixed

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Admin Protected */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}