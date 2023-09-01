import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import LoginForm from './components/Forms/LoginForm'
import RegistrationForm from './components/Forms/RegistrationForm'
import Navbar from "./components/Layout/navbar"
import HomeScreen from "./screens/HomeScreen"
import GameSubmissionForm from "./components/Forms/GameSubmissionForm"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/inscription" element={<RegistrationForm />} />
        <Route path="/connexion" element={<LoginForm />} />
        <Route path="/poster_un_jeu" element={<GameSubmissionForm />} />
      </Routes>
    </Router>
  );
};

export default App
