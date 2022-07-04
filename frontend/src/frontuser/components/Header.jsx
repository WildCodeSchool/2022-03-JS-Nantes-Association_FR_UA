import React, { useState } from "react";
import "../../assets/styles/Header.css";

import Logo from "./Logo";
import Don from "./Don";
import MenuBurger from "./MenuBurger";

export default function Header() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? "show_nav" : null}  `}>
      <Logo />
      <Don />
      <MenuBurger handleShowLinks={handleShowLinks} />
    </nav>
  );
}
