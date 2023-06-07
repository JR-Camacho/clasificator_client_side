import { Routes, Route } from "react-router-dom";
import { About, Test } from "../Index";

import { PageNotFound } from "../../../Pages/Index";

const FashionRoutes = () => {
  return (
    <Routes>
      <Route path="/test" element={<Test />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default FashionRoutes;
