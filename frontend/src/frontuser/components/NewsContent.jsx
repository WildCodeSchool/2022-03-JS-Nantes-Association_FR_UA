import React from "react";
import "../../assets/styles/NewsContent.css";
import news1 from "../../assets/img/news1.jpg";
import news2 from "../../assets/img/news2.png";
import news3 from "../../assets/img/news3.jpg";
import news4 from "../../assets/img/news4.png";

export default function NewsContent() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="post-slide">
            <div className="post-img">
              <img src={news1} alt="" />
            </div>
            <div className="post-content">
              <h3 className="post-title">Notre dernière actu 1.</h3>
              <p className="post-description">
                Le 3 juin notre camion de 40 T arrive d'Ukraine à vide. Il est
                chargé dans notre entrepôt 88 bld Jules Verne. Les dons
                proviennent de Nantes, Vertou, et les Sables d'Olonne.
              </p>
              <span className="post-date">
                <i className="fa fa-clock-o" />
                03 / 06 / 2022
              </span>
            </div>
          </div>

          <div className="post-slide">
            <div className="post-img">
              <img src={news2} alt="" />
            </div>
            <div className="post-content">
              <h3 className="post-title">Notre dernière actu 2.</h3>
              <p className="post-description">
                Le 4 juin le camion en cours de chargement. Les dons collectés
                sont des produits de 1ere nécessité alimentation non périssable,
                produits d'hygiène, médicaments, matériel de survie. L'ensemble
                des cartons est trié en fonction des bénéficiaires: adultes ou
                enfants.
              </p>
              <span className="post-date">
                <i className="fa fa-clock-o" />
                04 / 06 / 2022
              </span>
            </div>
          </div>

          <div className="post-slide">
            <div className="post-img">
              <img src={news3} alt="" />
            </div>
            <div className="post-content">
              <h3 className="post-title">Notre dernière actu 3.</h3>
              <p className="post-description">
                Le 5 juin Une partie de l'équipe de l'association Avenir
                Franco-Ukrainien. Fin du chargement, le camion est prêt à
                partir. Destination la ville de KhmelnytskyÏ.
              </p>
              <span className="post-date">
                <i className="fa fa-clock-o" />
                05 / 06 / 2022
              </span>
            </div>
          </div>

          <div className="post-slide">
            <div className="post-img">
              <img src={news4} alt="" />
            </div>
            <div className="post-content">
              <h3 className="post-title">Notre dernière actu 4.</h3>
              <p className="post-description">
                Le 11 juin Arrivée de notre camion de 40t en Ukraine à
                KhmelnytskyÏ. C'est l'heure du déchargement avec l'équipe de
                logistique sur place. Les colis humanitaires sont stockés dans
                l'entrepôt. Ils seront distribués avec des petites camionnettes
                dans les villes à partir de KhmelnytskyÏ. Et tout cela grâce à
                votre générosité et à votre soutien.
              </p>
              <span className="post-date">
                <i className="fa fa-clock-o" />
                11 / 06 /2022
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
