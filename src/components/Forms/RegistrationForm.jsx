import { useState } from "react";
const RegistrationForm = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    role: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: ""
  });

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
    //logique pour envoyer les données au serveur
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-center text-2xl font-semibold mb-4">Inscription</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              Prénom
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Nom
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
              Pseudo
            </label>
            <input
                type="text"
                id="userName"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                required
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
          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Rôle
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              required
            >
              <option value="joueur">Joueur</option>
              <option value="developpeur">Développeur</option>
            </select>
          </div>
          {formData.role === "developpeur" && (
            <div className="mb-4">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Société
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white hover:bg-amber-600 rounded-md transition duration-300"
          >
            S'inscrire
          </button>
          <div className="mt-4 text-center">
          <p>Vous avez déjà un compte ? <a href="/connexion" className="text-blue-500">Se connecter</a></p>
        </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
