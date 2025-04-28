import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import Photographers from "../screens/Photographers";
import WeddingVendors from "../screens/WeddingVendors";

// Import your components/pages

const AppRouter = () => {
  return (
    <Router basename="/brittney-bay">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photographers" element={<Photographers />} />
        <Route path="/wedding-vendors" element={<WeddingVendors />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
