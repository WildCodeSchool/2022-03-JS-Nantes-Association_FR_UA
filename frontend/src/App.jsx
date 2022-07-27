/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalContext from "./frontuser/contexts/GlobalContext";
import Home from "./frontuser/pages/Home";
import Involve from "./frontuser/pages/Involve";
import Login from "./frontadmin/pages/Login";
import ContentHome from "./frontadmin/pages/ContentHome";
import "./assets/styles/App.css";
import LayoutAdmin from "./frontadmin/pages/LayoutAdmin";
import ContentInvolve from "./frontadmin/pages/ContentInvolve";
import ContentOther from "./frontadmin/pages/ContentOther";
import ContentPhoto from "./frontadmin/pages/ContentPhoto";
import MemberForm from "./frontadmin/components/Form/MemberForm";
import Members from "./frontadmin/pages/Members";
import Register from "./frontadmin/pages/Register";
import { AuthContextProvider } from "./frontadmin/context/AuthContext";

export default function App() {
  const [traduction, setTraduction] = useState({});
  const [lang, setLang] = useState("FR");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/traduction`)
      .then((response) => response.json())
      .then((data) => setTraduction(data));
  }, []);

  return (
    <div className="app">
      <AuthContextProvider>
        <GlobalContext.Provider value={{ traduction, lang, setLang }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/involve" element={<Involve />} />
            <Route path="/admin/" element={<LayoutAdmin />}>
              <Route index element={<ContentHome />} />
              <Route path="/admin/login" element={<Login />} />
              <Route path="/admin/register" element={<Register />} />
              <Route path="/admin/accueil" element={<ContentHome />} />
              <Route path="/admin/donation" element={<ContentInvolve />} />
              <Route path="/admin/other" element={<ContentOther />} />
              <Route path="/admin/photos" element={<ContentPhoto />} />
              <Route path="/admin/membre" element={<Members />} />
              <Route path="/admin/addmembre" element={<MemberForm />} />
            </Route>
          </Routes>
        </GlobalContext.Provider>
      </AuthContextProvider>
    </div>
  );
}
