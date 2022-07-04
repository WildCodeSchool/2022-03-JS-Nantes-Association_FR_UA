import { useState } from "react";
import "../../assets/styles/Footer.css";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import mail from "../../assets/mail.svg";
import tel from "../../assets/phone.svg";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Veuillez entrer votre email");
    }
  };

  return (
    <div className="footer fullwidth">
      <div className="gridrow">
        <div className="footerBorderBottom">
          <div className="footerSocial">
            <ul className="footerSocialList">
              <li>
                <a
                  href="https://m.facebook.com/Association-Avenir-Franco-Ukrainien-110917231562439/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="menuLinkIcon" src={facebook} alt="facebook" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/accounts/login/?next=/tryzubasso/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="menuLinkIcon"
                    src={instagram}
                    alt="instagram"
                  />
                </a>
              </li>
              <li>
                <a
                  href="mailto:assoavenirukrfr@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="menuLinkIcon" src={mail} alt="mail" />
                </a>
              </li>
              <li>
                <a href="tel:(+33)0632414456" target="_blank" rel="noreferrer">
                  <img className="menuLinkIcon" src={tel} alt="tel" />
                </a>
              </li>
            </ul>
          </div>
          <h5 className="signupTitle">Inscrivez vous à la newsletter</h5>
          <div className="signupFormContainer">
            <form onSubmit={handleSubmit} className="newsletterSignup">
              <input
                className="newsletterEmail"
                id="email"
                name="email"
                type="email"
                placeholder="Entrez votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="newsletterSubmit" type="submit" value="submit">
                Envoyer
              </button>
            </form>
          </div>
          {/* Lien à venir */}
          <div className="legalMentionsContainer">
            <h5 className="legalMentions">
              <a className="legalMentionsTitle" href="Link à venir">
                Mentions Légales & politique de confidentialité{" "}
              </a>
            </h5>
          </div>
          <div className="copyrightContainer">
            <p className="copyright">
              {" "}
              &copy;{new Date().getFullYear()} Association Avenir Franco
              Ukrainien
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
