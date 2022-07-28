/* eslint-disable jsx-a11y/anchor-is-valid */
import Swal from "sweetalert2";
import JoinForm from "../components/JoinForm";
import ContactForm from "../components/ContactForm";
import "../../assets/styles/Involve.css";
import Kalina1 from "../../assets/img/Kalina1.svg";
import hand1 from "../../assets/img/hand1.jpg";
import hand2 from "../../assets/img/hand2.png";
import hand3 from "../../assets/img/hand3.png";
import heart from "../../assets/img/heart.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Traduction from "../components/Traduction";
import Separator from "../components/Separator";
import adhesion from "../../assets/adhesion.pdf";

export default function Involve() {
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      position: "center",
      icon: "info",
      title: "module de paiement à venir",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="InvolvePage">
      <Header />
      <div className="involve-container">
        <p className="involve-title">
          <span className="involve-span-title">
            <Traduction reference="involve_slogan1" />
          </span>
        </p>
        <p className="involve-title">
          <span className="involve-span-title">
            <Traduction reference="involve_slogan2" />
          </span>
        </p>

        <div className="card-container">
          <div className="card-wrapper">
            <div className="card">
              <div className="card-front">
                <img className="involve-pic" alt="hand1" src={hand1} />
              </div>
            </div>
          </div>

          <div className="card-wrapper">
            <div className="card">
              <div className="card-front">
                <h2 className="involve-h2">
                  <Traduction reference="involve_donate_title" />
                </h2>
                <p className="involve-p">
                  <Traduction reference="involve_donate_content" />
                </p>
                <img className="Kalina1-icon" alt="Kalina1" src={Kalina1} />
              </div>
              <div className="card-back">
                <div>
                  <p className="involve-p">
                    <Traduction reference="involve_donate_addendum" />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-wrapper">
            <div className="card">
              <div className="card-front">
                <img className="involve-pic" alt="hand2" src={hand2} />
              </div>
            </div>
          </div>

          <div className="card-wrapper">
            <div className="card">
              <div className="card-front">
                <h2 className="involve-h2">
                  <Traduction reference="involve_join_title" />
                </h2>
                <p className="involve-p">
                  <Traduction reference="involve_join_content" />
                </p>
                <img className="Kalina1-icon" alt="Kalina1" src={Kalina1} />
              </div>
              <div className="card-back">
                <div>
                  <p className="involve-p">
                    <Traduction reference="involve_join_addendum" />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-wrapper">
            <div className="card">
              <div className="card-front">
                <img className="involve-pic" alt="hand3" src={hand3} />
              </div>
            </div>
          </div>

          <div className="card-wrapper">
            <div className="card">
              <div className="card-front">
                <h2 className="involve-h2">
                  <Traduction reference="involve_engage_title" />
                </h2>
                <p className="involve-p">
                  <Traduction reference="involve_engage_content" />
                </p>
                <img className="Kalina1-icon" alt="Kalina1" src={Kalina1} />
              </div>
              <div className="card-back">
                <img className="involve-pic" alt="heart" src={heart} />
              </div>
            </div>
          </div>
        </div>
        <Separator />
        <div className="form-section">
          <div className="join-form">
            <JoinForm />
          </div>
          <div className="contact-form">
            <ContactForm />
            <div className="upload-btn-form">
              <a href={adhesion} download className="upload-btn">
                <span className="upload-span-btn">
                  <Traduction reference="other_button_upload" />
                </span>
              </a>
            </div>
            <div className="gift-btn-form">
              <a href="#" onClick={handleSubmit} className="gift-btn">
                <span className="gift-span-btn">
                  <Traduction reference="other_button_gift" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <Separator />
        <div className="final-img">
          <div id="stripped">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 1062">
              <polyline
                points="0,154 131,0 0,348 269,0 0,562 437,0 
	0,766 565,14 0,1062 719,0 289,1062 843,0 543,1062 995,0 729,1062 1161,0 947,1062 1307,0 1143,1062 1500,162 1299,1062 1500,830"
              />
            </svg>
          </div>
        </div>
        <Separator />
      </div>
      <Footer />
    </div>
  );
}
