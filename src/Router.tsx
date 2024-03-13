import { Route } from "react-router";
import { BrowserRouter, Routes } from "react-router-dom";
import App from "./App";
import Link from "./pages/Link/Link";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Link" element={<Link />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
