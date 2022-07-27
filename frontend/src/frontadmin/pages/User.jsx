import { useEffect, useState } from "react";

import axios from "axios";

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.VITE.BACKEND_URL}/users`)
      .then(({ data }) => setUsers(data));
  }, []);

  return (
    <div>
      <p>Users List</p>
      <ul>
        {users.map((user) => (
          <li>{user.email}</li>
        ))}
      </ul>
    </div>
  );
}
export default User;
