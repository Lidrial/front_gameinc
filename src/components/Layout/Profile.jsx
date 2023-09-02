import React, { useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: "Flegel",
    email: "reeves@email.com",
    password: "******",
  });
  //il faudra recup les données user ici et les mettre en place
  //idem pour la modification : il faut une route dans ton back pour update un user !

  const handleEditClick = () => {
    setIsEditing(true);
  };
  //modifier les input

  const handleSaveClick = () => {
    setIsEditing(false);
    // Envoyez les données mises à jour au backend ici
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-4">
      <h2 className="text-2xl font-semibold mb-4">Mon Profil</h2>
      <div className="mb-4">
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
          Pseudo
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="mt-1 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          disabled={!isEditing}
        />
      </div>
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
          disabled={!isEditing}
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
          disabled={!isEditing}
        />
      </div>
      <div className="flex justify-end">
        {isEditing ? (
          <button
            onClick={handleSaveClick}
            className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600"
          >
            Enregistrer
          </button>
        ) : (
          <button
            onClick={handleEditClick}
            className="text-amber-500 hover:underline"
          >
            Modifier mon profil
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
