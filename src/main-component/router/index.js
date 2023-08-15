import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "../HomePage";
import AboutPage from "../AboutPage";
import ServicePage from "../ServicePage";
import ServiceSingle from "../ServiceDetails";
import CarListingPage from "../CarListingPage";
import CarBookingPage from "../CarBookingPage";
import GalleryPage from "../GalleryPage";
import ProductPage from "../ProductPage";
import ProductSinglePage from "../ProductSingle";
import CartPage from "../CartPage";
import Checkout from "../Checkout";
import BlogPage from "../BlogPage";
import BlogSinglePage from "../BlogSinglePage";
import ErrorPage from "../ErrorPage";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";
import ContactPage from "../ContactPage";

const AllRoute = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/service-single" element={<ServiceSingle />} />
          <Route path="/car-listing" element={<CarListingPage />} />
          <Route path="/car-booking" element={<CarBookingPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product-single" element={<ProductSinglePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog-single" element={<BlogSinglePage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AllRoute;
