import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import HomeComponent from "./pages/Home";

const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomeComponent />} />
      </Route>
    </Routes>
  );
};

export default RouterApp;
