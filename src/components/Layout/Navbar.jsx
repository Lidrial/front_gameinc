import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  //  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // logique pour vérifier si l'utilisateur est connecté ici.
  // return (
  //   <>
  //    {isLoggedIn && (
  //       <nav >
  //        contenu navbar....
  //      </nav>


  const handleLogout = () => {
    //logique de déconnexion, supprime le token d'authentification ?
  };

  return (
    <nav className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 flex items-center justify-between p-4">
      <div className="flex items-center text-white mr-6 lg:mr-72">
        {/* mettre logo ici */}
        <span className="text-xl font-semibold">GameInc</span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-4 w-4 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-4 w-4 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"
          }`}
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white-200 mr-4"
          >
            Home
          </a>
          <a
            href="/poster_un_jeu"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white-200 mr-4"
          >
            Poster un jeu
          </a>
          <a
            href="/profile"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white-200 mr-4"
          >
            Profil
          </a>
        </div>
        <div className="flex items-center">
          <button className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white hover:bg-amber-600 rounded-md transition duration-300">
            Mes jeux
          </button>
          <button
            onClick={handleLogout}
            className="ml-4 text-white hover:text-white-200 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
