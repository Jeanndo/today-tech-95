import { Routes, Route } from "react-router-dom";
import Home from "./../components/Home/Home";
import VideoConference from "./../components/Community/VideoChat";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meeting" element={<VideoConference />} />
    </Routes>
  );
};

export default MyRoutes;
