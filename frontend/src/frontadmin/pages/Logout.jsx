/* eslint-disable no-alert */
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function Logout() {
  const { setLoggedUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/users/logout`, {
        withCredentials: true,
      })
      .then(() => {
        setLoggedUser({
          status: false,
          user: {},
        });
      })
      .catch((err) => {
        if (err.response.status === 401) {
          alert("Vous ne pouvez pas vous déconnecter sans être connecté");
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="submit" value="Se déconnecter" />
    </form>
  );
}

export default Logout;
