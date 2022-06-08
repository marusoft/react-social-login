import Navbar from "./components/Navbar";
import "./App.css"
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <Post /> */}
      <Login />
    </div>
  );
};

export default App;
