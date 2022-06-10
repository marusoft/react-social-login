import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect} from "react";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async() => {
      try {
        const res = await  fetch("http://localhost:5000/auth/login/success", {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        })
        const resObject = await res.json();
        setUser(resObject.user);
      } catch (error) {
        console.log(error)
      }
    }
    getUser();
  },  []);

  console.log(user);

  return (
    <BrowserRouter>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/post/:id" element={user ? <Post /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
