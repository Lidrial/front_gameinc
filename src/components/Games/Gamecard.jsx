import React from "react";
import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
  return (
    <Link to={`/jeux/${game.id}`}>
      <div className="card">
        <img src={game.imageUrl} alt={game.title} />
        <h3>{game.title}</h3>
        {/* Autres informations sur le jeu */}
      </div>
    </Link>
  );
};

export default GameCard;
