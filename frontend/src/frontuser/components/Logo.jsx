import logo from "../../assets/logo.png";
import "../../assets/styles/Logo.css";

export default function Logo() {
  return (
    <img
      className="headerLogo"
      src={logo}
      alt="Le logo de l'association avec un pigeon à une branche d'olivier"
    />
  );
}