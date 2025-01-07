import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RoomsPage from "./pages/RoomsPage";
import BarPage from "./pages/BarPage";
import RestaurantPage from "./pages/RestaurantPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import ActivitiesPage from "./pages/ActivitesPage";
import AboutUsPage from "./pages/AboutUsPage";
import LoginPage from "./pages/LoginPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import UserDashoard from "./pages/UserDashoard";
import RestaurantDashboard from "./pages/RestaurantDashboard";
import BarDashboard from "./pages/BarDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import CartPage from "./pages/CartPage";
import BookingPage from "./pages/BookingPage";
import PaymentPage from "./pages/PaymentPage";
import ConfirmationPage from "./pages/ConfirmationPage";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/bar" element={<BarPage />} />
          <Route path="/restaurant" element={<RestaurantPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/user/dashboard" element={<UserDashoard />} />
          <Route path="/restaurant/dashboard" element={<RestaurantDashboard />} />
          <Route path="/bar/dashboard" element={<BarDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
