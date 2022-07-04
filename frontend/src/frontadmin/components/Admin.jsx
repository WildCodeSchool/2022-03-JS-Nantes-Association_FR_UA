import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Logout from "../pages/Logout";

export default function Admin() {
  return (
    <div>
      <div className="admin">
        <Routes>
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/register" element={<Register />} />
          <Route path="/admin/logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  );
}
