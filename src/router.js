// src/router.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/mainPage/mainPage';
import About from './Pages/About/about';
import Service from './Pages/service/service';
import DetailService from './Pages/Detail/detail';
import PricingPlan from './Pages/pricingPlan/pricingPlan';
import Blog from './Pages/Blog/blog';

const RouterConfig = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Service />} />
    <Route path="/detail-service" element={<DetailService />} />
    <Route path="/pricing-plan" element={<PricingPlan />} />
    <Route path="/blog" element={<Blog />} />
  </Routes>
);

export default RouterConfig;
