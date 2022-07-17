import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoForm from "../components/Form/PhotoForm";

export default function ContentPhoto() {
  const [content, setContent] = useState([]);

  // Récupérer la donnée initial à afficher dans le formulaire
  async function getInitialData() {
    await axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/photo`)
      .then((result) => setContent(result.data))
      .then()
      .catch((error) => {
        console.error(error);
      });
  }

  // Récupérer la donnée au montage du composant
  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <div className="admin-content">
      <h1> Modifier les photos </h1>
      <PhotoForm content={content} />
    </div>
  );
}
