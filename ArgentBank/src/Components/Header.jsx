import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import React from "react";
import logoArgentBank from "../Assets/Img/argentBankLogo.webp";

function Header() {
  // récupération du token du state Redux
  const token = useSelector((state) => state.auth.token);
  // récupération des données de l'utilisateur du state Redux
  const user = useSelector((state) => state.user.user);
  // récupération dispatch () pour dispatcher des actions
  const dispatch = useDispatch();
  //récupération navigate() pour naviguer vers d'autres routes
  const navigate = useNavigate();
  // handleSignOut() est appelée lors du clic sur "Sign Out"
  const handleSignOut = () => {
    // Suppression du token dans le localStorage et sessionStorage
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    // dispatche une action 'USER_LOGOUT' pour mettre à jour le state Redux
    dispatch({ type: "USER_LOGOUT" });
    // redirige vers la page de connexion
    navigate("/sign-in");
  };

  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logoArgentBank}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {token ? (
            <>
              <Link className="main-nav-item-user" to="/profile">
                <i className="fa fa-user-circle"></i>
                {user ? `${user.userName}` : ''}
              </Link>
              <Link className="main-nav-item" to="/sign-in" onClick={handleSignOut}>
                <i className="fa fa-sign-out"></i>
                Sign Out
              </Link>
            </>
          ) : (
            <Link className="main-nav-item" to="/sign-in">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;