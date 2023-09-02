//ici la page de garde avec les cartes jeux
//soit on est connecté et elle affiche les jeux, soit on ne l'est pas et elle affiche quelques jeux et le formulaire d'inscription 

import React from "react";
import GameCard from "../components/Games/gamecard";

const HomeScreen = () => {
  // Exemple de données de jeux mais il faudra faire un fetch vers ton back puis map sur ce qui est en DB, j'ai la flemme de faire un json lol 
  const latestReleases = [
    {
      id: 1,
      title: "Game 1",
      imageUrl: "game1.jpg",
    },
    {
      id: 2,
      title: "Game 2",
      imageUrl: "game2.jpg",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mt-4">
        YOUR PLACE TO TEST AND PLAY
      </h1>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Latest Releases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {latestReleases.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen