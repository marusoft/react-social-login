import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          marusoft app
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img
              src="https://res.cloudinary.com/marusofteamwork/image/upload/v1627628750/frontendassessment/redmi.png"
              alt="redmi"
              className="avatar"
            />
          </li>
          <li className="listItem">@marusoft</li>
          <li className="listItem">Logout</li>
        </ul>
      ) : (
        <Link className="link" to="login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
