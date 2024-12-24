import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/guest/home/HomePage";
import AboutPage from "./pages/guest/about/AboutPage";
import ProductDetail from "./pages/guest/product/ProductDetail";
import LoginPage from "./pages/auth/login/LoginPage";
import Dashboard from "./pages/admin/dashboard/Dashboard";

function App() {
  return (
    <Routes>
      {/* Guest Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product/:slug" element={<ProductDetail />} />

      {/* Admin Routes */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Auth Routes */}
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
