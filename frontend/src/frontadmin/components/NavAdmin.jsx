import { Link } from "react-router-dom";

export default function NavAdmin() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/admin/login">Login</Link>
        </li>
        <li>
          <Link to="/admin/register">Register</Link>
        </li>
        <li>
          <Link to="/admin/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
}
