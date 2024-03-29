// route the homepage
// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import './assets/app.css';
import Lobbies from "./pages/Lobbies/Lobbies";
import Profile from "./pages/Profile";
import LobbyPage from "./pages/Lobbies/LobbyPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/lobby/:gamename" element={<Lobbies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/lobby/:game/:roomId" element={<LobbyPage />} />
      </Routes>
    </div>
  );
}

export default App;
