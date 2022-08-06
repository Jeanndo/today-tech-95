import { Routes, Route } from "react-router-dom";
import BasicEditor from "./../components/Editors/BasicEditor/Basic";
import Home from "./../components/Home/Home";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/editors/basic" element={<BasicEditor />} />
    </Routes>
  );
};

export default MyRoutes;
