import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import News from "../pages/News";
import Involve from "../pages/Involve";

export default function Body() {
  return (
    <div>
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/involve" element={<Involve />} />
        </Routes>
      </div>
    </div>
  );
}
