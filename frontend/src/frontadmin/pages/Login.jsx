/* eslint-disable no-restricted-syntax */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useContext, useState } from "react";
import axios from "axios";
import "../../assets/styles/Login.css";
import logo from "../../assets/img/logo.png";
import AuthContext from "../context/AuthContext";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { setLoggedUser } = useContext(AuthContext);
  const handleChange = (e) => {
    e.preventDefault();

    setForm((currentForm) => ({
      ...currentForm,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/user/login`,
        { ...form },
        { withCredentials: true }
      )
      .then(({ data }) =>
        setLoggedUser({
          status: true,
          user: data,
        })
      );
  };

  return (
    <div className="login-box">
      <img className="logo-login" src={logo} alt="logo" />
      <h2>Bienvenue sur l'administration de votre site</h2>
      <h3>Identifiez-vous</h3>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <label hmtlFor="email">
            Email
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="user-box">
          <label htmlFor="password">
            Mot de passe
            <input
              id="password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="submit-box">
          <a href="à actualiser quand l'interface admin sera en place">
            <span />
            <span />
            <span />
            <span />
            <button type="submit" value="Se connecter">
              Se connecter
            </button>
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
