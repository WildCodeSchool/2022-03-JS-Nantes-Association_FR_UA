/* eslint-disable no-alert */
import axios from "axios";

function Logout() {
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/logout`, {
        withCredentials: true,
      })
      .then(() => {
        alert("Vous êtes bien déconnecté");
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
