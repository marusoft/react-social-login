const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">marusoft app</span>
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
    </div>
  );
};

export default Navbar;
