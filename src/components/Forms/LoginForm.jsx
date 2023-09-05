import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {login, setRole, setToken, setUserId} from '../../actions';
import axios from "axios";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios.post("http://127.0.0.1:8000/api/login", {
      email: formData.email,
      password: formData.password,
    }).then((res) => {
      console.log(res.data);
      //store acces_token in local storage
      localStorage.setItem("access_token", res.data.access_token);
      dispatch(login());
      dispatch(setRole(res.data.role_id));
      dispatch(setToken(res.data.access_token));
      dispatch(setUserId(res.data.user_id));
    });

    // logique pour la connexion de ton back
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-center text-2xl font-semibold mb-4">Connexion</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white hover:bg-amber-600 rounded-md transition duration-300"
          >
            Se connecter
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>Vous n'avez pas de compte ? <a href="/inscription" className="text-blue-500">S'inscrire</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
