import { Route, Routes } from "react-router-dom";
import Homepage from "../src/layout/home/Home";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};

export default Router;
