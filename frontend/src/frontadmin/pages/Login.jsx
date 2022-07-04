/* eslint-disable no-restricted-syntax */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";
import axios from "axios";
import "../../assets/Login.css";
import logo from "../../assets/img/logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Merci de renseigner l'email et le mot de passe");
    } else {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/users/login`,
          { email, password },
          { withCredentials: true }
        )
        .then((response) => console.log(response.data))
        .catch((err) => {
          alert(err.response.data.error);
        });
    }
  };

  return (
    <div className="login-box">
      <img className="logo-login" src={logo} alt="logo" />
      <h2>Bienvenue sur l'administration de votre site</h2>
      <h3>Identifiez-vous</h3>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label hmtlFor="email">Email</label>
        </div>
        <div className="user-box">
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Mot de passe</label>
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
