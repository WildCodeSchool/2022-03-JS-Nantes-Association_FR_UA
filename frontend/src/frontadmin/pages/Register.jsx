/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
/* eslint-disable no-restricted-syntax */
import { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/Login.css";
import logo from "../../assets/img/logo.png";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Merci de renseigner au moins un email et un mot de passe");
    } else {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/users/register`,
          { email, password },
          { withCredentials: true }
        )
        .then((response) => console.log(response.data));
    }
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users`, {
        withCredentials: true,
      })
      .then((res) => res.data)
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          alert("Vous n'êtes pas connecté");
        }
        if (err.response.status === 403) {
          alert("Vous n'êtes pas autorisé");
        }
        console.error(err);
      });
  }, []);

  return (
    <>
      <div className="login-box">
        <img className="logo-login" src={logo} alt="logo" />
        <h2>Enregistrez-vous</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input id="firstname" type="firstname" name="firstname" />
            <label hmtlFor="name">Nom</label>
          </div>
          <div className="user-box">
            <input id="lastname" type="lastname" name="lastname" />
            <label hmtlFor="lastname">Prénom</label>
          </div>
          <div className="user-box">
            <input
              id="email"
              type="email"
              name="email"
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
              <button type="submit" value="S'enregistrer">
                S'enregistrer
              </button>
            </a>
          </div>
        </form>
      </div>
      <div>
        <p>Users List</p>
        <ul>
          {users.localeCompare((user) => (
            <li key={user.id}>Email: {user.email}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Register;
