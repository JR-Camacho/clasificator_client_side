import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Model, Suport, PageNotFound } from "../Pages/Index";

import { CatsDogsRoutes } from "../feactures/DogsVsCats/Index";
import { FashionRoutes } from "../feactures/Fashion/Index";
import { FlowersRoutes } from "../feactures/Flowers/Index";
import { MnistRoutes } from "../feactures/Mnist/Index";

import ScrollToTop from "../helpers/ScrollToTop";

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<Model />} />
        <Route path="/suport" element={<Suport />} />
        <Route path="/models/cats-vs-dogs/*" element={<CatsDogsRoutes />} />
        <Route path="/models/fashion/*" element={<FashionRoutes />} />
        <Route path="/models/flowers/*" element={<FlowersRoutes />} />
        <Route path="/models/mnist/*" element={<MnistRoutes />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
