import React, { useState } from "react";

const GameSubmissionForm = () => {
  const [formData, setFormData] = useState({
    gameName: "",
    gameTypes: "",
    gameLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer les données au backend pour enregistrement etc
    //il faut que toutes les données de ton formulaire match avec ce que tu as en bdd quand tu submit le bouton 

    console.log("Données soumises :", formData);
  };

  return (

    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Soumettre un jeu</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="gameName" className="block text-sm font-medium text-gray-700">
            Nom du jeu
          </label>
          <input
            type="text"
            id="gameName"
            name="gameName"
            value={formData.gameName}
            onChange={handleChange}
            className="mt-1 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Type de jeu
          </label>
          <select
            name="gameType"
            value={formData.gameType}
            onChange={handleChange}
            className="mt-1 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            required
          >
            <option value="" disabled>
              Sélectionnez le type de jeu
            </option>
            <option value="Jeux d'action-aventure">Jeux d'action-aventure</option>
            <option value="Jeux d'aventure">Jeux d'aventure</option>
            <option value="Jeux d'évasion">Jeux d'évasion</option>
            <option value="Jeux de combat">Jeux de combat</option>
            <option value="Jeux de tir à la première personne">Jeux de tir à la première personne</option>
            <option value="Jeux de tir à la troisième personne">Jeux de tir à la troisième personne</option>
            <option value="Jeux d'arène de combat en ligne multijoueur">Jeux d'arène de combat en ligne multijoueur</option>
            <option value="Jeux de plateforme">Jeux de plateforme</option>
            <option value="Jeux de stratégie en temps réel">Jeux de stratégie en temps réel</option>
            <option value="Jeux de rythme">Jeux de rythme</option>
            <option value="Jeux vidéo de rôle">Jeux vidéo de rôle</option>
            <option value="Jeux de simulation">Jeux de simulation</option>
            <option value="Jeux sportifs">Jeux sportifs</option>
            <option value="Jeux casual">Jeux casual</option>
            <option value="Jeux par navigateur">Jeux par navigateur</option>
            <option value="Mini-jeux">Mini-jeux</option>
            <option value="Jeux de réalité alternative">Jeux de réalité alternative</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="gameLink" className="block text-sm font-medium text-gray-700">
            Lien direct vers le jeu
          </label>
          <input
            type="text"
            id="gameLink"
            name="gameLink"
            value={formData.gameLink}
            onChange={handleChange}
            className="mt-1 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white hover:bg-amber-600 rounded-md transition duration-300"
          >
            METTRE MON JEU EN LIGNE
          </button>
        </div>
      </form>
    </div>
  );
};

export default GameSubmissionForm;
