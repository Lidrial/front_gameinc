import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { logout } from '../../actions';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import {Button} from "@mui/material";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const role = useSelector((state) => state.role);


  const handleLogout = () => {

    localStorage.removeItem("access_token");
    dispatch(logout());

    //navigate log login page
    window.location.href = '/connexion';
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
            className={`fill-white h-4 w-4 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-white h-4 w-4 ${isOpen ? "block" : "hidden"}`}
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
              href="/jeux"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white-200 mr-4"
          >
            Jeux
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
        <div className="flex items-center gap-5">
          <button className={"text-white"} onClick={() => console.log('isLoggedIn', isLoggedIn)}>log</button>
          <button className={`${isLoggedIn ? "block" : "hidden"} inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white hover:bg-amber-600 rounded-md transition duration-300` }>
            Favoris
          </button>
          <button className={`${isLoggedIn && (role === 1 || role === 2) ? "block" : "hidden"} inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white hover:bg-amber-600 rounded-md transition duration-300` }>
            Mes jeux
          </button>
          <Button
            onClick={handleLogout}
            className="ml-4 text-white hover:text-white-200 flex items-center"
          >
            <LogoutIcon className={"text-red-600"}/>
          </Button>
          <Button
              href="/connexion"
              className="ml-4 text-white hover:text-white-200 flex items-center"
          >
            <LoginIcon className={"text-green-600"}/>
          </Button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
