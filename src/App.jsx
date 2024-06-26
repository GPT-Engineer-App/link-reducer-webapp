import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import About from "./pages/About.jsx";
import ShortenLink from "./pages/ShortenLink.jsx";
import Register from "./pages/Register.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/about" element={<About />} />
        <Route path="/shorten-link" element={<ShortenLink />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
