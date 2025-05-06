import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import Photographers from "../screens/Photographers";
import WeddingVendors from "../screens/WeddingVendors";
import PhotographerDetails from "../screens/PhotographerDetails";
import WeddingVendors2 from "../screens/WeddingVendors2";
import WeddingBusiness from "../screens/WeddingBusiness";

const AppRouter = () => {
  return (
    <Router basename="/brittney-bay">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photographers" element={<Photographers />} />
        <Route path="/photographer/details" element={<PhotographerDetails />} />
        <Route path="/wedding-vendors" element={<WeddingVendors />} />
        <Route path="/wedding-vendors-2" element={<WeddingVendors2 />} />
        <Route path="/wedding-business" element={<WeddingBusiness />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
