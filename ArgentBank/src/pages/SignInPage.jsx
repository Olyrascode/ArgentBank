// Importation des hooks nécessaires de React, Redux et React Router
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function SignInPage() {
  // Initialisation des variables d'état locales
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  
  // Récupération de la fonction dispatch de Redux et du token d'authentification
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  
  // Récupération de la fonction navigate de React Router
  const navigate = useNavigate();

  // Si un token est présent, redirection vers la page de profil
  useEffect(() => {
    if (token) {
      navigate("/profile");
    }
  }, [token, navigate]);

  // Fonction appelée lors de la soumission du formulaire
  const handleSignIn = (event) => {
    event.preventDefault();
    // Envoi d'une requête POST à l'API pour se connecter
    fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: username, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur de connexion");
        }
        return response.json();
      })
      .then((data) => {
        // Si la connexion réussit, stockage du token et mise à jour du state Redux
        if (rememberMe) {
          localStorage.setItem("token", data.body.token);
        } else {
          sessionStorage.setItem("token", data.body.token);
        }
        dispatch({ type: "USER_LOGIN", payload: data.body.token });
      })
      .catch((error) => {
        // Gestion des erreurs de connexion
        console.error("Erreur de connexion", error);
        setErrorMessage("Erreur de connexion. Veuillez réessayer.");
      });
  };

  // Rendu du composant : un formulaire de connexion
  return (
    <div>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSignIn}>
            <div className="input-wrapper">
              <label htmlFor="username">E-mail</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">Sign In</button>
            {errorMessage && <p className="error">{errorMessage}</p>}
          </form>
        </section>
      </main>
    </div>
  );
}

// Exportation du composant SignInPage pour être utilisé ailleurs dans l'application
export default SignInPage;