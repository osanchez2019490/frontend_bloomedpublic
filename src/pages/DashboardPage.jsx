import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Navbar,
  Publications,

} from "../components";

export const DashboardPage = () => {
  return (
    <Router>
      <Navbar />
      <div className="max-w-screen-md mx-auto pt-20 px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>
      </div>
    </Router>
  );
};
